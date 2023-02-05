import {Link} from "react-router-dom";
import UserIcon from "./UserIcon";

export default function NavBar() {
  return (
    <nav className="sticky top-0 w-full flex flex-wrap items-center justify-between p-5 bg-purple-900">
      <Link to="/">
        <span className="text-2xl text-gray-50 flex items-center mx-3">TaskHub</span>
      </Link>
      <UserIcon />
    </nav>
  );
}
