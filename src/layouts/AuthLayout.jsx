import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

const AuthLayout = ({ children }) => {
  return (
    <div className="bg-base-200">
      <div className="container px-4 md:px-0 flex flex-col min-h-screen">
        <nav className="pt-6">
          <Navbar />
        </nav>
        <section className="flex items-center justify-center grow">
          <Outlet>{children}</Outlet>
        </section>
      </div>
    </div>
  );
};

export default AuthLayout;
