using ComparaBackend.Interfaces;
using ComparaBackend.Models;
using Microsoft.EntityFrameworkCore;

namespace ComparaBackend.DataAccess;

public class DepartamentoDataAccessLayer: IDepartamentoService
{
    private readonly ComparaDBContext _dbContext;
    readonly IDepartamentoService _departamentoService;

    public DepartamentoDataAccessLayer(ComparaDBContext dbContext)
    {
        _dbContext = dbContext;
    }
    
    public List<Departamento> GetAllDepartamentos()
    {
        try
        {
            return _dbContext.Departamento.AsNoTracking().ToList();
        }
        catch
        {
            throw;
        }
    }
}