import React from "react";
import PhoneIcon from "../Assets/ContactUs/PhoneIcon";
import MailIcon from "../Assets/ContactUs/MailIcon";
import MaleAvatar from "../Assets/ContactUs/MaleAvatar";
import FemaleAvatar from "../Assets/ContactUs/FemaleAvatar";
import ContactCSS from "../styles/Contact.module.css";

const Contact = React.forwardRef((props, ref) => {
  const four1 = [],
    four2 = [],
    eight = [],
    data = [
      {
        image: require("../Assets/ContactUs/anshal.png"),
        gender: "male",
        name: "Anshal Shukla",
        dept: "Website, App & Online Payments",
        email: "mailto:webmaster@bits-oasis.org",
        tele: "tel:+918058088802",
      },
      {
        image: "",
        gender: "female",
        name: "Karishma K",
        dept: "Sponsorship and Marketing",
        email: "mailto:sponsorship@bits-oasis.org",
        tele: "tel:+919902819428",
      },
      {
        image: require("../Assets/ContactUs/rhythm.png"),
        gender: "male",
        name: "Rhythm Saxena",
        dept: "Online Collaborations and Publicity",
        email: "mailto:collaborations@bits-oasis.org",
        tele: "tel:+917836809755",
      },
      {
        image: "",
        gender: "female",
        name: "Angel Maria Baby",
        dept: "Reception and Accommodation",
        email: "mailto:recnacc@bits-oasis.org",
        tele: "tel:+918921977221",
      },
      {
        image: require("../Assets/ContactUs/madhav.png"),
        gender: "male",
        name: "Madhav Gupta",
        dept: "Registration, Events & Other Enquiries",
        email: "mailto:pcr@bits-oasis.org",
        tele: "tel:+918130127878",
      },
      {
        image: "",
        gender: "male",
        name: "Pranav Dangi",
        dept: "Logistics and Operations",
        email: "mailto:controls@bits-oasis.org",
        tele: "tel:+918080263399",
      },
      {
        image: require("../Assets/ContactUs/ashirwad.png"),
        gender: "male",
        name: "Ashirwad Karande",
        dept: "President, Student Union",
        email: "mailto:finance@bits-oasis.org",
        tele: "tel:+918793009454",
      },
      {
        image: require("../Assets/ContactUs/naman.png"), 
        gender: "male",
        name: "Naman Jalan",
        dept: "General Secretary, Student Union",
        email: "mailto:inventory@bits-oasis.org",
        tele: "tel:+918617395921",
      },
    ];

  for (let a = 0; a < 4; a++) {
    four1[a] = (
      <div key={a} className={ContactCSS.contactCard}>
        <div className={ContactCSS.contactImageCont}>
          {/* <img
            src={data[a].image}
            alt={data[a].name}
            className={ContactCSS.contactImage}
          /> */}
          <div className={ContactCSS.contactImage}>
            {data[a].image == "" ? (data[a].gender == "male" ? <MaleAvatar /> : <FemaleAvatar />) : <img
            src={data[a].image}
            alt={data[a].name}
            className={ContactCSS.contactImage}
          />}
          </div>
        </div>
        <div className={ContactCSS.contactName}>{data[a].name}</div>
        <div className={ContactCSS.contactDept}>{data[a].dept}</div>
        <div className={ContactCSS.contactLinks}>
          <PhoneIcon tele={data[a].tele} />
          <MailIcon email={data[a].email} />
        </div>
      </div>
    );
  }

  for (let a = 0; a < 4; a++) {
    four2[a] = (
      <div key={a} className={ContactCSS.contactCard}>
        <div className={ContactCSS.contactImageCont}>
          {/* <img
            src={data[a + 4].image}
            alt={data[a + 4].name}
            className={ContactCSS.contactImage}
          /> */}
          <div className={ContactCSS.contactImage}>
          {data[a+4].image == "" ? (data[a + 4].gender == "male" ? <MaleAvatar /> : <FemaleAvatar />) : <img
            src={data[a + 4].image}
            alt={data[a + 4].name}
            className={ContactCSS.contactImage}
          />}
          </div>
        </div>
        <div className={ContactCSS.contactName}>{data[a + 4].name}</div>
        <div className={ContactCSS.contactDept}>{data[a + 4].dept}</div>
        <div className={ContactCSS.contactLinks}>
          <PhoneIcon tele={data[a + 4].tele} />
          <MailIcon email={data[a + 4].email} />
        </div>
      </div>
    );
  }

  for (let a = 0; a < 8; a++) {
    eight[a] = (
      <div key={a} className={ContactCSS.contactCard}>
        <div className={ContactCSS.contactImageCont}>
          {/* <img
            src={data[a].image}
            alt={data[a].name}
            className={ContactCSS.contactImage}
          /> */}
          <div className={ContactCSS.contactImage}>
            {data[a].gender == "male" ? <MaleAvatar /> : <FemaleAvatar />}
          </div>
        </div>
        <div className={ContactCSS.contactName}>{data[a].name}</div>
        <div className={ContactCSS.contactDept}>{data[a].dept}</div>
        <div className={ContactCSS.contactLinks}>
          <PhoneIcon tele={data[a].tele} />
          <MailIcon email={data[a].email} />
        </div>
      </div>
    );
  }

  return (
    <section className={ContactCSS.contactContainer} ref={ref}>
      <h2 className="secHead">CONTACT US</h2>
      <div className={ContactCSS.contactBody}>
        <div className={ContactCSS.four1}>{four1}</div>
        <div className={ContactCSS.four2}>{four2}</div>
        <div className={ContactCSS.eight}>{eight}</div>
      </div>
    </section>
  );
});

export default Contact;
