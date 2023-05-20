import {Link} from "react-router-dom";
import "./topbar.css";

export default function Topbar() {
  const user = true;
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link to="/">HOME</Link>
          </li>
          <li className="topListItem"> <Link to="/">HOME</Link></li>
          <li className="topListItem">CONTACT</li>
          <li className="topListItem">
      
          </li>
          {user && <li className="topListItem">LOGOUT</li>}
        </ul>
      </div>
    
    </div>
  );
}
