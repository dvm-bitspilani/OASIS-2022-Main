import { useRef } from "react";
import gsap, { Power4 } from "gsap";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { prefetchRoute } from "../routeModules";
import HamburgerCSS from "../styles/Hamburger.module.css";
import CampusMap from "./CampusMap";

import bl from "../Assets/Hamburger/bottomLeft.webp";
import br from "../Assets/Hamburger/bottomRight.webp";
import mb from "../Assets/Hamburger/midBottom.webp";
import mt from "../Assets/Hamburger/midTop.webp";
import tl from "../Assets/Hamburger/topLeft.webp";
import icon from "../Assets/Hamburger/info.webp";

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
  const previousOverflow = useRef("");

  useEffect(() => {
    previousOverflow.current = document.documentElement.style.overflowY;
    const keydown = event => { if (event.key === "Escape") setShowMenu(false); };
    document.addEventListener("keydown", keydown);
    return () => {
      document.removeEventListener("keydown", keydown);
      document.documentElement.style.overflowY = previousOverflow.current;
    };
  }, []);

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
    setShowMenu(open => !open);
  }

  useEffect(() => {
    document.documentElement.style.overflowY = showMenu ? "hidden" : previousOverflow.current;
    let ham = document.getElementById("ham");
    let ham2 = document.getElementById("ham2");

    if (showMenu) {
      container.current.style.width = "100vw";
      container.current.style.height = "100vh";

      gsap.to(menuDiv.current, {
        duration: 1,
        opacity: 1,
        ease: "power3.inOut",
      });

      gsap.to(menuDiv.current, {
        duration: 0,
        height: 550,
        ease: "power3.inOut",
      });

      staggerReveal(menuDiv.current);
      staggerDivs(div1.current, div2.current);
      staggerText(menu1.current, menu2.current, menu3.current, menu4.current, menu5.current);

      ham.style.transform = "rotate(0deg) translate(-7px, 10px)";
      ham2.style.transform = "rotate(0deg) translate(-7px, -5px)";
      return () => gsap.killTweensOf([menuDiv.current, div1.current, div2.current, menu1.current, menu2.current, menu3.current, menu4.current, menu5.current]);
    } else {
      ham.style.transform = "rotate(-45deg) translate(-6px, 2px)";
      ham2.style.transform = "rotate(-45deg) translate(-5px, -10px)";

      gsap.to(menuDiv.current, {
        duration: 0.8,
        opacity: 0,
        ease: "power3.inOut",
      });

      gsap.to(menuDiv.current, {
        duration: 0.8,
        height: 0,
        ease: "power3.inOut",
      });

      removeDivs(div1.current, div2.current);
      removeText(menu1.current, menu2.current, menu3.current, menu4.current, menu5.current);
      staggerHide(menuDiv.current);

      const closeTimer = setTimeout(() => {
        container.current.style.width = "0vw";
        container.current.style.height = "0vh";
      }, 800);
      return () => {
        clearTimeout(closeTimer);
        gsap.killTweensOf([menuDiv.current, div1.current, div2.current, menu1.current, menu2.current, menu3.current, menu4.current, menu5.current]);
      };
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
    navigate("/sponsors");
  }
  function devs() {
    navigate("/developers");
  }
  function media() {
    navigate("/mediaPartners");
  }
  function eclipse() {
    navigate("/eclipse");
  }
  function wallmag() {
    navigate("/wallmag");
  }

  return (
    <div ref={container} className={HamburgerCSS.container}>
      <button type="button" className={HamburgerCSS.hamContainer} onClick={toggleMenu} aria-label="Toggle navigation" aria-expanded={showMenu} aria-controls="menu">
        <div className={HamburgerCSS.ham} id="ham"></div>
        <div className={HamburgerCSS.ham2} id="ham2"></div>
      </button>

      <div ref={menuDiv} id="menu" inert={showMenu ? undefined : ""} aria-hidden={!showMenu} className={HamburgerCSS.menu}>
        <img alt="" src={bl} className={HamburgerCSS.bl}></img>
        <img alt="" src={br} className={HamburgerCSS.br}></img>
        <img alt="" src={mt} className={HamburgerCSS.mt}></img>
        <img alt="" src={mb} className={HamburgerCSS.mb}></img>
        <img alt="" src={tl} className={HamburgerCSS.tl}></img>
        <div className={HamburgerCSS.left}>
          <div className={HamburgerCSS.about}>
            <div ref={div1} className={HamburgerCSS.heading}>
              The 50th Oasis
            </div>
            <div ref={div2} className={HamburgerCSS.text}>
              The 50th Edition of Oasis is set to happen with the theme "Demesne
              of The Lost Gold". We welcome you to this great festival set to
              happen from 19th to 23rd November, 2022.
            </div>
          </div>

          <div className={HamburgerCSS.map}>
            {showMenu && <CampusMap />}

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
            href="/developers/" onClick={(event) => { event.preventDefault(); devs(); }}
            onPointerEnter={() => prefetchRoute("/developers")} onFocus={() => prefetchRoute("/developers")} onTouchStart={() => prefetchRoute("/developers")}
            ref={menu1}
            className={HamburgerCSS.list}
          >
            Developers
          </a>
          <a
            href="/sponsors/" onClick={(event) => { event.preventDefault(); spons(); }}
            onPointerEnter={() => prefetchRoute("/sponsors")} onFocus={() => prefetchRoute("/sponsors")} onTouchStart={() => prefetchRoute("/sponsors")}
            ref={menu2}
            className={HamburgerCSS.list}
          >
            Sponsors
          </a>
          <a
            href="/eclipse/" onClick={(event) => { event.preventDefault(); eclipse(); }}
            onPointerEnter={() => prefetchRoute("/eclipse")} onFocus={() => prefetchRoute("/eclipse")} onTouchStart={() => prefetchRoute("/eclipse")}
            ref={menu3}
            className={HamburgerCSS.list}
          >
            Eclipse
          </a>
          <a
            href="/mediaPartners/" onClick={(event) => { event.preventDefault(); media(); }}
            onPointerEnter={() => prefetchRoute("/mediaPartners")} onFocus={() => prefetchRoute("/mediaPartners")} onTouchStart={() => prefetchRoute("/mediaPartners")}
            ref={menu4}
            className={HamburgerCSS.list}
          >
            Media Partners
          </a>
          <a
            href="/wallmag/" onClick={(event) => { event.preventDefault(); wallmag(); }}
            onPointerEnter={() => prefetchRoute("/wallmag")} onFocus={() => prefetchRoute("/wallmag")} onTouchStart={() => prefetchRoute("/wallmag")}
            ref={menu5}
            className={HamburgerCSS.list}
          >
            WallMag
          </a>
        </div>
      </div>
    </div>
  );
}
