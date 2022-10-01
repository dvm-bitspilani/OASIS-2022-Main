import React from "react";
import PhoneIcon from "../Assets/ContactUs/PhoneIcon";
import MailIcon from "../Assets/ContactUs/MailIcon";
import image from "../Assets/ContactUs/Priyanshu.svg";
import ContactCSS from "../styles/Contact.module.css";

function Contact() {
  const five = [],
    four = [],
    data = [
      {
        image: image,
        name: "Anshal Shukla",
        dept: "Website, App & Online Payments",
        email: "mailto:webmaster@bits-oasis.org",
        tele: "tel:+918058088802",
      },
      {
        image: image,
        name: "Karishma K",
        dept: "Sponsorship and Marketing",
        email: "mailto:sponsorship@bits-oasis.org",
        tele: "tel:+919902819428",
      },
      {
        image: image,
        name: "Rhythm Saxena",
        dept: "Online Collaborations and Publicity",
        email: "mailto:collaborations@bits-oasis.org",
        tele: "tel:+917836809755",
      },
      {
        image: image,
        name: "Angel Maria Baby",
        dept: "Reception and Accommodation",
        email: "mailto:recnacc@bits-oasis.org",
        tele: "tel:+918921977221",
      },
      {
        image: image,
        name: "Madhav Gupta",
        dept: "Registration, Events & Other Enquiries",
        email: "mailto:pcr@bits-oasis.org",
        tele: "tel:+918130127878",
      },
      {
        image: image,
        name: "Pranav Dangi",
        dept: "Logistics and Operations",
        email: "mailto:controls@bits-oasis.org",
        tele: "tel:+918080263399",
      },
      {
        image: image,
        name: "Ashirwad Karande",
        dept: "President, Student Union",
        email: "mailto:finance@bits-oasis.org",
        tele: "tel:+918793009454",
      },
      {
        image: image,
        name: "Naman Jalan",
        dept: "General Secretary, Student Union",
        email: "mailto:inventory@bits-oasis.org",
        tele: "tel:+918617395921",
      },
      {
        image: image,
        name: "Priyanshu Shukla",
        dept: "Department of Visual Media",
        email: "mailto:",
        tele: "tel:",
      },
    ];

  for (let a = 0; a < 5; a++) {
    five[a] = (
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
    four[a] = (
      <div key={a} className={ContactCSS.contactCard}>
        <div className={ContactCSS.contactImageCont}>
          <img src={data[a + 5].image} className={ContactCSS.contactImage} />
        </div>
        <div className={ContactCSS.contactName}>{data[a + 5].name}</div>
        <div className={ContactCSS.contactDept}>{data[a + 5].dept}</div>
        <div className={ContactCSS.contactLinks}>
          <PhoneIcon tele={data[a + 5].tele} />
          <MailIcon email={data[a + 5].email} />
        </div>
      </div>
    );
  }

  return (
    <section className={ContactCSS.contactContainer}>
      <h2 className="secHead">CONTACT US</h2>
      <div className={ContactCSS.contactBody}>
        <div className={ContactCSS.five}>{five}</div>
        <div className={ContactCSS.four}>{four}</div>
      </div>
    </section>
  );
}

export default Contact;
