using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace everthingBeginHere.Controllers
{
    public class HomeController : Controller
    {
        [HttpGet]
        //
        // GET: /Home/
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult GetList()
        {
            return Json(new List<Commodity>() {new Commodity(){ComType="食品"},new Commodity(){ComType="饮料"} });
        }

        public ActionResult GetTable()
        {
            var list = new List<CommodityInfo>{
                new CommodityInfo(){ID=1,Name="旺旺仙贝",IsUsing=true,Com=new Commodity(){ComType="食品"}},
                new CommodityInfo(){ID=2,Name="冰糖雪梨",IsUsing=true,Com=new Commodity(){ComType="饮料"}},
                new CommodityInfo(){ID=2,Name="丹麦曲奇",IsUsing=true,Com=new Commodity(){ComType="食品"}},
                new CommodityInfo(){ID=2,Name="立顿奶茶",IsUsing=true,Com=new Commodity(){ComType="饮料"}}
            };
            return Json(list);
        }
	}

    [Serializable]
    public class Commodity
    {
        private string _comType;

        public string ComType
        {
            get { return _comType; }
            set { _comType = value; }
        }

    }
    [Serializable]
    public class CommodityInfo
    {
        private int _id;

        public int ID
        {
            get { return _id; }
            set { _id = value; }
        }

        private string _name;

        public string Name
        {
            get { return _name; }
            set { _name = value; }
        }
        private bool _isUsing;

        public bool IsUsing
        {
            get { return _isUsing; }
            set { _isUsing = value; }
        }
        private Commodity _com;

        public Commodity Com
        {
            get { return _com; }
            set { _com = value; }
        }


    }
}