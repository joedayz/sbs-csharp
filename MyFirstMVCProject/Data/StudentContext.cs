using Microsoft.EntityFrameworkCore;
using People.Models;

namespace People.Data
{
    public class StudentContext : DbContext
    {
        public StudentContext (DbContextOptions<StudentContext> options)
            : base(options)
        {
        }

        public DbSet<Student> Students { get; set; }
        public DbSet<ContactInfo> ContactInfos { get; set; }
        public DbSet<Department> Departments { get; set; }     
        
        public DbSet<StudentTeacher> StudentTeachers { get; set; }
        
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<StudentTeacher>()
                .HasKey(st => new { st.StudentID, st.TeacherID });
        }     
    }
    
    
}