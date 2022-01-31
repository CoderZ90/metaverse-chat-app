import { useMoralis } from "react-moralis";

function Login() {
  const { authenticate } = useMoralis();

  return (
    <div className="gradientBG relative text-white w-full h-screen">
      <div className="flex flex-col absolute w-full h-screen items-center justify-center">
        <button
          onClick={authenticate}
          className="bg-indigo-500 p-5 rounded-lg font-medium text-xl shadow-md border-none outline-none animate-pulse"
        >
          Login To The Metaverse
        </button>
      </div>
    </div>
  );
}

export default Login;
