using Microsoft.AspNet.Mvc;


namespace aspnet5ng2seed.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
