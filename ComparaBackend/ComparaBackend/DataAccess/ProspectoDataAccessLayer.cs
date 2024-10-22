using ComparaBackend.Interfaces;
using ComparaBackend.Models;

namespace ComparaBackend.DataAccess;

public class ProspectoDataAccessLayer: IProspectoService
{
    private readonly ComparaDBContext _dbContext;
    readonly IProspectoService _prospectoService;

        
    public ProspectoDataAccessLayer(ComparaDBContext dbContext)
    {
        _dbContext = dbContext;
    }
    
    public int AddProspecto(Prospecto prospecto)
    {
        try
        {
            _dbContext.Prospecto.Add(prospecto);
            _dbContext.SaveChanges();

            return 1;
        }
        catch (Exception e)
        {
            Console.WriteLine(e);
            throw;
        }
    }
}