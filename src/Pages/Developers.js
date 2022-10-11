import React from "react"
import PhoneIcon from "../Assets/ContactUs/PhoneIcon";
import MailIcon from "../Assets/ContactUs/MailIcon";
import MaleAvatar from "../Assets/ContactUs/MaleAvatar";
import FemaleAvatar from "../Assets/ContactUs/FemaleAvatar";
import devCSS from "../styles/Developers.module.css";

const Developers = React.forwardRef((props, ref) => {
  const fifteen = [],
    data = [
      {
        image: require("../Assets/ContactUs/anshal.png"),
        name: "Anshal Shukla",
        dept: "Front-end Developer",
        github: "https://github.com/CoderVaibhavS",
        linkedin: "https://www.linkedin.com/in/vaibhav-singla-8128321b3/"
      },
      {
        image: require("../Assets/ContactUs/anshal.png"),
        name: "Anshal Shukla",
        dept: "Front-end Developer",
        github: "https://github.com/CoderVaibhavS",
        linkedin: "https://www.linkedin.com/in/vaibhav-singla-8128321b3/"
      },
      {
        image: require("../Assets/ContactUs/anshal.png"),
        name: "Anshal Shukla",
        dept: "Front-end Developer",
        github: "https://github.com/CoderVaibhavS",
        linkedin: "https://www.linkedin.com/in/vaibhav-singla-8128321b3/"
      },
      {
        image: require("../Assets/ContactUs/anshal.png"),
        name: "Anshal Shukla",
        dept: "Front-end Developer",
        github: "https://github.com/CoderVaibhavS",
        linkedin: "https://www.linkedin.com/in/vaibhav-singla-8128321b3/"
      },
      {
        image: require("../Assets/ContactUs/anshal.png"),
        name: "Anshal Shukla",
        dept: "Front-end Developer",
        github: "https://github.com/CoderVaibhavS",
        linkedin: "https://www.linkedin.com/in/vaibhav-singla-8128321b3/"
      },
      {
        image: require("../Assets/ContactUs/anshal.png"),
        name: "Anshal Shukla",
        dept: "Front-end Developer",
        github: "https://github.com/CoderVaibhavS",
        linkedin: "https://www.linkedin.com/in/vaibhav-singla-8128321b3/"
      },
      {
        image: require("../Assets/ContactUs/anshal.png"),
        name: "Anshal Shukla",
        dept: "Front-end Developer",
        github: "https://github.com/CoderVaibhavS",
        linkedin: "https://www.linkedin.com/in/vaibhav-singla-8128321b3/"
      },
      {
        image: require("../Assets/ContactUs/anshal.png"),
        name: "Anshal Shukla",
        dept: "Front-end Developer",
        github: "https://github.com/CoderVaibhavS",
        linkedin: "https://www.linkedin.com/in/vaibhav-singla-8128321b3/"
      },
      {
        image: require("../Assets/ContactUs/anshal.png"),
        name: "Anshal Shukla",
        dept: "Front-end Developer",
        github: "https://github.com/CoderVaibhavS",
        linkedin: "https://www.linkedin.com/in/vaibhav-singla-8128321b3/"
      },
      {
        image: require("../Assets/ContactUs/anshal.png"),
        name: "Anshal Shukla",
        dept: "Front-end Developer",
        github: "https://github.com/CoderVaibhavS",
        linkedin: "https://www.linkedin.com/in/vaibhav-singla-8128321b3/"
      },
      {
        image: require("../Assets/ContactUs/anshal.png"),
        name: "Anshal Shukla",
        dept: "Front-end Developer",
        github: "https://github.com/CoderVaibhavS",
        linkedin: "https://www.linkedin.com/in/vaibhav-singla-8128321b3/"
      },
      {
        image: require("../Assets/ContactUs/anshal.png"),
        name: "Anshal Shukla",
        dept: "Front-end Developer",
        github: "https://github.com/CoderVaibhavS",
        linkedin: "https://www.linkedin.com/in/vaibhav-singla-8128321b3/"
      },
      {
        image: require("../Assets/ContactUs/anshal.png"),
        name: "Anshal Shukla",
        dept: "Front-end Developer",
        github: "https://github.com/CoderVaibhavS",
        linkedin: "https://www.linkedin.com/in/vaibhav-singla-8128321b3/"
      },
      {
        image: require("../Assets/ContactUs/anshal.png"),
        name: "Anshal Shukla",
        dept: "Front-end Developer",
        github: "https://github.com/CoderVaibhavS",
        linkedin: "https://www.linkedin.com/in/vaibhav-singla-8128321b3/"
      },
      {
        image: require("../Assets/ContactUs/anshal.png"),
        name: "Anshal Shukla",
        dept: "Front-end Developer",
        github: "https://github.com/CoderVaibhavS",
        linkedin: "https://www.linkedin.com/in/vaibhav-singla-8128321b3/"
      },
    ];

  for (let a = 0; a < 15; a++) {
    fifteen[a] = (
      <div key={a} className={devCSS.devCard}>
        <div className={devCSS.devImageCont}>
          <div className={devCSS.devImage}>
              <img
                src={data[a].image}
                alt={data[a].name}
                className={devCSS.devImage}
              />
          </div>
        </div>
        <div className={devCSS.devName}>{data[a].name}</div>
        <div className={devCSS.devDept}>{data[a].dept}</div>
        <div className={devCSS.devLinks}>
          <PhoneIcon tele={data[a].github} />
          <MailIcon mail={data[a].linkedin} />
        </div>
      </div>
    );
  }

  return (
    <section className={devCSS.devContainer} ref={ref}>
      <h2 className={"secHead"} id="dev-secHead">Developers</h2>
      <div className={devCSS.devBody}>
        <div className={devCSS.fifteen}>{fifteen}</div>
      </div>
    </section>
  );
});

export default Developers;
