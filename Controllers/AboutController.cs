using Microsoft.AspNetCore.Mvc;

namespace websiteshopping.Controllers
{
    public class AboutController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
