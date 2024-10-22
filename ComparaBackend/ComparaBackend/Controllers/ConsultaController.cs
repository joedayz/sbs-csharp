using ComparaBackend.Dtos.Request;
using ComparaBackend.Interfaces;
using ComparaBackend.Models;
using Microsoft.AspNetCore.Mvc;

namespace ComparaBackend.Controllers;

[Produces("application/json")]
[Route("api/[controller]")]
public class ConsultaController : Controller
{
    private readonly IConsultaProductoService _consultaProductoService;

    public ConsultaController(IConsultaProductoService consultaProductoService)
    {
        _consultaProductoService = consultaProductoService;
    }

    [HttpGet]
    [Route("detalle/{id}")]
    public ConsultaEntidadProducto GetProductoFinanciero(int id)
    {
        return _consultaProductoService.getProductoFinanciero(id);
    }

    [HttpPost]
    [Route("producto-financiero/pagina/{page}")]
    public List<ConsultaEntidadProducto> Post([FromBody] ConsultaProductoFinancieroRequest request, int page)
    {
        return _consultaProductoService.consulta(request, page);
    }
}