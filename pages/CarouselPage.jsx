import React, { useState, useEffect } from "react";
import Image from "next/image";

const CarouselPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  // Array of images for the carousel
  const images = [
    {
      id: 1,
      src: "https://res.cloudinary.com/dfvf4xowl/image/upload/v1750748737/DSC_0400_vzoteq_f8nwmx.jpg",
    },
    {
      id: 2,
      src: "https://res.cloudinary.com/dfvf4xowl/image/upload/v1750748735/DSC_0397_thrbk5_cqxpgy.jpg",
    },
    {
      id: 3,
      src: "https://res.cloudinary.com/dfvf4xowl/image/upload/v1750748732/DSC_0317_c3mqe8_lmxu7h.jpg",
    },
    {
      id: 4,
      src: "https://res.cloudinary.com/dfvf4xowl/image/upload/v1750748731/DSC_0339_p0uyl5_xbh9kh.jpg",
    },
    {
      id: 5,
      src: "https://res.cloudinary.com/dfvf4xowl/image/upload/v1750748726/_DSC0056_1_11zon_etimct_q8ctti.jpg",
    },
    {
      id: 6,
      src: "https://res.cloudinary.com/dfvf4xowl/image/upload/v1750748725/DSC_0948_3_11zon_p5lpxh_que3nb.jpg",
    },
    {
      id: 7,
      src: "https://res.cloudinary.com/dfvf4xowl/image/upload/v1750748723/DSC_0478_1_11zon_bjv6a3_jhtbsw.jpg",
    },
    {
      id: 8,
      src: "https://res.cloudinary.com/dfvf4xowl/image/upload/v1750748722/IMG_0792_eujzbl_cbdcrg.jpg",
    },
    {
      id: 9,
      src: "https://res.cloudinary.com/dfvf4xowl/image/upload/v1750748720/DSC_0404_yooaly_dxqw5m.jpg",
    },
    {
      id: 10,
      src: "https://res.cloudinary.com/dfvf4xowl/image/upload/v1750748720/IMG_0791_ny4ntg_lpqtut.jpg",
    },
    {
      id: 11,
      src: "https://res.cloudinary.com/dfvf4xowl/image/upload/v1750748718/IMG_0790_lbqit4_a2vvai.jpg",
    },
    {
      id: 12,
      src: "https://res.cloudinary.com/dfvf4xowl/image/upload/v1750748717/IMG_0789_phge4b_d8zixg.jpg",
    },
    {
      id: 13,
      src: "https://res.cloudinary.com/dfvf4xowl/image/upload/v1750748716/IMG_0788_fmqwio_mv6gyr.jpg",
    },
    {
      id: 14,
      src: "https://res.cloudinary.com/dfvf4xowl/image/upload/v1750748715/DSC_1210_5_11zon_tbpllh_kanonc.jpg",
    },
    {
      id: 15,
      src: "https://res.cloudinary.com/dfvf4xowl/image/upload/v1750748715/IMG_0787_tinvjq_calvj5.jpg",
    },
    {
      id: 16,
      src: "https://res.cloudinary.com/dfvf4xowl/image/upload/v1750748714/IMG_0786_upwn99_umnskw.jpg",
    },
    {
      id: 17,
      src: "https://res.cloudinary.com/dfvf4xowl/image/upload/v1750748712/IMG_0785_g5w7oo_azhxlc.heic",
    },
    {
      id: 18,
      src: "https://res.cloudinary.com/dfvf4xowl/image/upload/v1750748712/IMG_0001_ajzupb_pk3mkw.jpg",
    },
    {
      id: 19,
      src: "https://res.cloudinary.com/dfvf4xowl/image/upload/v1750748706/SHL05215_6_11zon_lb98us_wm6avj.jpg",
    },
    {
      id: 20,
      src: "https://res.cloudinary.com/dfvf4xowl/image/upload/v1750748706/DSC_1185_4_11zon_wzlkst_h7axcf.jpg",
    },
    {
      id: 21,
      src: "https://res.cloudinary.com/dfvf4xowl/image/upload/v1750748701/DSC_0557_uax5fd_e4istg.jpg",
    },
     {
      id: 22,
      src: "https://res.cloudinary.com/dfvf4xowl/image/upload/v1750748698/DSC_0421_ik2xmw_lhfho6.jpg",
    },
     {
      id: 23,
      src: "https://res.cloudinary.com/dfvf4xowl/image/upload/v1750748687/IMG_0798_q8kkfr_oxrlqd.jpg",
    },
     {
      id: 24,
      src: "https://res.cloudinary.com/dfvf4xowl/image/upload/v1750748670/IMG_0796_wg5plx_ebnyuc.jpg",
    },
     {
      id: 25,
      src: "https://res.cloudinary.com/dfvf4xowl/image/upload/v1750748670/IMG_0794_i34yhl_lqpmaf.jpg",
    },
     {
      id: 26,
      src: "https://res.cloudinary.com/dfvf4xowl/image/upload/v1750748668/IMG_0797_zuzq6a_jo9cog.jpg",
    },
     {
      id: 27,
      src: "https://res.cloudinary.com/dfvf4xowl/image/upload/v1750748664/IMG_0795_pqa2uc_xejphb.jpg",
    },
     {
      id: 28,
      src: "https://res.cloudinary.com/dfvf4xowl/image/upload/v1750748661/IMG_0793_ph6ihx_rdamxp.jpg",
    },
    

  ];

  // Function to handle next slide
  const nextSlide = () => {
    const newIndex = (currentSlide + 1) % images.length;
    setCurrentSlide(newIndex);
  };

  // Function to handle previous slide
  const prevSlide = () => {
    const newIndex = (currentSlide - 1 + images.length) % images.length;
    setCurrentSlide(newIndex);
  };

  // Start the interval when component mounts
  useEffect(() => {
    const id = setInterval(nextSlide, 3000); // Auto change slide every 2 seconds
    setIntervalId(id);

    return () => {
      clearInterval(intervalId); // Clean up on component unmount
    };
  }, [currentSlide]); // Re-run effect when currentSlide changes

  // Stop auto changing on mouse enter
  //   const handleMouseEnter = () => {
  //     clearInterval(intervalId);
  //   };

  // Resume auto changing on mouse leave
  //   const handleMouseLeave = () => {
  //     const id = setInterval(nextSlide, 3000);
  //     setIntervalId(id);
  //   };

  return (
    <>
      <div
        className={`text-[20vw] sm:text-[8vw] relative z-10 font-antonio text-center bg-black text-white`}
        style={{ backgroundImage: `url('https://res.cloudinary.com/dfvf4xowl/image/upload/v1750748547/event_n8qwxn_hsmjg7.png')` }}
      >
        GALLERY{" "}
      </div>
      <div
        className="relative w-full h-[480px] sm:h-[640px] flex items-center justify-center bg-gray-900"
        style={{ backgroundImage: `url('https://res.cloudinary.com/dfvf4xowl/image/upload/v1750748547/event_n8qwxn_hsmjg7.png')` }}
      >
        <div
          className="relative w-[90%] m-2 h-96 lg:h-[620px] overflow-hidden shadow-lg rounded-lg"
          // onMouseEnter={handleMouseEnter}
          // onMouseLeave={handleMouseLeave}
        >
          <div className="relative w-full h-full flex">
            {images.map((image, index) => (
              <div
                key={image.id}
                className={`absolute top-0 left-0 w-full h-full transform transition-transform ${
                  index === currentSlide ? "translate-x-0" : "translate-x-full"
                }`}
              >
                <Image
                  src={image.src}
                  alt={`Slide ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="object-cover w-full h-full"
                />
              </div>
            ))}
          </div>
          <button
            className="absolute top-1/2 transform -translate-y-1/2 left-2  text-white rounded-full p-2"
            onClick={prevSlide}
          >
            <Image
              src="https://res.cloudinary.com/dfvf4xowl/image/upload/v1750748603/leftarrow-artdesc_s2ckx6_drmkfn.png"
              width={20}
              height={20}
              alt="leftarrow"
            />
          </button>
          <button
            className="absolute top-1/2 transform -translate-y-1/2 right-2 text-white rounded-full p-2"
            onClick={nextSlide}
          >
            <Image
              src="https://res.cloudinary.com/dnbutfdy7/image/upload/v1719664945/expresso/rightarrow-artdesc_yckiew.png"
              width={20}
              height={20}
              alt="rightarrow"
            />
          </button>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                className={`w-12 h-1 rounded-md   focus:outline-none ${
                  index === currentSlide ? "bg-[#ffa723]" : "bg-yellow-400"
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CarouselPage;
