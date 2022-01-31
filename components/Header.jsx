import { useMoralis } from "react-moralis";
import Image from "next/image";

import Avatar from "./Avatar";
import logo from "../public/logo.png";
import ChangeUsername from "./ChangeUsername";

const Header = () => {
  const { user } = useMoralis();

  return (
    <div className="glassmorphism rounded-lg border border-[rgba(255,255,255,0.05)] sticky top-0 p-5 z-50 text-white shadow-md">
      <div className="grid grid-cols-5 lg:grid-cols-6 items-end lg:items-center">
        <div className="relative h-24 w-24 mx-auto hidden lg:inline-grid">
          <Image
            src={logo}
            layout="fill"
            className="rounded-full object shadow-lg"
            objectFit="cover"
            alt="avatarImage"
          />
        </div>

        <div className="col-span-4 text-left lg:text-center">
          <div className="relative h-48 w-48 lg:mx-auto border-indigo-500 border-8 rounded-full shadow-lg mt-2">
            <Avatar logoutOnPress />
          </div>
          <h1 className="text-3xl font-medium mt-2">
            Welcome To The Metaverse
          </h1>
          <h2 className="text-5xl font-bold truncate text-indigo-300">
            {user.getUsername()}
          </h2>
          <ChangeUsername />
        </div>
      </div>
    </div>
  );
};

export default Header;
