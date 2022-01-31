import { useMoralis } from "react-moralis";

const ChangeUsername = () => {
  const { setUserData, isUserUpdating, userError, user } = useMoralis();

  const setUsername = () => {
    const username = prompt(
      `Enter your new username. (Your current username: ${user.getUsername()})`
    );
    if (!username) return;

    setUserData({
      username,
    });
  };

  return (
    <div className="text-sm absolute top-5 right-5">
      <button
        disabled={isUserUpdating}
        className="hover:font-semibold transition-all duration-200"
        onClick={setUsername}
      >
        Change Your Username
      </button>
    </div>
  );
};

export default ChangeUsername;
