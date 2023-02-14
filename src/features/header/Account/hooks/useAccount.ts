// import { useStorage, useUser } from "common/hooks";
import { useNavigate } from "react-router-dom";

export const useAccount = () => {
  // const { clear } = useStorage();
  // const user = useUser();
  const navigate = useNavigate();

  return {
    onLogout: () => {
      // clear();
      navigate("/login");
    },
    // username: user?.username,
    username: "John Dou",
  };
};
