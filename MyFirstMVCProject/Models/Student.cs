using System.ComponentModel.DataAnnotations;

namespace People.Models
{

    public class Student
    {
        public int ID { get; set; }

        [Required]
        [Display(Name = "Full Name")]

        public string FullName { get; set; }

        [Required]
        [Display(Name = "Roll Number")]
        public string RollNumber { get; set; }

        [Required]
        public double CGPA { get; set; }

        public ContactInfo ContactInfo { get; set; }
        
        public int DepartmentID { get; set; }
        public Department Department { get; set; }
        
        public List<StudentTeacher> StudentTeachers { get; set; }
    }

}