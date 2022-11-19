import "../Login/LoginMenuBar.scss"
import { AiOutlineWifi } from "react-icons/ai"
import { CiBatteryFull } from "react-icons/ci"

const LoginMenuBar = () => {
    return (
        <div className="loginMenuBarContainer">
            <h2 className="state">LT</h2>
            <h2 className="batteryLogo">{<CiBatteryFull />}</h2>
            <h2 className="wifiLogo">{<AiOutlineWifi />}</h2>
            <h2 className="date">Fri 19:41 AM</h2>
        </div>
    )
}
export default LoginMenuBar