using Microsoft.AspNetCore.Mvc;

namespace websiteshopping.Controllers
{
    public class ContactController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
