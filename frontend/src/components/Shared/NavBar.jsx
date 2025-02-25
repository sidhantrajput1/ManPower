import {Link} from 'react-router-dom'

function NavBar() {
  return (
    <div className="bg-white">
      <div className="flex justify-between mx-auto max-w-7xl py-4 items-center px-4">
        <Logo />
        <NavItems />
        <Button />
      </div>
    </div>
  );
}

function Logo() {
  return (
    <div className="">
      <h3 className="text-xl font-medium">Skils Squid</h3>
    </div>
  );
}

function NavItems() {
  return (
    <div className="">
      <ul className="sm:flex gap-6 items-center hidden ">
        <li className="text-base cursor-pointer">
          <Link to="/">Home</Link>
        </li>
        <li className="text-base cursor-pointer">
           <Link to="/about">About</Link>
        </li>
        <li className="text-base cursor-pointer">
          Service
        </li>
        <li className="text-base cursor-pointer">
          Employers
        </li>
        <li className="text-base cursor-pointer">
          Job Seekers
        </li>
        <li className="text-base cursor-pointer">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
}

function Button() {
  return (
    <div className="flex gap-4">
      <button className="border px-4 py-2 rounded-lg text-sm">
        <Link to="/login">Sign In</Link>
      </button>
      <button className="text-white bg-black py-2 px-4 text-sm rounded-lg">
        <Link to="/signup">Get Started</Link>
      </button>
    </div>
  );
}

export default NavBar;
