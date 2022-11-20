import { useRef } from "react";
import gsap, { Power4 } from "gsap";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import HamburgerCSS from "../styles/Hamburger.module.css";

import bl from "../Assets/Hamburger/bottomLeft.png";
import br from "../Assets/Hamburger/bottomRight.png";
import mb from "../Assets/Hamburger/midBottom.png";
import mt from "../Assets/Hamburger/midTop.png";
import tl from "../Assets/Hamburger/topLeft.png";
import icon from "../Assets/Hamburger/info.png";

export default function Hamburger() {
  const [showMenu, setShowMenu] = React.useState(false);
  const navigate = useNavigate();
  let menuDiv = useRef(null);
  let menu1 = useRef(null);
  let menu2 = useRef(null);
  let menu3 = useRef(null);
  let menu4 = useRef(null);
  let menu5 = useRef(null);
  let div1 = useRef(null);
  let div2 = useRef(null);
  let container = useRef(null);

  const staggerText = (node, node2, node3, node4, node5) => {
    gsap.to([node, node2, node3, node4, node5], {
      duration: 1,
      y: 0,
      opacity: 1,
      delay: 0.1,
      stagger: { amount: 0.3 },
      ease: Power4.easeInOut,
    });
  };

  const removeText = (node, node2, node3, node4, node5) => {
    gsap.to([node, node2, node3, node4, node5], {
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
      staggerText(menu1, menu2, menu3, menu4, menu5);

      ham.style.transform = "rotate(0deg) translate(-7px, 10px)";
      ham2.style.transform = "rotate(0deg) translate(-7px, -5px)";
    } else {
      ham.style.transform = "rotate(-45deg) translate(-6px, 2px)";
      ham2.style.transform = "rotate(-45deg) translate(-5px, -10px)";

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
      removeText(menu1, menu2, menu3, menu4, menu5);
      staggerHide(menuDiv);

      setTimeout(() => {
        container.style.width = "0vw";
        container.style.height = "0vh";
      }, 800);
    }
  }, [showMenu]);

  const staggerReveal = (node) => {
    gsap.to(node, {
      duration: 0.8,
      height: "30vh",
      y: 0,
      transformOrigin: "right top",
      ease: "power3.inOut",
    });
    gsap.from(node, {
      duration: 0.8,
      skewY: 10,
    });
  };

  const staggerHide = (node) => {
    gsap.to(node, {
      duration: 0.8,
      height: 0,
      y: -600,
      skewY: 0,
      transformOrigin: "right bottom",
      ease: "power3.inOut",
    });
  };

  function spons() {
    document.querySelector("html").style.overflowY = "scroll";
    navigate("/sponsors");
  }
  function devs() {
    document.querySelector("html").style.overflowY = "scroll";
    navigate("/developers");
  }
  function media() {
    document.querySelector("html").style.overflowY = "scroll";
    navigate("/mediaPartners");
  }
  function eclipse() {
    document.querySelector("html").style.overflowY = "scroll";
    navigate("/eclipse");
  }
  function wallmag() {
    document.querySelector("html").style.overflowY = "scroll";
    navigate("/wallmag");
  }

  return (
    <div ref={(el) => (container = el)} className={HamburgerCSS.container}>
      <div className={HamburgerCSS.hamContainer} onClick={toggleMenu}>
        <div className={HamburgerCSS.ham} id="ham"></div>
        <div className={HamburgerCSS.ham2} id="ham2"></div>
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
          <a
            onClick={devs}
            ref={(el) => (menu1 = el)}
            className={HamburgerCSS.list}
          >
            Developers
          </a>
          <a
            onClick={spons}
            ref={(el) => (menu2 = el)}
            className={HamburgerCSS.list}
          >
            Sponsors
          </a>
          <a
            onClick={eclipse}
            ref={(el) => (menu3 = el)}
            className={HamburgerCSS.list}
          >
            Eclipse
          </a>
          <a
            onClick={media}
            ref={(el) => (menu4 = el)}
            className={HamburgerCSS.list}
          >
            Media Partners
          </a>
          <a
            onClick={wallmag}
            ref={(el) => (menu5 = el)}
            className={HamburgerCSS.list}
          >
            WallMag
          </a>
        </div>
      </div>
    </div>
  );
}
