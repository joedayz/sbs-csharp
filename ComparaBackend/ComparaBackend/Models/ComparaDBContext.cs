using Microsoft.EntityFrameworkCore;

namespace ComparaBackend.Models;

public partial class ComparaDBContext: DbContext
{
    public ComparaDBContext()
    {
        
    }
    public ComparaDBContext(DbContextOptions<ComparaDBContext> options) : base(options)
    {
        
    }
    
    public virtual DbSet<Opcion> Opcion { get; set; }
    public virtual DbSet<Departamento> Departamento { get; set; }
    public virtual DbSet<ConsultaEntidadProducto> ConsultaEntidadProducto { get; set; }

    public virtual DbSet<ProductoFinanciero> ProductoFinanciero { get; set; }
    public virtual DbSet<Prospecto> Prospecto { get; set; }
    
}