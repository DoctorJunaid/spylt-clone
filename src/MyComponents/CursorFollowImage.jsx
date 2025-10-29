// src/components/CursorFollowImage.jsx

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

function CursorFollowImage({ imageUrl, maxMove = 15, className = "" }) {
  const containerRef = useRef(null);
  const imageRef = useRef(null);

  useGSAP(
    (context) => {
      const container = containerRef.current;
      const image = imageRef.current;

      if (!container || !image) return;

      gsap.from(image, {
        scale: 0.5,
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
      });

      const handleMove = (e) => {
        const rect = container.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const x = gsap.utils.mapRange(0, rect.width, -maxMove, maxMove, mouseX);

        const y = gsap.utils.mapRange(
          0,
          rect.height,
          -maxMove,
          maxMove,
          mouseY,
        );

        gsap.to(image, {
          duration: 0.3,
          x: x,
          y: y,
          ease: "power1.out",
        });
      };

      const handleLeave = () => {
        gsap.to(image, {
          x: 0,
          y: 0,
          duration: 0.7,
          ease: "elastic.out(1, 0.75)",
        });
      };

      context.add(() => {
        container.addEventListener("mousemove", handleMove);
        container.addEventListener("mouseleave", handleLeave);
      });
    },
    { dependencies: [maxMove] },
  );

  return (
    <div
      ref={containerRef}
      className={`cursor-pointer relative p-4 ${className}`}
    >
      <img
        ref={imageRef}
        src={imageUrl}
        loading="lazy"
        alt=""
        className="relative z-10"
      />
    </div>
  );
}

export default CursorFollowImage;
