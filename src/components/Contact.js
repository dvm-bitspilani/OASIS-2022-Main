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
        name: "Priyanshu Shukla",
        dept: "Department of Visual Media",
        email: "mailto:",
        tele: "tele:",
      },
      {
        image: image,
        name: "Priyanshu Shukla",
        dept: "Department of Visual Media",
        email: "mailto:",
        tele: "tele:",
      },
      {
        image: image,
        name: "Priyanshu Shukla",
        dept: "Department of Visual Media",
        email: "mailto:",
        tele: "tele:",
      },
      {
        image: image,
        name: "Priyanshu Shukla",
        dept: "Department of Visual Media",
        email: "mailto:",
        tele: "tele:",
      },
      {
        image: image,
        name: "Priyanshu Shukla",
        dept: "Department of Visual Media",
        email: "mailto:",
        tele: "tele:",
      },
      {
        image: image,
        name: "Priyanshu Shukla",
        dept: "Department of Visual Media",
        email: "mailto:",
        tele: "tele:",
      },
      {
        image: image,
        name: "Priyanshu Shukla",
        dept: "Department of Visual Media",
        email: "mailto:",
        tele: "tele:",
      },
      {
        image: image,
        name: "Priyanshu Shukla",
        dept: "Department of Visual Media",
        email: "mailto:",
        tele: "tele:",
      },
      {
        image: image,
        name: "Priyanshu Shukla",
        dept: "Department of Visual Media",
        email: "mailto:",
        tele: "tele:",
      },
      {
        image: image,
        name: "Priyanshu Shukla",
        dept: "Department of Visual Media",
        email: "mailto:",
        tele: "tele:",
      },
      {
        image: image,
        name: "Priyanshu Shukla",
        dept: "Department of Visual Media",
        email: "mailto:",
        tele: "tele:",
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
    <div className={ContactCSS.contactContainer}>
      <h2 className={ContactCSS.contactHead}>CONTACT US</h2>
      <div className={ContactCSS.contactBody}>
        <div className={ContactCSS.five}>{five}</div>
        <div className={ContactCSS.four}>{four}</div>
      </div>
    </div>
  );
}

export default Contact;
