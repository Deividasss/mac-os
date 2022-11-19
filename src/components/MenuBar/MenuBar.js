import { AiOutlineWifi } from "react-icons/ai"
import { CiBatteryFull } from "react-icons/ci"
import { AiFillApple } from "react-icons/ai"
import { NavDropdown } from "react-bootstrap"
import "../MenuBar/MenuBar.scss"

const MenuBar = ({ logout }) => {
    return (
        <div className="MenuBarContainer">
            <div className="MenuBarInfo">
                <h2 className="MenuBarState">LT</h2>
                <h2 className="MenuBarBatteryLogo">{<CiBatteryFull />}</h2>
                <h2 className="MenuBarWifiLogo">{<AiOutlineWifi />}</h2>
                <h2 className="MenuBarDate">Fri 19:41 AM</h2>
            </div>
            <NavDropdown
                className="dropDownBtn"
                title={<AiFillApple />}
            >
                <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                    Separated link
                </NavDropdown.Item>
            </NavDropdown>
        </div>
    )
}
export default MenuBar