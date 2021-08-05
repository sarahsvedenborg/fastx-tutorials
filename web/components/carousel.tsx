import { urlFor } from "../lib/sanity";

interface CarouselProps {
  slides?: any[];
  slidesLink?: any;
}

const Carousel = ({ slides, slidesLink }: CarouselProps) => {
  console.log("link", slidesLink)
  return (
    <div className="carousel">
      <div className="download">
      Download slides: <a href={`${slidesLink.asset.url}?dl`}>{slidesLink.asset.originalFilename}</a>
        </div>
      {Array.isArray(slides) &&
        slides.map((slide) => <img src={urlFor(slide).url()!}></img>)}
    </div>
  );
};

export default Carousel;
