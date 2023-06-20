import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../slices/themeReducer";

const Sidebar = () => {
  const [sidebarView, setSidebarView] = useState("minimal"); // closed / minimal / extended
  const theme = useSelector((state) => state.theme.value);
  const dispatch = useDispatch();

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  return (
    <div className="fixed">
      <aside
        className={`flex flex-col items-center justify-between py-10 gap-20 w-20 h-screen ${
          theme === "light" ? "bg-light-primary" : "bg-red-700"
        }  outline`}
      >
        <div>User</div>
        <div className="flex flex-col">
          <button>Home</button>
          <button>Bookmarks</button>
          <button>Liked</button>
        </div>
        <div>Notifications</div>
      </aside>
    </div>
  );
};

export default Sidebar;
