import { useState, MouseEvent } from "react";

const settings = ["Profile", "Account", "Dashboard", "Logout"];

export const useUserMenu = () => {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return {
    settings,
    anchorElUser,
    handleOpenUserMenu,
    handleCloseUserMenu,
  };
};
