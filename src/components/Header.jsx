import { format } from "date-fns";
import logo from "../assets/logo.png";
const Header = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-2 mt-4 text-accent">
      <div>
        <img src={logo} alt="Brand logo" />
      </div>
      <p className="text-lg">Journalism Without Fear or Favour</p>
      <p className="font-semibold">
        {format(new Date(), "EEEE, MMMM d, yyyy")}
      </p>
    </div>
  );
};

export default Header;
