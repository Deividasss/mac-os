import LoginForm from "./LoginForm"
import { useState } from "react"
import HomeScreen from "../HomeScreen/HomeScreen"
import MenuBar from "../MenuBar/MenuBar"
import LoginMenuBar from "./LoginMenuBar"

const Login = () => {
    const adminUser = {
        email: "Deividas Kašėta",
        password: '1234'
    }
    const [user, setUser] = useState({ password: "" })
    const [error, setError] = useState("")

    const Login = details => {
        if (details.password == adminUser.password) {
            setUser({
                password: details.password
            })
        } else {
            setError("If you forgot your password, you can...")
        }
    }

    const Logout = () => {
        setUser({ password: "" })
        setError("")
    }
    return (

        <div>
            {(user.password != "") ? (
                <>
                    <MenuBar logout={Logout} />
                    <HomeScreen logout={Logout} user={adminUser.email} />
                </>
            ) : (
                <>
                    <LoginMenuBar />
                    <LoginForm user={adminUser.email} Login={Login} error={error} />
                </>
            )}
        </div>
    )
}
export default Login