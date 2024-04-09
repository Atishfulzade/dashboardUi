import Analytics from "./components/analytics";
import Sidebar from "./components/sidebar";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";

function App() {
  const [openSidebar, setOpenSidebar] = useState(true);

  return (
    <Router>
      <div className="flex h-screen w-full items-center md:p-4 p-1 bg-slate-50">
        <Sidebar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
        <Routes>
          <Route path="/" element={<Outlet />} />
          <Route index element={<Analytics />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
