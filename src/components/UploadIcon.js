import { Link } from "react-router-dom";
import { ReactComponent as UploadSVG } from "../images/upload.svg";

const iconStyle = {
  marginRight: 20
}

function UploadIcon({}){
  return (
    <Link style={iconStyle} to="/upload">
      <UploadSVG width="24" height="24" fill="#606060"  />
    </Link>
  );
}

export default UploadIcon;
