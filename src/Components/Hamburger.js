import { useRef } from "react";
import gsap, { Power4 } from "gsap";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import HamburgerCSS from "../styles/Hamburger.module.css";

import bl from "../Assets/Hamburger/bottomLeft.png";
import br from "../Assets/Hamburger/bottomRight.png";
import mb from "../Assets/Hamburger/midBottom.png";
import mt from "../Assets/Hamburger/midTop.png";
import tl from "../Assets/Hamburger/topLeft.png";
import icon from "../Assets/Hamburger/info.png";

export default function Hamburger() {
  const [showMenu, setShowMenu] = React.useState(false);

  let menuDiv = useRef(null);
  let menu1 = useRef(null);
  let menu2 = useRef(null);
  let menu3 = useRef(null);
  let menu4 = useRef(null);
  let div1 = useRef(null);
  let div2 = useRef(null);
  let container = useRef(null);

  const staggerText = (node, node2, node3, node4) => {
    gsap.to([node, node2, node3, node4], {
      duration: 1,
      y: 0,
      opacity: 1,
      delay: 0.1,
      stagger: { amount: 0.3 },
      ease: Power4.easeInOut,
    });
  };

  const removeText = (node, node2, node3, node4) => {
    gsap.to([node, node2, node3, node4], {
      duration: 1,
      y: 100,
      opacity: 0,
      delay: 0.1,
      stagger: { amount: 0.3 },
      ease: Power4.easeInOut,
    });
  };

  const staggerDivs = (node, node2) => {
    gsap.to([node, node2], {
      duration: 1,
      y: 0,
      opacity: 1,
      delay: 0.1,
      stagger: { amount: 0.3 },
      ease: Power4.easeInOut,
    });
  };

  const removeDivs = (node, node2) => {
    gsap.to([node, node2], {
      duration: 1,
      y: 100,
      opacity: 0,
      delay: 0.1,
      stagger: { amount: 0.3 },
      ease: Power4.easeInOut,
    });
  };

  function toggleMenu() {
    setShowMenu(!showMenu);

    document.querySelector("html").style.overflowY = showMenu
      ? "scroll"
      : "hidden";
  }

  useEffect(() => {
    let ham = document.getElementById("ham");
    let ham2 = document.getElementById("ham2");
    let ham3 = document.getElementById("ham3");

    if (showMenu) {
      container.style.width = "100vw";
      container.style.height = "100vh";

      gsap.to(menuDiv, {
        duration: 1,
        opacity: 1,
        ease: "power3.inOut",
      });

      gsap.to(menuDiv, {
        duration: 0,
        height: 550,
        ease: "power3.inOut",
      });

      staggerReveal(menuDiv);
      staggerDivs(div1, div2);
      staggerText(menu1, menu2, menu3, menu4);

      ham.style.transform = "rotate(45deg) translate(5px, 5px)";
      ham2.style.opacity = "0";
      ham3.style.transform = "rotate(-45deg) translate(5px, -5px)";
    } else {
      ham.style.transform = "rotate(0deg)";
      ham2.style.opacity = "1";
      ham3.style.transform = "rotate(0deg)";

      gsap.to(menuDiv, {
        duration: 0.8,
        opacity: 0,
        ease: "power3.inOut",
      });

      gsap.to(menuDiv, {
        duration: 0.8,
        height: 0,
        ease: "power3.inOut",
      });

      removeDivs(div1, div2);
      removeText(menu1, menu2, menu3, menu4);
      staggerHide(menuDiv);

      setTimeout(() => {
        container.style.width = "0vw";
        container.style.height = "0vh";
      }, 800);
    }
  }, [showMenu]);

  const staggerReveal = (node) => {
    gsap.from(node, {
      duration: 0.8,
      height: 0,
      transformOrigin: "right top",
      skewY: 10,
      ease: "power3.inOut",
    });
  };

  const staggerHide = (node) => {
    gsap.to(node, {
      duration: 0.8,
      height: 0,
      skewY: 0,
      transformOrigin: "right bottom",
      ease: "power3.inOut",
    });
  };

  return (
    <div ref={(el) => (container = el)} className={HamburgerCSS.container}>
      <div className={HamburgerCSS.hamContainer}>
        <div className={HamburgerCSS.hamBox} onClick={toggleMenu}>
          <div className={HamburgerCSS.ham} id="ham"></div>
          <div className={HamburgerCSS.ham2} id="ham2"></div>
          <div className={HamburgerCSS.ham3} id="ham3"></div>
        </div>
      </div>

      <div ref={(el) => (menuDiv = el)} id="menu" className={HamburgerCSS.menu}>
        <img alt="" src={bl} className={HamburgerCSS.bl}></img>
        <img alt="" src={br} className={HamburgerCSS.br}></img>
        <img alt="" src={mt} className={HamburgerCSS.mt}></img>
        <img alt="" src={mb} className={HamburgerCSS.mb}></img>
        <img alt="" src={tl} className={HamburgerCSS.tl}></img>
        <div className={HamburgerCSS.left}>
          <div className={HamburgerCSS.about}>
            <div ref={(el) => (div1 = el)} className={HamburgerCSS.heading}>
              The 50th Oasis
            </div>
            <div ref={(el) => (div2 = el)} className={HamburgerCSS.text}>
              The 50th Edition of Oasis is set to happen with the theme "Demesne
              of The Lost Gold". We welcome you to this great festival set to
              happen from 19th to 23rd November, 2022.
            </div>
          </div>

          <div className={HamburgerCSS.map}>
            <iframe
              src="https://maps.google.com/maps?q=BITS%Pilani%&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
              title="pilani on map"
              width="100%"
              height="80%"
              allowFullScreen
            ></iframe>

            <div className={HamburgerCSS.info}>
              <a
                href="https://www.bits-pilani.ac.in/pilani/iconbits/HowtoReachPilani#:~:text=Pilani%20can%20be%20reached%20either,(ISBT)%20and%20Kashmiri%20gate."
                target="_blank"
                rel="noreferrer"
                className={HamburgerCSS.anchor}
              >
                how to get to Pilani? &nbsp;
                <img alt="" src={icon} className={HamburgerCSS.icon} />
              </a>
            </div>
          </div>
        </div>
        <div className={HamburgerCSS.right}>
          <Link
            to="/developers"
            ref={(el) => (menu1 = el)}
            className={HamburgerCSS.list}
          >
            Developers
          </Link>
          <Link
            to="/sponsors"
            ref={(el) => (menu2 = el)}
            className={HamburgerCSS.list}
          >
            Sponsors
          </Link>
          <Link to="/events" ref={(el) => (menu3 = el)} className={HamburgerCSS.list}>
            Events
          </Link>
          <Link to="/videos" ref={(el) => (menu4 = el)} className={HamburgerCSS.list}>
            Videos
          </Link>
        </div>
      </div>
    </div>
  );
}
