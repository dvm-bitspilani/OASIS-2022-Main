import React from "react";
import PhoneIcon from "../Assets/ContactUs/PhoneIcon";
import MailIcon from "../Assets/ContactUs/MailIcon";
import ContactCSS from "../styles/Contact.module.css";

import anshal from "../Assets/ContactUs/anshal.jpeg";
import madhav from "../Assets/ContactUs/madhav.jpg";
import ashirwad from "../Assets/ContactUs/ashirwad.jpg";

function Contact() {
  const four1 = [],
    four2 = [],
    data = [
      {
        image: anshal,
        name: "Anshal Shukla",
        dept: "Website, App & Online Payments",
        email: "mailto:webmaster@bits-oasis.org",
        tele: "tel:+918058088802",
      },
      {
        image: "",
        name: "Karishma K",
        dept: "Sponsorship and Marketing",
        email: "mailto:sponsorship@bits-oasis.org",
        tele: "tel:+919902819428",
      },
      {
        image: "",
        name: "Rhythm Saxena",
        dept: "Online Collaborations and Publicity",
        email: "mailto:collaborations@bits-oasis.org",
        tele: "tel:+917836809755",
      },
      {
        image: "",
        name: "Angel Maria Baby",
        dept: "Reception and Accommodation",
        email: "mailto:recnacc@bits-oasis.org",
        tele: "tel:+918921977221",
      },
      {
        image: madhav,
        name: "Madhav Gupta",
        dept: "Registration, Events & Other Enquiries",
        email: "mailto:pcr@bits-oasis.org",
        tele: "tel:+918130127878",
      },
      {
        image: "",
        name: "Pranav Dangi",
        dept: "Logistics and Operations",
        email: "mailto:controls@bits-oasis.org",
        tele: "tel:+918080263399",
      },
      {
        image: ashirwad,
        name: "Ashirwad Karande",
        dept: "President, Student Union",
        email: "mailto:finance@bits-oasis.org",
        tele: "tel:+918793009454",
      },
      {
        image: "",
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
          <img src={data[a].image} className={ContactCSS.contactImage} />
        </div>
        <div className={ContactCSS.contactName}>{data[a].name}</div>
        <div className={ContactCSS.contactDept}>{data[a].dept}</div>
        <div className={ContactCSS.contactLinks}>
          <PhoneIcon />
          <MailIcon />
        </div>
      </div>
    );
  }

  for (let a = 0; a < 4; a++) {
    four2[a] = (
      <div key={a} className={ContactCSS.contactCard}>
        <div className={ContactCSS.contactImageCont}>
          <img src={data[a + 4].image} className={ContactCSS.contactImage} />
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

  return (
    <section className={ContactCSS.contactContainer}>
      <h2 className="secHead">CONTACT US</h2>
      <div className={ContactCSS.contactBody}>
        <div className={ContactCSS.four1}>{four1}</div>
        <div className={ContactCSS.four2}>{four2}</div>
      </div>
    </section>
  );
}

export default Contact;
