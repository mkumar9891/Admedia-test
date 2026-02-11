import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

/* ---------- Navigation Buttons ---------- */
const SliderNavigation = ({ swiper }) => {
  return (
    <>
      <button className="nav-btn nav-prev" onClick={() => swiper.slidePrev()}>
        <FaArrowLeft />
      </button>
      <button className="nav-btn nav-next" onClick={() => swiper.slideNext()}>
        <FaArrowRight />
      </button>
    </>
  );
};

const SwiperList = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedContent, setSelectedContent] = useState(null);
  const [swiperInstance, setSwiperInstance] = useState(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = selectedImage ? "hidden" : "auto";
  }, [selectedImage]);

  const slides = [
    {
      src: "/testimonial-1.png",
    },
    {
      src: "/testimonial-2.jpeg",
    },
    {
      src: "/testimonial-3.png",
    },
    {
      src: "/testimonial-4.png",
    },
    {
      src: "/testimonial-5.png",
    },
  ];

  const openPopup = (image, title, text) => {
    setSelectedImage(image);
    setSelectedContent({ title, text });
  };

  const closePopup = () => {
    setSelectedImage(null);
    setSelectedContent(null);
  };

  return (
    <section className="testimonial-section">
      <div className="container">
        <h2 className="why-title">WHY CHOOSE US</h2>
        <div class="why-line"></div>

        <div className="swiper-outer-container">
          {/* Left Arrow - Positioned outside wrapper */}
          <button
            className="nav-btn nav-prev-outer"
            onClick={() => swiperInstance?.slidePrev()}
            aria-label="Previous slide"
          >
            <FaArrowLeft />
          </button>

          <div className="swiper-container-aligned">
            <Swiper
              onSwiper={(swiper) => {
                setSwiperInstance(swiper);
                swiperRef.current = swiper;
              }}
              effect="coverflow"
              centeredSlides={true}
              grabCursor={true}
              slidesPerView="auto"
              initialSlide={2}
              spaceBetween={30} // Increased gap between cards
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 140,
                modifier: 2,
                slideShadows: false,
              }}
              pagination={{
                clickable: true,
                dynamicBullets: true,
              }}
              modules={[EffectCoverflow, Pagination, Navigation]}
              className="testimonial-swiper"
              breakpoints={{
                320: {
                  spaceBetween: 15, // Gap for mobile
                },
                768: {
                  spaceBetween: 25, // Gap for tablet
                },
                1024: {
                  spaceBetween: 30, // Gap for desktop
                },
              }}
            >
              {slides.map((slide, index) => (
                <SwiperSlide
                  key={index}
                  className="testimonial-slide"
                  onClick={() => openPopup(slide.src, slide.title, slide.text)}
                >
                  <div className="slide-image-wrapper">
                    <img src={slide.src} alt={slide.title} />
                    <div className="slide-overlay">
                      <h3>{slide.title}</h3>
                      <p>{slide.text}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Right Arrow - Positioned outside wrapper */}
          <button
            className="nav-btn nav-next-outer"
            onClick={() => swiperInstance?.slideNext()}
            aria-label="Next slide"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>

      {/* Popup Modal */}
      {selectedImage && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <button className="popup-close" onClick={closePopup}>
              &times;
            </button>

            <div className="popup-image-container">
              <img src={selectedImage} alt="Selected Slide" />
              <div className="popup-text-overlay">
                <h3>{selectedContent?.title}</h3>
                <p>{selectedContent?.text}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default SwiperList;
