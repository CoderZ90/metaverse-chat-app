import Image from "next/image";
import { useMoralis } from "react-moralis";

const Avatar = ({ username, logoutOnPress }) => {
  const { user, logout } = useMoralis();

  return (
    <div>
      <Image
        src={`https://avatars.dicebear.com/api/pixel-art/${
          username || user.getUsername()
        }.svg`}
        onClick={() => logoutOnPress && logout()}
        layout="fill"
        className="rounded-full bg-slate-900 cursor-pointer hover:opacity-75 transition-all duration-200"
      />
    </div>
  );
};

export default Avatar;
