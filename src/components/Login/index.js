import "./index.css"
import { FcGoogle } from "react-icons/fc";
import { AiOutlineApple } from "react-icons/ai";


const Login = () => {

    return(
        <div className="login-bg-container">
            <div className="login-left-container">
                <h1 className="left-title">Board.</h1>
            </div>
            <div className="login-right-container">
                <h1 className="signin-title">Sign In</h1>
                <p className="signin-description">Sign in to your account</p>
                <div className="btns-container">
                    <button className="sample-btn"><FcGoogle />Sign in with Google</button>
                    <button className="sample-btn"><AiOutlineApple />Sign in with Apple</button>
                </div>
                <div className="login-form">
                    <label className="form-label" htmlFor="id">Email Address</label>
                    <br/>
                    <input type="text" className="input-element" placeholder="Enter your email address" id="email"/>
                    <br/>
                    <label className="form-label" htmlFor="id">Password</label>
                    <br/>
                    <input type="password" className="input-element" placeholder="Enter your password" id="email"/>
                    <br/>
                    <p className="forgot">Forgot password?</p>
                    <button className="login-btn">Sign In</button>
                </div>
                <p className="register-link">Don’t have an account? <span className="forgot">Register here</span></p>
            </div>

        </div>
    )
}

export default Login