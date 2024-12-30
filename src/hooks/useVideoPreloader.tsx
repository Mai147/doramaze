import { useEffect, useState } from "react";

async function preloadvideo(src: string) {
  return new Promise((resolve, reject) => {
    const r = new XMLHttpRequest();
    r.onload = function () {
      resolve(r);
    };
    r.onerror = r.onabort = function () {
      reject(src);
    };
    r.open("GET", src);
    r.responseType = "blob";
    r.send();
  });
}

export default function useVideoPreloader(videoList: string[]) {
  const [videosPreloaded, setvideosPreloaded] = useState<boolean>(false);

  useEffect(() => {
    let isCancelled = false;

    async function effect() {
      if (isCancelled) {
        return;
      }

      const videosPromiseList: Promise<unknown>[] = [];
      for (const i of videoList) {
        videosPromiseList.push(preloadvideo(i));
      }

      await Promise.all(videosPromiseList);

      if (isCancelled) {
        return;
      }

      setvideosPreloaded(true);
    }

    effect();

    return () => {
      isCancelled = true;
    };
  }, [videoList]);

  return { videosPreloaded };
}
