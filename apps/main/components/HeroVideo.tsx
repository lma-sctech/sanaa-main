"use client";

import { useEffect, useRef } from "react";

export function HeroVideo() {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const videoElement = video;

    function onPlaying() {
      videoElement.classList.add("is-playing");
    }

    if (videoElement.readyState >= 3) {
      onPlaying();
    } else {
      videoElement.addEventListener("playing", onPlaying, { once: true });
      return () => videoElement.removeEventListener("playing", onPlaying);
    }
  }, []);

  return (
    <video
      ref={ref}
      className="hero__video"
      autoPlay
      muted
      loop
      playsInline
      poster="/images/hero/hero-cap1.png"
    >
      <source src="/vid/hero-vid1.mp4" type="video/mp4" />
    </video>
  );
}
