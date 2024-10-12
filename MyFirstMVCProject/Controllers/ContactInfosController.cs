using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using People.Data;
using People.Models;

namespace People.Controllers
{

    public class ContactInfosController: Controller
    {
       private readonly StudentContext _context;

        public ContactInfosController(StudentContext context)
        {
            _context = context;
        }

        // GET: ContactInfos
        public async Task<IActionResult> Index()
        {
            var studentContext = _context.ContactInfos.Include(c => c.Student);
            return View(await studentContext.ToListAsync());
        }

        // GET: ContactInfos/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var contactInfo = await _context.ContactInfos
                .Include(c => c.Student)
                .FirstOrDefaultAsync(m => m.ID == id);
            if (contactInfo == null)
            {
                return NotFound();
            }

            return View(contactInfo);
        }

        // GET: ContactInfos/Create
        public IActionResult Create()
        {
            ViewData["StudentID"] = new SelectList(_context.Students, "ID", "FullName");
            return View();
        }

        // POST: ContactInfos/Create
        [HttpPost]
        public async Task<IActionResult> Create([Bind("ID,Email,PhoneNumber,StudentID")] ContactInfo contactInfo)
        {
            if (ModelState.IsValid)
            {
                _context.Add(contactInfo);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            ViewData["StudentID"] = new SelectList(_context.Students, "ID", "FullName", contactInfo.StudentID);
            return View(contactInfo);
        }

        // GET: ContactInfos/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var contactInfo = await _context.ContactInfos.FindAsync(id);
            if (contactInfo == null)
            {
                return NotFound();
            }
            ViewData["StudentID"] = new SelectList(_context.Students, "ID", "FullName", contactInfo.StudentID);
            return View(contactInfo);
        }

        // POST: ContactInfos/Edit/5
        [HttpPost]
        public async Task<IActionResult> Edit(int id, [Bind("ID,Email,PhoneNumber,StudentID")] ContactInfo contactInfo)
        {
            if (id != contactInfo.ID)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(contactInfo);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!ContactInfoExists(contactInfo.ID))
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
            ViewData["StudentID"] = new SelectList(_context.Students, "ID", "FullName", contactInfo.StudentID);
            return View(contactInfo);
        }

        // GET: ContactInfos/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var contactInfo = await _context.ContactInfos
                .Include(c => c.Student)
                .FirstOrDefaultAsync(m => m.ID == id);
            if (contactInfo == null)
            {
                return NotFound();
            }

            return View(contactInfo);
        }

        // POST: ContactInfos/Delete/5
        [HttpPost, ActionName("Delete")]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            var contactInfo = await _context.ContactInfos.FindAsync(id);
            _context.ContactInfos.Remove(contactInfo);
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool ContactInfoExists(int id)
        {
            return _context.ContactInfos.Any(e => e.ID == id);
        }
    }

}