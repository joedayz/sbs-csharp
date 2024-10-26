using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Models;

public class User
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int Id { get; set; }

    public string Username { get; set; }

    public string Password { get; set; }
    public User()
    {
        Username = string.Empty; // Assign a nonnull value to the Type property
        Password = string.Empty;
    }
}