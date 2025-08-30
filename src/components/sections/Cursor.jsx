import { useEffect, useRef } from "react";

/**
 * CoolCursor – custom cursor with trailing ring, magnetic hover & ripples.
 * Props: size (ring diameter), dot (dot size), ease (0..1 smoothing)
 */
export default function Cursor({ size = 36, dot = 6, ease = 0.15 }){
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const rippleRef = useRef(null);
  const pos = useRef({ x: 0, y: 0 });
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const dotEl = dotRef.current, ringEl = ringRef.current, ripEl = rippleRef.current;
    if (!dotEl || !ringEl || !ripEl) return;

    // Hide on touch devices
    if ("ontouchstart" in window || navigator.maxTouchPoints > 0) {
      dotEl.style.display = "none";
      ringEl.style.display = "none";
      ripEl.style.display = "none";
      return;
    }

    const isHot = (el) => el.closest("a, button, [role='button'], [data-cursor='hover']");

    const onMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;

      // dot follows instantly
      dotEl.style.transform = `translate(${e.clientX - dot/2}px, ${e.clientY - dot/2}px)`;
    };

    // click ripple
    const onDown = () => {
      ripEl.animate(
        [
          { transform: `translate(${mouse.current.x - size/2}px, ${mouse.current.y - size/2}px) scale(0.2)`, opacity: .5 },
          { transform: `translate(${mouse.current.x - size/2}px, ${mouse.current.y - size/2}px) scale(1.6)`, opacity: 0 }
        ],
        { duration: 420, easing: "cubic-bezier(.22,.61,.36,1)" }
      );
    };

    // grow on interactive
    const onOver = (e) => { if (isHot(e.target)) ringEl.dataset.big = "1"; };
    const onOut  = (e) => { if (isHot(e.target)) delete ringEl.dataset.big; };

    // magnetic hover (slight pull of element toward cursor)
    const onMouseEnter = (e) => {
      const el = isHot(e.target);
      if (!el) return;
      el.animate([{ transform: "translate(0,0)" }, { transform: "translate(2px,2px)" }], { duration: 120, fill: "forwards" });
    };
    const onMouseLeave = (e) => {
      const el = isHot(e.target);
      if (!el) return;
      el.animate([{ transform: "translate(2px,2px)" }, { transform: "translate(0,0)" }], { duration: 160, fill: "forwards" });
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseover", onOver, { passive: true });
    window.addEventListener("mouseout", onOut, { passive: true });
    window.addEventListener("mouseenter", onMouseEnter, true);
    window.addEventListener("mouseleave", onMouseLeave, true);

    let raf;
    const loop = () => {
      pos.current.x += (mouse.current.x - pos.current.x) * ease;
      pos.current.y += (mouse.current.y - pos.current.y) * ease;

      const s = ringEl.dataset.big ? 1.6 : 1;
      ringEl.style.transform =
        `translate(${pos.current.x - size/2}px, ${pos.current.y - size/2}px) scale(${s})`;

      raf = requestAnimationFrame(loop);
    };
    loop();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("mouseout", onOut);
      window.removeEventListener("mouseenter", onMouseEnter, true);
      window.removeEventListener("mouseleave", onMouseLeave, true);
    };
  }, [size, dot, ease]);

  // Inline CSS keyframes so you don’t need to edit tailwind.config
  return (
    <>
      <style>{`
        @media (pointer: fine) {
          .cursor-none * { cursor: none !important; }
        }
      `}</style>

      {/* click ripple layer */}
      <div
        ref={rippleRef}
        className="pointer-events-none fixed left-0 top-0 z-[9997] h-[${size}px] w-[${size}px] rounded-full border border-white/30"
        style={{ width: size, height: size }}
      />

      {/* trailing ring */}
      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-[9998] rounded-full border border-white/90 opacity-70 backdrop-blur-[2px] transition-[opacity] duration-200"
        style={{ width: size, height: size }}
      />

      {/* center dot */}
      <div
        ref={dotRef}
        // className="pointer-events-none fixed left-0 top-0 z-[9999] rounded-full bg-white mix-blend-difference transition-opacity duration-
                className="pointer-events-none fixed left-0 top-0 z-[9999] rounded-full bg-white mix-blend-difference transition-opacity duration-200"
        style={{ width: dot, height: dot }}
      />
    </>
  );
}

