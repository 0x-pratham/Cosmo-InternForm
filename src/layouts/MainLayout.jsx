import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

function MainLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col text-ink">
      <Navbar />
      <main className="flex-1 w-full pt-[var(--nav-height)]">{children}</main>
      <Footer />
    </div>
  );
}

export default MainLayout;
