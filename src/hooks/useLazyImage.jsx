import { useEffect, useState } from "react";

const useLazyImage = (imageRef, src) => {
  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setImageSrc(src);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    if (imageRef.current) {
      observer.observe(imageRef.current);
    }
    return () => observer.disconnect();
  }, [src, imageRef]);

  return imageSrc;
};

export default useLazyImage;
