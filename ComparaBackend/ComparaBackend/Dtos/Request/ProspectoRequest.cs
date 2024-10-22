namespace ComparaBackend.Dtos.Request;

public class ProspectoRequest
{
    
    public string Nombres { get; set; }
    public string Apellidos { get; set; }
    public int TipoDocumentoId { get; set; }
    public string NumeroDocumento { get; set; }
    public string Email { get; set; }
    public string NumeroCelular { get; set; }
    public int DepartamentoId { get; set; }
    public bool Activo { get; set; }
}