namespace backend.Helpers;

public class JwtOptions
{
    public string Secret {get; set;}
    public JwtOptions()
    {
        Secret = string.Empty;
    }
}