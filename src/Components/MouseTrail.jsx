import { useEffect, useRef } from "react";

// Decorative trail only: no React state updates for every pointer movement.
export function MouseTrail({ strokeColor = "#EBB935", lineWidthStart = 10 }) {
  const canvasRef = useRef(null);
  useEffect(() => {
    const media = window.matchMedia("(pointer: fine) and (min-width: 801px) and (prefers-reduced-motion: no-preference)");
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    let points = [], frame;
    const resize = () => { canvas.width = innerWidth; canvas.height = innerHeight; };
    const move = (event) => {
      if (!media.matches) return;
      points.push({ x: event.clientX, y: event.clientY, at: performance.now() });
      if (!frame) frame = requestAnimationFrame(draw);
    };
    function draw(now) {
      frame = undefined;
      context.clearRect(0, 0, canvas.width, canvas.height);
      points = points.filter((point) => now - point.at < 240);
      if (media.matches && !document.hidden && points.length > 1) {
        context.strokeStyle = strokeColor;
        context.lineCap = "round";
        for (let i = 1; i < points.length; i++) {
          context.globalAlpha = i / points.length * 0.7;
          context.lineWidth = lineWidthStart * i / points.length;
          context.beginPath(); context.moveTo(points[i - 1].x, points[i - 1].y); context.lineTo(points[i].x, points[i].y); context.stroke();
        }
      }
      if (points.length) frame = requestAnimationFrame(draw);
    }
    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", move, { passive: true });
    return () => { cancelAnimationFrame(frame); window.removeEventListener("resize", resize); window.removeEventListener("pointermove", move); };
  }, [strokeColor, lineWidthStart]);
  return <canvas aria-hidden="true" ref={canvasRef} className="portfolio-trail" />;
}
