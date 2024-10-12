using Microsoft.EntityFrameworkCore;

namespace People.Models
{
          public class UsersContext: DbContext
          {
                    public UsersContext(DbContextOptions<UsersContext> options): base(options)
                    {

                    }

                    public DbSet<User> Users { get; set; }
          }
}