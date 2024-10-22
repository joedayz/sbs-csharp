using ComparaBackend.Dtos.Request;
using ComparaBackend.Interfaces;
using ComparaBackend.Models;
using ComparaBackend.Util;
using Microsoft.EntityFrameworkCore;

namespace ComparaBackend.DataAccess;

public class ConsultaProductoDataAccessLayer : IConsultaProductoService
{
    private readonly ComparaDBContext _dbContext;
    readonly IConsultaProductoService _consultaProductoService;

    public ConsultaProductoDataAccessLayer(ComparaDBContext dbContext)
    {
        _dbContext = dbContext;
    }

    public List<ConsultaEntidadProducto> consulta(ConsultaProductoFinancieroRequest request, int pagina)
    {
        try
        {
            var consulta = from cep in _dbContext.ConsultaEntidadProducto
                select cep;

            if (!String.IsNullOrEmpty(request.CodigoProductoFinanciero.ToString()))
            {
                consulta = consulta.Where(s => s.TipoProductoId == request.CodigoProductoFinanciero);
            }

            if (!String.IsNullOrEmpty(request.TipoMonedaId.ToString()))
            {
                consulta = consulta.Where(s => s.MonedaId == request.TipoMonedaId);
            }

            if (!String.IsNullOrEmpty(request.MontoMaximoAceptable.ToString()))
            {
                consulta = consulta.Where(s => s.MontoMaximoPrestamo >= request.MontoMaximoAceptable);
            }

            if (!String.IsNullOrEmpty(request.PlazoMaximoMes.ToString()))
            {
                consulta = consulta.Where(s => s.PlazoMaximoMes >= request.PlazoMaximoMes);
            }

            if (!String.IsNullOrEmpty(request.IngresoPermitido.ToString()))
            {
                consulta = consulta.Where(s => s.IngresoPermitido >= request.IngresoPermitido);
            }

            if (!String.IsNullOrEmpty(request.DepartamentoId.ToString()))
            {
                consulta = consulta.Where(s => s.DepartamentoId == request.DepartamentoId);
            }

            if (!String.IsNullOrEmpty(request.TipoInstitucionId.ToString()))
            {
                consulta = consulta.Where(s => s.TipoInstitucionId == request.TipoInstitucionId);
            }

            if (!String.IsNullOrEmpty(request.MontoMaximoDeposito.ToString()))
            {
                consulta = consulta.Where(s => s.MontoMaximoDeposito >= request.MontoMaximoDeposito);
            }

            if (!String.IsNullOrEmpty(request.PlazoMaximoDia.ToString()))
            {
                consulta = consulta.Where(s => s.PlazoMaximoDia >= request.PlazoMaximoDia);
            }

            return (List<ConsultaEntidadProducto>)consulta.AsNoTracking()
                .OrderBy(x => x.ConsultaEntidadProductoId)
                .GetPaged(pagina, 20).Results;
        }
        catch
        {
            throw;
        }
    }

    public ConsultaEntidadProducto getProductoFinanciero(int id)
    {
        try
        {
            return (ConsultaEntidadProducto)_dbContext.ConsultaEntidadProducto.FirstOrDefault(s =>
                s.ConsultaEntidadProductoId == id);
        }
        catch
        {
            throw;
        }
    }
}