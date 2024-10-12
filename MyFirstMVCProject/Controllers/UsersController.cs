using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using People.Models;

namespace People.Controllers
{

    public class UsersController : Controller
    {
        private readonly UserContext _context;

        public UsersController(UserContext context)
        {
            _context = context;
        }

        // action methods
        // GET: Users
        public async Task<IActionResult> Index()
        {
            bool IsActive = true;
            return View(await 
                _context.Users.FromSqlRaw("select * from Users where IsActive={{IsActive}} ORDER BY Name ASC")
                    .ToListAsync());
        }
        
        // action methods
        // GET: Users
        public async Task<IActionResult> InActive()
        {
            bool IsActive = false;
            return View(await 
                _context.Users.FromSqlRaw("elect * from Users where IsActive={{IsActive}} ORDER BY Name ASC")
                    .ToListAsync());
        }
        
        // GET: Users/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var user = await _context.Users.FromSqlRaw($"select * from Users where ID={id}").FirstOrDefaultAsync();
            if (user == null)
            {
                return NotFound();
            }
            return View(user);
        }
        
        // GET: Users/Create
        public IActionResult Create()
        {
            return View();
        }

        // POST: Users/Create
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("ID, Name, Email, Password, PhoneNumber, IsActive")] User user)
        {
            if (ModelState.IsValid)
            {
                user.IsActive = true;
                _context.Add(user);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            return View(user);
        }
        
        // GET: Users/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var user = await _context.Users.FindAsync(id);
            if (user == null)
            {
                return NotFound();
            }
            return View(user);
        }
        
        // POST: Users/Edit/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id,
            [Bind("ID, Name, Email, Password, PhoneNumber, IsActive")] User user)
        {
            if (id != user.ID)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(user);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException e)
                {
                    if (!UserExists(user.ID))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                    
                }
                return RedirectToAction(nameof(Index));
            }
            return View(user);
        }
        
        // GET: Users/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }
            var user = await _context.Users.FirstOrDefaultAsync(m => m.ID == id);
            if (user == null)
            {
                return NotFound();
            }
            return View(user);
        }
        
        //POST: Users/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            var user = await _context.Users.FindAsync(id);
            _context.Users.Remove(user);
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool UserExists(int id)
        {
            return _context.Users.Any(e => e.ID == id);
        }
    }

}