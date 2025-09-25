import NavBar from "./components/navBar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";



const Layout = () => {
  return (
    <div className="layout">
 
      <NavBar />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
