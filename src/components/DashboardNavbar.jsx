import { Link, useNavigate } from "react-router-dom";
import { LogOut } from "lucide-react";

const DashboardNavbar = () => {
  const navigate = useNavigate();
  const userName = localStorage.getItem("userName") || "";
  const userRole = localStorage.getItem("userRole") || "";

  const handleLogout = () => {
    localStorage.removeItem("userName");
    localStorage.removeItem("userRole");
    navigate("/");
  };

  return (
    <div className="fixed top-0 z-50 w-full bg-[#0a0a0a] font-mono">
      <div className="flex items-center justify-between px-4 py-3 md:px-12">
        <Link
          to="/"
          className="cursor-pointer text-lg font-black tracking-[0.2em] text-white md:text-xl"
        >
          INTERVIEW
        </Link>

        <div className="flex items-center gap-4">
          <span className="hidden font-bold tracking-widest text-gray-400 uppercase md:inline">
            {userName}
          </span>
          <span className="hidden rounded border border-gray-600 px-2 py-0.5 font-mono text-xs text-gray-500 uppercase md:inline">
            {userRole}
          </span>
          <button
            onClick={handleLogout}
            className="flex cursor-pointer items-center gap-2 border border-red-600 bg-transparent px-4 py-2 text-[10px] font-bold tracking-widest text-red-500 uppercase transition-colors hover:bg-red-600 hover:text-white md:text-xs"
          >
            <LogOut size={14} />
            LOGOUT
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardNavbar;
