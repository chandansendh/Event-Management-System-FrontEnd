import { useState } from "react";
import { useAuth } from "../store/auth";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const EditForm = () => {
    const {id}=useParams();
    const navigate = useNavigate();
  const { events } = useAuth();
  const eEvent = events.find((val)=>{
    return id === val._id
  });
//   console.log(eEvent);
  const [eData, setEData] = useState({
    id,
    title: eEvent.title,
    description: eEvent.description,
    date: eEvent.date,
    time: eEvent.time,
    location: eEvent.location,
    price: eEvent.price,
  });

  const handelInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setEData({ ...eData, [name]: value });
  };

  const handelSubmit = async (e) => {
    e.preventDefault();
    console.log(eData);
    try {
      const responce = await fetch(
        "http://localhost:5001/api/event/eventcreate",
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(eData),
        }
      );
      const sData =await responce.json();
      if (responce.ok) {
        setEData({
          id,
          title: "",
          description: "",
          date: "",
          time: "",
          location: "",
          price: "",
        });
        toast.success(sData.message);
        navigate("/yourevents");
      }else{
      toast.error(sData.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="eventForm">
        <div className="containerE">
          <div className="title">Edit Event</div>
          <hr />
          <div className="content">
            <form onSubmit={handelSubmit}>
              <div className="user-details">
                <div className="input-box">
                  <span className="details">Event Title</span>
                  <input
                    type="text"
                    placeholder="Enter your username"
                    name="title"
                    onChange={handelInput}
                    value={eData.title}
                    required
                  />
                </div>
                <div className="input-box">
                  <span className="details">Location</span>
                  <input
                    type="text"
                    placeholder="Enter your email"
                    name="location"
                    onChange={handelInput}
                    value={eData.location}
                    required
                  />
                </div>
                <div className="input-box">
                  <span className="details">Price</span>
                  <input
                    type="number"
                    placeholder="Enter your password"
                    name="price"
                    onChange={handelInput}
                    value={eData.price}
                    required
                  />
                </div>
                <div className="input-box">
                  <span className="details">Date</span>
                  <input
                    type="date"
                    placeholder="Confirm your password"
                    name="date"
                    onChange={handelInput}
                    value={eData.date}
                    required
                  />
                </div>
                <div className="input-box">
                  <span className="details">Time</span>
                  <input
                    type="time"
                    name="time"
                    onChange={handelInput}
                    value={eData.time}
                    required
                  />
                </div>
                <div className="input-box">
                  <span className="details"></span>
                </div>
                <div className="input-box">
                  <span className="details">Description</span>
                  <textarea
                    name="description"
                    onChange={handelInput}
                    value={eData.description}
                  ></textarea>
                </div>
              </div>
              <div className="button-container">
                <div className="button">
                  <input type="submit" value="Register" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
