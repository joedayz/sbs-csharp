
using Microsoft.EntityFrameworkCore;
using People.Data;

namespace People.Models
{
          public static class SeedData
          {

                    public static void Initialize(IServiceProvider serviceProvider)
                    {
                              using (var context = new UsersContext(
                                        serviceProvider.GetRequiredService<DbContextOptions<UsersContext>>()))
                              {
                                        if (context.Users.Any())
                                        {
                                                  return;
                                        }
                                        context.Users.AddRange(
                                            new User
                                            {
                                                      Name = "Gary Chester",
                                                      Email = "GaryChester@gmail.com",
                                                      Password = "chesterPasswordISTRONG!",
                                                      PhoneNumber = "0900780601",
                                                      IsActive = true
                                            },

                                            new User
                                            {
                                                      Name = "Randy Kline",
                                                      Email = "Randy@Kline@.com",
                                                      Password = "Qwertyuiop!",
                                                      PhoneNumber = "0110885621",
                                                      IsActive = true
                                            },

                                            new User
                                            {
                                                      Name = "Mccauley Doherty",
                                                      Email = "Doherty@outlook.com",
                                                      Password = "password1!",
                                                      PhoneNumber = "0213778509",
                                                      IsActive = true
                                            },

                                            new User
                                            {
                                                      Name = "Louise Lyons",
                                                      Email = "Louise@gmail.com",
                                                      Password = "Es!u0l$n0yl",
                                                      PhoneNumber = "0753154952",
                                                      IsActive = true
                                            }
                                        );

                                        context.SaveChanges();

                              }

                    }


          }

}