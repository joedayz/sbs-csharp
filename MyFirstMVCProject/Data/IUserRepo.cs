using People.Models;

namespace People.Data
{
    public interface IUserRepo
    {
        User CreateUser(User user);
        IEnumerable<User> GetAllUsers();
        User GetUserById(int? id);
        User UpdateUser(User user);
        User DeleteUser(int id);
    }
}