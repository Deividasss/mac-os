import { useState } from "react"
import "../Login/LoginForm.scss"
import { ArrowRight } from 'akar-icons';

const LoginForm = ({ Login, error, user }) => {

    const [details, setDetails] = useState({ email: "", password: "" })

    const submitHandler = (e) => {
        e.preventDefault()
        Login(details)
    }
    return (
        <div className="mainContainer">
            <form className="formContainer " onSubmit={submitHandler}>
                <div className="container">
                    <img className="userImg" src="https://assets.stickpng.com/images/585e4bf3cb11b227491c339a.png" />
                    <h3 className="userTitle">{user}</h3>
                    <div>
                        <input className="passwordInput" type="password" name="password" id="password" placeholder="Password" onChange={e => setDetails({ ...details, password: e.target.value })} value={details.password} />
                        <button className="loginBtn" type="submit" value="Login">{<ArrowRight size={15} />}</button>
                    </div>
                    {(error != "") ? (<div className="error">{error}</div>) : ""}
                </div>
            </form>
            <div className="bottomBtnsContainer">
                <div className="bottomBtns">
                    <h2>Shut Down</h2>
                </div>
                <div className="bottomBtns">
                    <h2>Restart</h2>
                </div>
                <div className="bottomBtns">
                    <h2>Sleep</h2>
                </div>
            </div>
        </div>
    )
}
export default LoginForm