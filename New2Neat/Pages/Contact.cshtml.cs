using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using New2Neat.Model;
using New2Neat.Services;

namespace New2Neat.Pages
{
    public class ContactModel : PageModel
    {
        private readonly IMailService _mailService;

        public ContactModel(IMailService mailService)
        {
            _mailService = mailService;
        }

        [BindProperty]
        public Email Email { get; set; }
        public void OnGet()
        {

        }

        public async Task OnPostAsync()
        {
            try
            {
                if (ModelState.IsValid)
                {
                    await _mailService.Send(Email);
                    ModelState.Clear();
                }
            }
            catch (Exception ex)
            {
                var message = ex;
            }
        }
    }
}
