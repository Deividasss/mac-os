import LoginForm from "./LoginForm"
import { useState } from "react"
import HomeScreen from "../HomeScreen/HomeScreen"

const Login = () => {
    const adminUser = {
        email: "Deividas Kašėta",
        password: '1234'
    }
    const [user, setUser] = useState({ password: ""})
    const [error, setError] = useState("")

    const Login = details => {
        if (details.password == adminUser.password) {
            setUser({
                password: details.password
            })
        } else {
            setError("Login failed! Invalid Email or Password")
        }
    }

    const Logout = () => {
        setUser({ password: "" })
        setError("")
    }
    return (

        <div>
            {(user.password != "") ? (
                <HomeScreen logout={Logout} user={adminUser.email} />
            ) : (
                <LoginForm user={adminUser.email} Login={Login} error={error} />
            )}
        </div>
    )
}
export default Login