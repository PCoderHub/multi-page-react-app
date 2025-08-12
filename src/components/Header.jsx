import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="flex flex-col items-center gap-2 bg-violet-300 p-2 text-pink-600 sticky top-0">
      <h1 className="text-5xl font-bold">User List</h1>
      <nav>
        <ul className="flex gap-10 justify-center">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "p-1 rounded-sm text-pink-200 bg-violet-700"
                  : "p-1 rounded-sm hover:bg-violet-500 hover:text-pink-200"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "p-1 rounded-sm text-pink-200 bg-violet-700"
                  : "p-1 rounded-sm hover:bg-violet-500 hover:text-pink-200"
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/users"
              className={({ isActive }) =>
                isActive
                  ? "p-1 rounded-sm text-pink-200 bg-violet-700"
                  : "p-1 rounded-sm hover:bg-violet-500 hover:text-pink-200"
              }
            >
              Users
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
