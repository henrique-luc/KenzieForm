import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function MyCarousel() {
  return (
    <Carousel>
      <div>
        <img alt="" src="1.jpg" />
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <img alt="" src="2.jpg" />
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <img alt="" src="3.jpg" />
        <p className="legend">Legend 1</p>
      </div>
    </Carousel>
  );
}
