import { urlFor } from "../lib/sanity";

interface CarouselProps {
  slides?: any[];
}

const Carousel = ({ slides }: CarouselProps) => {
  return (
    <div className="carousel">
      {Array.isArray(slides) &&
        slides.map((slide) => <img src={urlFor(slide).url()!}></img>)}
    </div>
  );
};

export default Carousel;
