import { useState } from "react";
// import "../style/contact.css";
import {useAuth} from "../store/auth"
// import img from "/images/bg-registration-form-7.jpg";
export default function Contact(){
	const [contactData, setContactData]=useState({
		username:"",
		email:"",
		message:""
	});
	const [userData,setUserData]=useState(true);

	const {user}= useAuth();

	if(userData && user){
		setContactData({
      username: user.username,
      email: user.email,
      message: "",
    });
	setUserData(false);
	}
	const handelInput=(e)=>{
		const name = e.target.name;
		const value = e.target.value;
		setContactData({
			...contactData,[name]:value
		})
	};

	const handelSubmit=async(e)=>{
		e.preventDefault();
		console.log(contactData);
		try {
			const responce = await fetch("http://localhost:5001/api/form/contact",{
				method:"POST",
				headers:{"Content-Type":"application/json"},
				body:JSON.stringify(contactData),
			});

			if(responce.ok){
				setContactData({username:"",email:"",message:""})
			}
		} catch (error) {
			console.log(error);
		}
	}

    return (
      <>
        <div className="contact">
        <div className="wrapper">
          <div className="inner">
            <form onSubmit={handelSubmit}>
              <h3>Contact Us</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore.
              </p>
              <label className="form-group">
                <input
                  type="username"
                  name="username"
                  className="form-control"
                  onChange={handelInput}
                  value={contactData.username}
                  required
                />
                <span>Your Name</span>
                <span className="border"></span>
              </label>
              <label className="form-group">
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  onChange={handelInput}
                  value={contactData.email}
                  required
                />
                <span>Your Mail</span>
                <span className="border"></span>
              </label>
              <label className="form-group">
                <textarea
                  name="message"
                  id=""
                  className="form-control"
                  onChange={handelInput}
                  value={contactData.message}
                  required
                ></textarea>
                <span>Your Message</span>
                <span className="border"></span>
              </label>
              <button type="submit" className="c-btn">
                Submit
                <i className="zmdi zmdi-arrow-right"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
      </>
    );
}