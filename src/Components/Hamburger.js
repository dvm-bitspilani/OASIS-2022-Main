import React, { useEffect } from 'react'
import gsap, { Power4 } from 'gsap';
import { Timeline } from 'gsap/gsap-core';
import { useRef } from 'react';
import HamburgerCSS from "../styles/Hamburger.module.css"
import { doc } from 'prettier';
import bl from "../Assets/blHam.png"
import br from "../Assets/brHam.png"
import tr from "../Assets/trHam.png"
import tl from "../Assets/tlHam.png"

export default function Hamburger() {
    const [showMenu, setShowMenu] = React.useState(false)
    // const menuItem = useRef(null)
    // let menuItems = gsap.utils.toArray('.menuItems')
    let menuDiv = useRef(null)
    let menu1 = useRef(null)
    let menu2 = useRef(null)

    let menu3 = useRef(null)
    const staggerText = (node, node2, node3) => {
        gsap.to([node, node2, node3], { duration: 0.8, y: 0, opacity: 1, delay: 0.1, stagger: { amount: 0.3 }, ease: Power4.easeInOut })
    }
    const removeText = (node, node2, node3) => {
        gsap.to([node, node2, node3], { duration: 0.8, y: 100, opacity: 0, delay: 0.1, stagger: { amount: 0.3 }, ease: Power4.easeInOut })
    }
    function toggleMenu() {
        setShowMenu(showMenu => !showMenu);
        // staggerText(menu1, menu2, menu3)
        // if (showMenu) {
        //     removeText(menu1, menu2, menu3)
        // }
        // tl.staggerFrom('.menuItem', 1.5, {y:"100%", opacity: 1, ease: Power4.easeOut }, 0.15, "+1.4")
    }
    useEffect(() => {
        let ham = document.getElementById('ham')
        let ham2 = document.getElementById('ham2')
        if (showMenu) {
            ham.style.transform = "rotate(45deg)"
            // menu.style.transform = "translateY(0%)"
            gsap.to(menuDiv, {
                duration: 1,
                opacity: 1,
                ease: "power3.inOut"
            })
            gsap.to(menuDiv, {
                duration: 0,
                height: 550,
                ease: "power3.inOut",
            })
            staggerReveal(menuDiv)
            ham2.style.transform = "rotate(-45deg) translate(5px, -5px)"
        }
        else {
            ham.style.transform = "rotate(0deg)"
            ham2.style.transform = "rotate(0deg)"
            gsap.to(menuDiv, {
                duration: 0.8,
                opacity: 0,
                ease: "power3.inOut"
            })
            gsap.to(menuDiv, {
                duration: 0.8,
                height: 0,
                ease: "power3.inOut",
            })
            staggerHide(menuDiv)
        }
    }, [showMenu])
    const staggerReveal = (node) => {
        gsap.from(node, {
            duration: 0.8,
            height: 0,
            transformOrigin: 'right top',
            skewY: 2,
            ease: 'power3.inOut'
        })
    }
    const staggerHide = (node) => {
        gsap.to(node, {
            duration: 0.8,
            height: 0,
            skewY: 0,
            transformOrigin: 'right bottom',
            ease: 'power3.inOut'
        })
    }

    return (
        <div className={HamburgerCSS.container}>
            <div className={HamburgerCSS.hamContainer}>
                <div className={HamburgerCSS.hamBox} onClick={toggleMenu}>
                    <div className={HamburgerCSS.ham} id="ham">
                    </div>
                    <div className={HamburgerCSS.ham2} id="ham2">
                    </div>
                </div>
            </div>
            <div ref={el => (menuDiv = el)} id="menu" className={HamburgerCSS.menu}>
                <img src={bl} className={HamburgerCSS.bl}></img>
                <img src={br} className={HamburgerCSS.br}></img>
                <img src={tl} className={HamburgerCSS.tl}></img>
                <img src={tr} className={HamburgerCSS.tr}></img>
                <div className={HamburgerCSS.left}>
                    <div className={HamburgerCSS.about}>
                        <div className={HamburgerCSS.heading}>The 50th Oasis</div>
                        <div className={HamburgerCSS.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at ipsum suscipit, tempor justo ut, efficitur lectus. Suspendisse non magna orci. Suspendisse potenti. Morbi consequat, nisl a fermentum lobortis, nisl ante ornare felis, sed accumsan metus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at ipsum suscipit,</div>
                    </div>
                    <div className={HamburgerCSS.map}>
                        <iframe src="https://maps.google.com/maps?q=BITS%Pilani%&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed" width="100%" height="80%" allowfullscreen></iframe>
                        <div className={HamburgerCSS.info}>how to get to Pilani? <i class="fa-solid fa-circle-info"></i></div>
                    </div>
                </div>
                <div className={HamburgerCSS.right}>
                    <div className={HamburgerCSS.list}>Developers</div>
                    <div className={HamburgerCSS.list}>Events</div>
                    <div className={HamburgerCSS.list}>Videos</div>
                    <div className={HamburgerCSS.list}>Sponsors</div>
                </div>
            </div>
        </div >
    )
}