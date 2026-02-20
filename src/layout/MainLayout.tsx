import { Outlet } from "react-router-dom";
import Navbar from "../components/commen/Navbar";
import Footer from "../components/commen/Footer";

function MainLayout() {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;
