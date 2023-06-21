import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex flex-col py-5 px-10 gap-5">
      <div className="flex justify-between gap-3 bg-light-primary outline ">
        <div className="flex">
          <div className="w-3/5 bg-light-primary outline">
            <input type="text" className="w-full bg-light-primary outline" />
          </div>
          <div className="min-w-fit bg-light-primary">search btn</div>
        </div>
        <div className="outline bg-light-primary">cart</div>
      </div>
      <div className="flex gap-4 overflow-x-auto scrollbar-none">
        <div>
          <Link to="/books/all">
            <button>All</button>
          </Link>
        </div>
        <div>
          <Link to="/books/science">
            <button>science</button>
          </Link>
        </div>
        <div>
          <Link to="/books/fiction">
            <button>fiction</button>
          </Link>
        </div>
        <div>
          <Link to="/books/romance">
            <button>romance</button>
          </Link>
        </div>
        <div>
          <Link to="/books/fantasy">
            <button>fantasy</button>
          </Link>
        </div>
        <div>
          <Link to="/books/sf">
            <button>sf</button>
          </Link>
        </div>
        <div>
          <Link to="/books/kids">
            <button>kids</button>
          </Link>
        </div>
        <div>
          <Link to="/books/history">
            <button>history</button>
          </Link>
        </div>
        <div>
          <Link to="/books/art">
            <button>art</button>
          </Link>
        </div>
        <div>
          <Link to="/books/comics">
            <button>comics</button>
          </Link>
        </div>
        <div>
          <Link to="/books/art">
            <button>art</button>
          </Link>
        </div>
        <div>
          <Link to="/books/crime">
            <button>crime</button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
