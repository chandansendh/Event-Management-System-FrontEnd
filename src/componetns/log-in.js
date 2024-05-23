import { NavLink } from "react-router-dom";
// import "../style/loginsignin.css";
import { useState } from "react";
import { useAuth } from "../store/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function LogIn(){
  const [logInData,setLogInData]=useState({
    email:"",
    password:""
  });
  const navigate = useNavigate();

  const {storeTokenInLS} = useAuth();

  const handelInput=(e)=>{
    const name = e.target.name;
    const value = e.target.value;
    setLogInData({
      ...logInData,[name]:value
    });
  };


  const handelSubmit=async(e)=>{
    e.preventDefault();
    console.log(logInData.password);
    try {
      const responce = await fetch("http://localhost:5001/api/auth/login",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify(logInData)
      });
      const sData = await responce.json();
      if(responce.ok){
        toast.success("Login Successful")
        setLogInData({
          email: "",
          password: "",
        });
        navigate("/");
        storeTokenInLS(sData.token);
      }else{
        toast.error(sData.message);
      }
      console.log(responce);
    } catch (error) {
      console.log(error)
    }
  };

    return (
      <>
        <div className="contact">
        <section className="container forms">
          <div className="form login">
            <div className="form-content">
              <header>Login</header>
              <form action="/" onSubmit={handelSubmit}>
                <div className="field input-field">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="input"
                    value={logInData.email}
                    onChange={handelInput}
                  />
                </div>

                <div className="field input-field">
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="password"
                    value={logInData.password}
                    onChange={handelInput}
                  />
                  <i className="bx bx-hide eye-icon"></i>
                </div>

                {/* <div className="form-link">
                  <a href="/" className="forgot-pass">
                    Forgot password?
                  </a>
                </div> */}

                <div className="field button-field">
                  <button type="submit">Login</button>
                </div>
              </form>

              <div className="form-link">
                <span>
                  Don't have an account?
                  <NavLink to="/signin" className="link signup-link">
                    Signup
                  </NavLink>
                </span>
              </div>
            </div>

            {/* <div className="line"></div> */}

            {/* <div className="media-options">
              <a href="/" className="field facebook">
                <i className="bx bxl-facebook facebook-icon"></i>
                <span>Login with Facebook</span>
              </a>
            </div>

            <div className="media-options">
              <a href="/" className="field google">
                <img src="/" alt="" className="google-img" />
                <span>Login with Google</span>
              </a>
            </div> */}
          </div>
        </section>
          </div>
      </>
    );
}