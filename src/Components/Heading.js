import React from "react";
import About from "../Pages/About";
import ContactUs from "../Pages/ContactUs";

function Heading() {
  const textHeading = "Zack Heading";
  return (
    <div>
      <About title={textHeading} />
      <ContactUs />
    </div>
  );
}

export default Heading;
