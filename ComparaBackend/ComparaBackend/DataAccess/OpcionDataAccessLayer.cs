using ComparaBackend.Interfaces;
using ComparaBackend.Models;
using Microsoft.EntityFrameworkCore;

namespace ComparaBackend.DataAccess;

public class OpcionDataAccessLayer: IOpcionService
{
    private readonly ComparaDBContext _dbContext;
    private readonly IOpcionService _opcionService;

    public OpcionDataAccessLayer(ComparaDBContext dbContext)
    {
        _dbContext = dbContext;
    }


    
    public List<Opcion> GetAllOpciones()
    {
        try
        {
            return _dbContext.Opcion.AsNoTracking().ToList();
        }
        catch
        {
            throw;
        }
    }

    public int AddOpcion(Opcion opcion)
    {
        try
        {
            _dbContext.Opcion.Add(opcion);
            _dbContext.SaveChanges();

            return 1;
        }
        catch
        {
            throw;
        }
    }
}