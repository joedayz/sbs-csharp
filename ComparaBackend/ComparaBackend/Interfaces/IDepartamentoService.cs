using ComparaBackend.Models;

namespace ComparaBackend.Interfaces;

public interface IDepartamentoService
{
    List<Departamento> GetAllDepartamentos();
}