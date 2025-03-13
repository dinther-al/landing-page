import { cn } from "@/modules/utils";
import { NavLink, useNavigate } from "react-router-dom";

export function Header() {
  const navigate = useNavigate();

  return (
    <div className={cn("mt-4 px-4 text-sm font-medium", "flex justify-between items-center")}>
      <button onClick={() => navigate("/about")} className={cn("text-3xl font-black font-display text-blue-600")}>
        LandingPage
      </button>

      <div className={cn("flex-1 flex justify-center")}>
        <nav className={cn("flex gap-6 text-sm font-semibold")}>
          {["Home", "Product", "Blog"].map((item, index) => (
            <NavLink
              key={index}
              className={cn("text-gray-800 hover:text-blue-600 transition")}
              to={item === "Home" ? "/" : `/${item}`}
            >
              {item}
            </NavLink>
          ))}
        </nav>
      </div>

      <div className={cn("flex items-center gap-2 text-gray-800 font-semibold")}>
        <div className={cn("relative w-52")}>
          <input
            type="text"
            id="search"
            placeholder=" "
            className={cn(
              "peer w-full h-10 px-4 border border-gray-300 rounded-lg bg-white outline-none",
              "focus:border-blue-500 text-gray-900 shadow-sm transition"
            )}
          />
          <label
            htmlFor="search"
            className={cn(
              "absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-sm bg-white px-1 pointer-events-none transition-all",
              "peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400",
              "peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-500"
            )}
          >
            Search
          </label>
        </div>

        <div className={cn("h-5 border-l border-gray-300")}></div>

        <button className={cn("hover:text-blue-600 transition")}>Đăng nhập</button>
      </div>
    </div>
  );
}
