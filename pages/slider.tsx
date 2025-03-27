import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";

export const sliderData = [
    {
      id: 3,
      title: "The Large Hadron Collider tunnel",
      url: "/img/carousel/tunnel.webp",
    },
    {
      id: 2,
      title: "The Compact Muon Solenoid",
      url: "/img/carousel/cms.jpg",
    },
    {
      id: 1,
      title: "ICFAST Conference in 2022",
      url: "/img/carousel/ICFAST_group.jpeg",
    }
  ];

export default function Slider() {
  const [emblaRef] = useEmblaCarousel({ loop: true}, [Autoplay({delay: 5000})]);

  return (
    <>
    <div
      className="overflow-hidden m-2 bg-gray-200 w-full mx-auto flex items-center justify-center h-max rounded"
      ref={emblaRef}>
      <div className="flex">
        {sliderData?.map((item) => {
          return (
            <div className="embla__slide relative h-auto w-full" key={item.id}>

                {/* the image */}
              <img className="object-cover transition-all duration-500 h-full hover:scale-105" src={item.url} alt=""  />

              {/* title/subtitle */}
              <h3 className="absolute bottom-6 px-4 bg-black/40 w-full text-white font-bold rounded ">
                {item.title}
              </h3>
            </div>
          );
        })}
      </div>
    </div>
    </>
  );
}