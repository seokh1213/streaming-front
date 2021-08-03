import { ReactComponent as LogoIcon } from "../images/logo.svg";
import { Link } from "react-router-dom";

const logoStyle = {
  marginLeft: 20
}

function Logo({}){
  return (
    <Link style={logoStyle} to="/">
      <LogoIcon width="16" height="16" fill="#606060"  />
    </Link>
  );
}

export default Logo;
