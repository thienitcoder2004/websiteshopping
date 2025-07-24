using Microsoft.AspNetCore.Mvc;

namespace websiteshopping.Controllers
{
    public class CartController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Checkout()
        {
            return View();
        }

        public IActionResult Complete()
        {
            return View();
        }
    }
}
