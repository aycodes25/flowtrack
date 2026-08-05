import { Bell } from "lucide-react";
import profile from "/tomi.jpg";

function Header({ name, role }) {
  return (
    <header className="bg-orange-500 text-white shadow-lg">
      <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">

        {/* ==========================
            Logo & Application Name
        ========================== */}
        <div>
          <h1 className="text-3xl font-bold tracking-wide">
            FlowTrack
          </h1>

          <p className="text-orange-100 mt-1">
            Employee Task Management System
          </p>
        </div>

        {/* ==========================
            Right Section
        ========================== */}
        <div className="flex items-center gap-6">

          {/* Notification Icon */}
          <button className="relative hover:scale-110 transition-transform duration-300">
            <Bell size={24} />

            {/* Notification Dot */}
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-orange-500"></span>
          </button>

          {/* User Profile */}
          <div className="flex items-center gap-3">

            <img
              src={profile}
              alt={name}
              className="
                w-16
                h-16
                rounded-full
                object-cover
                border-2
                border-white
                shadow-md
              "
            />

            <div>
              <h2 className="font-bold text-lg">
                {name}
              </h2>

              <p className="text-orange-100 text-sm">
                {role}
              </p>
            </div>

          </div>

        </div>

      </div>
    </header>
  );
}

export default Header;