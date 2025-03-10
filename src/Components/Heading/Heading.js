import React from "react";
import classes from "./Heading.css";

const Heading = props => {
  return (
    <header className={classes.heading}>
      <img
        className="logo"
        src="https://image.flaticon.com/icons/svg/139/139899.svg"
        alt="logo"
      />
      CYF Hotel
    </header>
  );
};

export default Heading;
