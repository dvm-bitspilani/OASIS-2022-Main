import { lazy, Suspense, useEffect, useRef, useState } from "react";
import Lander from "../Components/Lander";
import Contact from "../Components/Contact";
import Events from "../Components/Events";
import HomeCSS from "../styles/Home.module.css";
import { MouseTrail } from "../Components/MouseTrail";
import Registration from "./Registration";
const Carousel = lazy(() => import("../Components/Carousel"));
export default function Home() {
  const [regState, setRegState] = useState(false);
  const [showMedia, setShowMedia] = useState(false);
  const mediaRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) { setShowMedia(true); observer.disconnect(); } }, { rootMargin: "300px" });
    observer.observe(mediaRef.current);
    return () => observer.disconnect();
  }, []);
  useEffect(() => { document.title = "OASIS'22 | Demesne of the Lost Gold | 50th Edition"; window.scrollTo(0, 0); }, []);
  const changeRegState = () => setRegState((open) => !open);
  return <main className={HomeCSS.homePage}>
    <MouseTrail />
    {regState && <Registration onClose={() => setRegState(false)} />}
    <Lander changeRegState={changeRegState} />
    <Events />
    <div ref={mediaRef} style={{ minHeight: "30rem" }}>{showMedia && <Suspense fallback={null}><Carousel /></Suspense>}</div>
    <Contact />
    <div className={HomeCSS.love}><div className={HomeCSS.foot}>Made with <a href="https://bits-dvm.org/" rel="noreferrer" target="_blank"><i aria-hidden="true" style={{ margin: 0 }} className="fa fa-heart" /></a> by DVM</div></div>
  </main>;
}
