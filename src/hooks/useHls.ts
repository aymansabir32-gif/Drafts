import { useEffect, type RefObject } from "react";

export function useHls(videoRef: RefObject<HTMLVideoElement>, src: string) {
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !src) return;

    let hls: import("hls.js").default | undefined;
    let cancelled = false;

    if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = src;
      return;
    }

    import("hls.js").then(({ default: Hls }) => {
      if (cancelled) return;

      if (Hls.isSupported()) {
        hls = new Hls({ enableWorker: true });
        hls.loadSource(src);
        hls.attachMedia(video);
      } else {
        video.src = src;
      }
    });

    return () => {
      cancelled = true;
      hls?.destroy();
    };
  }, [videoRef, src]);
}
