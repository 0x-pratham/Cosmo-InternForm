import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

function MainLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col text-ink w-full overflow-x-clip">
      <Navbar />
      <main className="page-main flex-1 w-full min-w-0 pt-[var(--nav-height)]">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;
