// Hero.js
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Set the autoplay speed in milliseconds
    cssEase: "cubic-bezier(0.645, 0.045, 0.355, 1)",
  };

  const slideData = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1598099947145-e85739e7ca28?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fEhhbmRiYWdzfGVufDB8fDB8fHww",
      caption: "Discover Our New Collection",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1613482184972-f9c1022d0928?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fEhhbmRiYWdzfGVufDB8fDB8fHww",
      caption: "Exclusive Deals Just for You",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1612902457341-ed7bf0608be3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fEhhbmRiYWdzfGVufDB8fDB8fHww",
      caption: "Shop Now and Save",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1586413595198-1840407316e9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTcxfHxIYW5kYmFnc3xlbnwwfHwwfHx8MA%3D%3D",
      caption: "Limited-Time Offers",
    },
    // Add more slides as needed
  ];

  return (
    <div className="relative container mx-auto p-4 font-sans">
      <Slider {...settings}>
        {slideData.map((slide) => (
          <div key={slide.id} className="w-full h-[500px] relative">
            <img
              src={slide.image}
              alt={slide.caption}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-white text-center">
                <h2 className="text-4xl font-bold mb-4">{slide.caption}</h2>
                <button className="hover:bg-white hover:text-[#BC4C2A] cursor-pointer border border-white bg-transparent text-white py-4 px-14 shadow-md transition duration-300 transform hover:scale-105">
                  Shop Collection
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Hero;
