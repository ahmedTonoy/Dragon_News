import { Outlet } from "react-router";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";
import LeftAside from "../components/HomeLayout/LeftAside";
import RightAside from "../components/HomeLayout/RightAside";

const HomeLayout = () => {
  return (
    <div className="container px-4 md:px-0">
      <header>
        <Header />
        <section className="my-10">
          <LatestNews />
        </section>
        <nav className="mb-15">
          <Navbar />
        </nav>
      </header>
      <main className="grid grid-cols-12 gap-5">
        <aside className="col-span-3 sticky top-5 h-fit">
          <LeftAside />
        </aside>
        <section className="main col-span-6">
          <Outlet />
        </section>
        <aside className="col-span-3 sticky top-5 h-fit">
          <RightAside />
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
