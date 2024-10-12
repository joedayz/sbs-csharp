using Microsoft.EntityFrameworkCore;
using People.Models;

namespace People.Data
{
          public class UsersContext: DbContext
          {
                    public UsersContext(DbContextOptions<UsersContext> options): base(options)
                    {

                    }

                    public DbSet<User> Users { get; set; }
          }
}