import React from "react";

const Header = () => {
  return (
  
      <div className="navbar bg-base-100 shadow-sm w-11/12 mx-auto">
        <div className="navbar-start">
          <a className=" text-2xl text-shadow-amber-900 font-extrabold">Mobile Hub</a>
        </div>

        <div className="navbar-end">
          <a className="btn btn-primary">Sign up</a>
        </div>
      </div>
 
  );
};

export default Header;
