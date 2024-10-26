using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Models;

public class Room
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int Id { get; set; }

    [Required]
    [Column(TypeName = "nvarchar(100)")]
    public string Type { get; set; }

    public int Capacity { get; set; }

    public int RatePerDay { get; set; }
    public Room()
    {
        Type = string.Empty; // Assign a non-null value to the Type property
    }
}