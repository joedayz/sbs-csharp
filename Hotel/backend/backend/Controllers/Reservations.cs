using backend.Helpers;
using backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;

namespace backend.Controllers;

[ApiController]
[Route("api/[controller]")]
public class Reservations: ControllerBase
{
    private ApiContext _apiContext;
    private JwtOptions _jwtOptions;


    public Reservations(ApiContext apiContext, IOptions<JwtOptions> jwtOptions)
    {
        _apiContext = apiContext;
        _jwtOptions = jwtOptions.Value;
    }

    [HttpGet("/getAllReservations/{token}")]
    public ActionResult<IEnumerable<Reservation>> GetReservationsOfLoggedInUser(string token)
    {
        var validatedToken = JwtHelper.ValidateJwt(token, _jwtOptions.Secret);
        if (validatedToken == null)
        {
            return Unauthorized();
        }
        var userId = JwtHelper.ReturnUserFromToken(token, _jwtOptions.Secret);
        var reservations = _apiContext.Reservations.Where(r => r.UserId == userId);
        return Ok(reservations);
    }

    [HttpGet("/getAvailableRooms/{checkin}to{checkout}")]
    public ActionResult<IEnumerable<Room>> GetAvailableRooms(DateTime checkin, DateTime checkout)
    {
        if (checkin == checkout  || checkin <= DateTime.Now.AddDays(-1) || checkin >= checkout || checkout < DateTime.Now){
            return BadRequest("Invalid dates, please select the correct date pattern. Make sure Check-in or check-out dates are not from the the past and check in is not greater than or equal to checkout date. ");
        }

        var unavailableRoomIds = _apiContext.Reservations
            .Where(r => r.CheckInDate < checkout && r.CheckOutDate < checkin)
            .Select(r => r.RoomId)
            .Distinct();
        var availableRooms = _apiContext.Rooms
            .Where(r => !unavailableRoomIds.Contains(r.Id))
            .ToList();

        return availableRooms;
    }


}