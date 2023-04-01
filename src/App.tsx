import Dashboard from "./components/Dashboard/Dashboard";
import Sidebar from "./components/Sidebar/Sidebar";

export default function Page() {
  return (
    <section className="h-screen overflow-hidden flex">
      <Sidebar />
      <Dashboard />
    </section>
  );
}
