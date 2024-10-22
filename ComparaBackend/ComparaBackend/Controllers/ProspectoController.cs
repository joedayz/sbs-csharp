using ComparaBackend.Dtos.Request;
using ComparaBackend.Interfaces;
using ComparaBackend.Models;
using Microsoft.AspNetCore.Mvc;

namespace ComparaBackend.Controllers;

[Produces("application/json")]
[Route("api/[controller]")]
public class ProspectoController: Controller
{
    
    
    private readonly IProspectoService _prospectoService;
        
    public ProspectoController(IProspectoService prospectoService)
    {
        _prospectoService = prospectoService;
    }
    
    /// <summary>
    /// Add Prospecto
    /// </summary>
    /// <returns>void</returns>
    [HttpPost]
    public void AddProspecto([FromBody] ProspectoRequest prospectoRequest)
    {
        Prospecto prospecto = new Prospecto()
        {
            Activo = prospectoRequest.Activo,
            Apellidos = prospectoRequest.Apellidos,
            Email = prospectoRequest.Email,
            Nombres = prospectoRequest.Nombres,
            DepartamentoId = prospectoRequest.DepartamentoId,
            FechaRegistro = DateTime.Now.Date,
            NumeroCelular = prospectoRequest.NumeroCelular,
            NumeroDocumento = prospectoRequest.NumeroDocumento,
            TipoDocumentoId = prospectoRequest.TipoDocumentoId
        };

        _prospectoService.AddProspecto(prospecto);
            
    }
    
}