import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { useState } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";

export default function Header() {
  const { dark, setDark } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="
      sticky top-0 z-50
      bg-white/90 dark:bg-slate-950/90
      backdrop-blur-md
      border-b border-[#d65db1]/20
      dark:border-[#d65db1]/10
      "
    >
      <div className="max-w-7xl mx-auto px-5 py-4">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="
            text-2xl font-black
            text-[#d65db1]
            hover:opacity-80
            transition
            "
          >
            TaskFlow
          </Link>

          {/* Desktop  */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className="
              text-[#5b21b6]
              dark:text-[#d65db1]
              hover:opacity-80
              transition
              "
            >
              Home
            </Link>

            <Link
              to="/tasks"
              className="
              text-[#5b21b6]
              dark:text-[#d65db1]
              hover:opacity-80
              transition
              "
            >
              Tasks
            </Link>

            <Link
              to="/completed"
              className="
              text-[#5b21b6]
              dark:text-[#d65db1]
              hover:opacity-80
              transition
              "
            >
              Completed
            </Link>

            <button
              onClick={() => setDark(!dark)}
              className="
              p-2.5
              rounded-xl
              bg-[#d65db1]
              hover:bg-[#c44ca0]
              text-white
              transition-all duration-300
              hover:scale-105
              "
            >
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </nav>

          {/* Mobile  */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={() => setDark(!dark)}
              className="
              p-2.5
              rounded-xl
              bg-[#d65db1]
              text-white
              "
            >
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="
              p-2.5
              rounded-xl
              border
              border-[#d65db1]/30
              dark:border-[#d65db1]/20
              text-[#d65db1]
              "
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div
            className="
            md:hidden
            mt-4
            rounded-2xl
            border
            border-[#d65db1]/20
            bg-white
            dark:bg-slate-900
            overflow-hidden
            "
          >
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="
              block
              px-5 py-4
              text-[#5b21b6]
              dark:text-[#d65db1]
              hover:bg-[#d65db1]/5
              transition
              "
            >
              Home
            </Link>

            <Link
              to="/tasks"
              onClick={() => setMenuOpen(false)}
              className="
              block
              px-5 py-4
              text-[#5b21b6]
              dark:text-[#d65db1]
              hover:bg-[#d65db1]/5
              transition
              "
            >
              Tasks
            </Link>

            <Link
              to="/completed"
              onClick={() => setMenuOpen(false)}
              className="
              block
              px-5 py-4
              text-[#5b21b6]
              dark:text-[#d65db1]
              hover:bg-[#d65db1]/5
              transition
              "
            >
              Completed
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
