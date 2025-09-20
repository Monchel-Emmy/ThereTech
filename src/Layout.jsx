import NavBar from "./components/navBar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

import { Analytics } from "@vercel/analytics/next"

const Layout = () => {
  return (
    <div className="layout">
      <Analytics/>
      <NavBar />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
