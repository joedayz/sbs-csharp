using ComparaBackend.Dtos.Request;
using ComparaBackend.Models;

namespace ComparaBackend.Interfaces;

public interface IConsultaProductoService
{
    List<ConsultaEntidadProducto> consulta(ConsultaProductoFinancieroRequest request, int pagina);

    ConsultaEntidadProducto getProductoFinanciero(int id);
}