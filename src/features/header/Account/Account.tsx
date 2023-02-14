import { IconButton } from "@mui/material";
import { MdAccountCircle } from "react-icons/md";
import { useAccount } from "./hooks";
import { Profile } from "./components";

const isLogged = true;

export const Account = () => {
  const { onLogout, username } = useAccount();

  // ToDo need to clarify profile Menu items, after that move onLogout to Menu
  return (
    <>
      {isLogged ? (
        <Profile username={username} />
      ) : (
        <IconButton
          size="large"
          color="inherit"
          // onClick={() => console.log("onLogout")}
          onClick={() => onLogout()}>
          <MdAccountCircle />
        </IconButton>
      )}
    </>
  );
};
