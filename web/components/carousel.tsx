import { urlFor } from "../lib/sanity";
import styles from "./styles/carousel.module.scss";

interface CarouselProps {
  slides: any[];
}

const Carousel = ({ slides }: CarouselProps) => {
  return (
    <div className={styles.carousel}>
      {Array.isArray(slides) &&
        slides.map((slide) => (
          <img className={styles.image} src={urlFor(slide)}></img>
        ))}
    </div>
  );
};

export default Carousel;
