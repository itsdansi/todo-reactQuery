import {Link} from "react-router-dom";
import UserIcon from "./userIcon";

export default function NavBar() {
  return (
    <nav className="flex flex-wrap items-center justify-between p-5 bg-purple-900">
      <span className="text-2xl text-gray-50 flex items-center mx-3">Task Hub</span>
      <div className="toggle hidden md:flex w-full md:w-auto text-right text-bold mt-5 md:mt-0 border-t-2 border-blue-900 md:border-none">
        <Link
          to="/"
          className="block md:inline-block text-white hover:text-purple-300 px-3 py-3 border-b-2 border-white-900 md:border-none"
        >
          Home
        </Link>
        <Link
          to="/todo"
          className="block md:inline-block text-white hover:text-purple-300  px-3 py-3 border-b-2 border-white-900 md:border-none"
        >
          Todo
        </Link>
        <Link
          to="/login"
          className="block md:inline-block text-white hover:text-purple-300  px-3 py-3 border-b-2 border-white-900 md:border-none"
        >
          Login
        </Link>
        <Link
          to="/signup"
          className="block md:inline-block text-white hover:text-purple-300  px-3 py-3 border-b-2 border-blue-900 md:border-none"
        >
          SignUp
        </Link>
        <Link
          to="/reset-password"
          className="block md:inline-block text-white hover:text-purple-300  px-3 py-3 border-b-2 border-blue-900 md:border-none"
        >
          Reset Password
        </Link>
      </div>
      {/* <div className="relative">
        <img
          src="https://randomuser.me/api/portraits/med/men/75.jpg"
          alt=""
          className="h-12 px-2 pt-2 rounded-3xl"
        />
        <div className="hidden absolute right-0 mt-2 py-2 w-48 bg-white rounded">
          <Link
            to="/profile"
            className="block px-4 py-2 text-gray-800 hover:bg-purple-900 hover:text-white"
          >
            Profile
          </Link>
          <Link
            to="/settings"
            className="block px-4 py-2 text-gray-800 hover:bg-purple-900 hover:text-white"
          >
            Settings
          </Link>
          <Link
            to="/logout"
            className="block px-4 py-2 text-gray-800 hover:bg-purple-900 hover:text-white"
          >
            Logout
          </Link>
        </div>
      </div> */}
      <UserIcon />
    </nav>
  );
}
