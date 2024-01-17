
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faObjectGroup, faSquare } from "@fortawesome/free-regular-svg-icons";



const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-header">
        <h1><FontAwesomeIcon icon={faObjectGroup} />Brail.booking</h1>
      </div>
      <div className="nav-link">
        <ul>
          <li>
            <a href="#/"> Register </a>
          </li>
          <li>
            <a href="#//"> Login </a>
          </li>
          <li>
            <a href="#/"> Rooms </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
