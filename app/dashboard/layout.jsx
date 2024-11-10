import DashboardNavbar from "@/components/ui/dashboard/Navbar";
import DashboardFooter from "@/components/ui/dashboard/Footer";

export default function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <DashboardNavbar />
      <main className="flex-grow">{children}</main>
      <DashboardFooter />
    </div>
  );
}
