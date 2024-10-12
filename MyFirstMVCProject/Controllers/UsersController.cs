using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using People.Data;
using People.Models;

namespace People.Controllers
{

    public class UsersController : Controller
    {
        private readonly IUserRepo _user;

        public UsersController(IUserRepo user)
        {
            _user = user;
        }

        // action methods
        // GET: Users
        public async Task<IActionResult> Index()
        {
            return View(_user.GetAllUsers());
        }
        
        // action methods
        // GET: Users
        // public async Task<IActionResult> InActive()
        // {
        //     bool IsActive = false;
        //     return View(await 
        //         _context.Users.FromSqlRaw("select * from Users where IsActive={{IsActive}} ORDER BY Name ASC")
        //             .ToListAsync());
        // }
        
        // GET: Users/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var user = _user.GetUserById(id);
            if (user == null)
            {
                return NotFound();
            }

            return View(user);
        }
        
        // GET: Users/Create
        public IActionResult Create()
        {
            return View();
        }

        // POST: Users/Create
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("ID, Name, Email, Password, PhoneNumber, IsActive")] User user)
        {
            if (ModelState.IsValid)
            {
                user.IsActive = true;
                _user.CreateUser(user);
                
                return RedirectToAction(nameof(Index));
            }
            return View(user);
        }
        
        // GET: Users/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var user = _user.GetUserById(id);
            if (user == null)
            {
                return NotFound();
            }
            return View(user);
        }
        
        // POST: Users/Edit/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id,
            [Bind("ID, Name, Email, Password, PhoneNumber, IsActive")] User user)
        {
            if (id != user.ID)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                _user.UpdateUser(user);

                return RedirectToAction(nameof(Index));
            }
            return View(user);
        }
        
        // GET: Users/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            
                if (id == null)
                {
                    return NotFound();
                }

                var user = _user.GetUserById(id);
                if (user == null)
                {
                    return NotFound();
                }

                return View(user);
        }
        
        //POST: Users/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            _user.DeleteUser(id);
            return RedirectToAction(nameof(Index));
        }
        
        // CRUD (Create, Read, Update, Delete), HTTP METHODS (POST, GET, PUT/PATCH, DELETE)
    }

}