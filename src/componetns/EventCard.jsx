import React, { useEffect, useState } from "react";
import { MdCurrencyRupee } from "react-icons/md";
import { RiEditCircleFill } from "react-icons/ri";
import { MdDelete } from "react-icons/md";
import { useAuth } from "../store/auth";
import { NavLink } from "react-router-dom";
import {toast} from "react-toastify"

const EventCard =(props)=>{
  const [allEvents, setAllEvents]=useState([]);
  const { events, user, getEvents } = useAuth();
  useEffect(() => {
    getEvents();
  },[]);
  useEffect(() => {
    if (events) {
      if (props.event) {
        setAllEvents(events);
      } else {
        setAllEvents(events.filter((val) => val.email === user.email));
      }
    }
  }, [events, user, props.event]);
  if (!events) {
    return <div>Loading...</div>; // Or any other loading indicator
  }

  const handelDelete= async(dId)=>{
    const data ={id: dId};
    try {
      const responce = await fetch(
        "http://localhost:5001/api/event/eventcreate",
        {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );
      const sData = await responce.json();
      if(responce.ok){
        toast.success(sData.message);
      }else{
        toast.error(sData.message);
      }
    } catch (error) {
      
    }
  }

    return (
      <>
        <div className="main-service">
          <div className="service-contaner">
            <div className="service-head">
              {props.event?<h1>All Events</h1>:<h1>Your Events</h1>}
            </div>
            <div className="service-cards">
            {allEvents.map((val,ind)=>{
                return (
                  <div key={ind}>
                    <div className="card-contaner">
                      <div className="card">
                        <div className="front">
                          <div className="event">
                            <label className="e-lable">Event Title</label>
                            <h2>{val.title}</h2>
                          </div>
                          <div className="event">
                            <label className="e-lable">Event Location</label>
                            <h2>{val.location}</h2>
                          </div>
                          <div className="event">
                            <label className="e-lable">Price</label>
                            <h2 className="price">
                              {val.price}
                              <MdCurrencyRupee />
                            </h2>
                          </div>
                        </div>
                        <div className="back">
                          <div className="event">
                            <label className="e-lable">Event Date</label>
                            <h2>{val.date}</h2>
                          </div>
                          <div className="event">
                            <label className="e-lable">Event Time</label>
                            <h2>{val.time}</h2>
                          </div>
                          <div className="event">
                            <label className="e-lable">Event escription</label>
                            <h2 className="description">{val.description}</h2>
                          </div>
                          <div className="edit-cls">
                            <button className="service-btn">
                              {val.price}
                              <MdCurrencyRupee className="rupe" />
                            </button>
                            {!props.event ? (
                              <>
                                <NavLink
                                  to={`/edit/${val._id}`}
                                  className="editText"
                                >
                                  <button className="service-btn edt">
                                    <RiEditCircleFill />
                                  </button>
                                </NavLink>
                                <button
                                  className="service-btn edt dlt"
                                  onClick={() => handelDelete(val._id)}
                                >
                                  <MdDelete />
                                </button>
                              </>
                            ) : (
                              <></>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
            })
            }
            </div>
          </div>
        </div>
      </>
    );
};

export default EventCard;