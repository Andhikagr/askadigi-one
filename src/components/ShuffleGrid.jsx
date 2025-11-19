import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { mix } from "../data/mix"; // pastikan path-nya benar

const ShuffleGrid = ({ setCurrentIndex, setPreviewImages, setPreviewOpen }) => {
  const shuffle = (array) => {
    let currentIndex = array.length,
      randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  };

  const squareData = mix[0].images.map((src, index) => ({
    id: index + 1,
    src,
  }));

  const generateSquares = () => {
    return shuffle([...squareData]).map((sq, index) => (
      <motion.div
        key={sq.id}
        layout
        transition={{ duration: 1.5, type: "spring" }}
        className="w-full h-full cursor-pointer"
        style={{
          backgroundImage: `url(${sq.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        onClick={() => {
          setCurrentIndex(sq.id - 1); // index gambar
          setPreviewImages(mix[0].images); // semua gambar untuk preview
          setPreviewOpen(true); // buka modal
        }}
      ></motion.div>
    ));
  };

  const timeoutRef = useRef(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();
    return () => clearTimeout(timeoutRef.current);
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());
    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className="grid grid-cols-3 grid-rows-3 h-full gap-1 px-[8%]">
      {squares}
    </div>
  );
};

export default ShuffleGrid;
