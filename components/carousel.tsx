import { Carousel } from "@material-tailwind/react";
 
export default function CarouselCustomNavigation() {
  return (<>
    <Carousel
      className="rounded-xl w-full h-auto items-center"
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
      loop={true}
      autoplay={true}
      autoplayDelay={8000}

    >
      <img
        src="/img/carousel/CMS_event.jpg"
        alt="A CMS event"
        className="w-full object-cover"
      />
      <img
        src="/img/carousel/tunnel.webp"
        alt="LHC tunnel"
        className="w-full object-cover"
      />
      <img
        src="/img/carousel/cms.jpg"
        alt="CMS"
        className="w-full object-cover"
      />
    </Carousel>
    </>
  );
}
