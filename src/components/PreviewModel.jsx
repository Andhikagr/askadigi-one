import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { IoMdCloseCircle } from "react-icons/io";
import { createPortal } from "react-dom";
import "swiper/css";
import "swiper/css/navigation";
import { motion, AnimatePresence } from "motion/react";

const PreviewModel = ({ images = [], currentIndex, onClose }) => {
  return createPortal(
    <div
      className="fixed inset-0 bg-black/50 flex z-5000 items-center justify-center px-[7%]"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0, rotate: "12.5deg" }}
        animate={{ scale: 1, rotate: "0deg" }}
        exit={{ scale: 0, rotate: "0deg" }}
        className="relative w-full"
        onClick={(e) => e.stopPropagation()}
        // transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <button
          className="absolute -top-10 right-0 text-stone-200 text-[3rem] font-bold hover:text-violet-600 cursor-pointer"
          onClick={onClose}
        >
          <IoMdCloseCircle />
        </button>
        <Swiper
          modules={[Navigation]}
          navigation
          pagination={{ clickable: true }}
          initialSlide={currentIndex}
          className="overflow-hidden"
        >
          {images.map((item, idx) => (
            <SwiperSlide key={idx}>
              <div className="flex items-center justify-center h-[80vh] md:h-[85vh]  ">
                <img
                  src={item}
                  alt={`Preview ${idx}`}
                  className="w-full h-full object-contain relative "
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </div>,
    document.body
  );
};

export default PreviewModel;
