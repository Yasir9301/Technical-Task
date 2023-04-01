import React from "react";
import SidebarLinks from "../../modules/Sidebar/Sidebar";

export default function Sidebar() {
  const [active, setActive] = React.useState<number>(0);
  return (
    <section className="flex flex-col justify-between h-screen side_bar_shadow border-r z-50 w-[200px]">
      <header className="h-16 p-4">
        <h1 className="font-bold text-[1.4em]">
          <i>LODGN</i>
        </h1>
      </header>
      <main className=" h-[calc(100vh_-_180px)]">
        <ul className="flex flex-col px-3">
          {SidebarLinks.map((each_link, key) => {
            return (
              <li
                className={`cursor-pointer transition-all border-b py-4 select-none ${
                  key == active ? "text-[#46a673]" : ""
                }`}
                onClick={() => setActive(key)}
                key={key}
              >
                {each_link}
              </li>
            );
          })}
        </ul>
      </main>
      <footer className=" h-36 gap-2 flex flex-col items-center">
        <button className="bg-[#46a673] w-[80%] py-2 rounded-lg text-white font-semibold">
          Log-Out
        </button>
        <div className="flex flex-col items-center text-gray-700">
          <span className="text-xs">Help-Desk</span>
          <span className="text-xs">786-874 9988</span>
        </div>
      </footer>
    </section>
  );
}
