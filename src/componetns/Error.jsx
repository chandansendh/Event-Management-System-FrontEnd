import { NavLink } from "react-router-dom"
export const Error=()=>{
    return (
      <>
        <div className="error">
          <h1 className="error-text">404</h1>
          <NavLink to="/" className="error-btn">
            Home
          </NavLink>
        </div>
      </>
    );
}