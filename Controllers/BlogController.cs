using Microsoft.AspNetCore.Mvc;

namespace websiteshopping.Controllers
{
    public class BlogController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
