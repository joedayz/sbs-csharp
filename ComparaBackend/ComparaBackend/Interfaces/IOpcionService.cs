using ComparaBackend.Models;

namespace ComparaBackend.Interfaces;

public interface IOpcionService
{
    List<Opcion> GetAllOpciones();
    int AddOpcion(Opcion opcion);   
}