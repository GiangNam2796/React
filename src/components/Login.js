import { useState } from "react";
import LoginButton from "./layout/LoginButton";
import LogoutButton from "./LogoutButton";

function Login() {
  const [isToogle, setIsToogle] = useState(false);

  function handleLoginClick() {
    setIsToogle(true);
  }

  const handleLogoutClick = () => {
    setIsToogle(false);
  };

  const renderButton = () => {
    let button;
    if (isToogle) {
      button = <LogoutButton onClick={handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={handleLoginClick} />;
    }
    return button;
  };

  return <div>{renderButton()}</div>;
}

export default Login;
