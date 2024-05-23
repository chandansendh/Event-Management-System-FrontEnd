import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./componetns/NavBar";
import Footer from "./componetns/Footer";
import Home from "./componetns/Home";
import Events from "./componetns/Events";
import YourEvents from "./componetns/YourEvents";
import About from "./componetns/About";
import Contact from "./componetns/contact";
import LogIn from "./componetns/log-in";
import SignUp from "./componetns/sign-up";
import {EditForm} from "./componetns/EditForm";
import { Logout } from "./componetns/LogOut";
import { EventForm } from "./componetns/EventForm";
import { Error } from "./componetns/Error";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/yourevents" element={<YourEvents />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/createevent" element={<EventForm />} />
          <Route path="/edit/:id" element={<EditForm />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
};

export default App;
