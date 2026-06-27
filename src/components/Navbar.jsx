import { NavLink } from "react-router";
import userIcon from "../assets/user.png";

const Navbar = () => {
  return (
    <div className="grid grid-cols-1 gap-8 md:gap-0 md:grid-cols-3 items-center">
      <div className="hidden md:block"></div>
      <div className="flex justify-center gap-5 text-accent">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="flex items-center gap-3 justify-self-center md:justify-self-end">
        <img src={userIcon} alt="" />
        <button className="btn btn-primary md:px-8">Login</button>
      </div>
    </div>
  );
};

export default Navbar;
