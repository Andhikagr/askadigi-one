import { ReactLenis } from "lenis/react";
import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

const Layout = ({ children }) => {
  return (
    <ReactLenis
      root
      options={{
        duration: 1, // durasi scroll (inertia)
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -15 * t)),
        smooth: true,
        autoRaf: true,
      }}
    >
      <div>
        <header>
          <Navbar />
        </header>
        <main>{children}</main>
        {/* <footer>
          <Footer />
        </footer> */}
      </div>
    </ReactLenis>
  );
};

export default Layout;
