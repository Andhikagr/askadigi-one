// import { motion } from "framer-motion";
// import { useEffect, useRef, useState } from "react";
// import img1 from "../assets/Multi/Multi-1.png";
// import img2 from "../assets/Multi/Multi-2.png";
// import img3 from "../assets/Multi/Multi-3.png";
// import img4 from "../assets/Multi/Multi-4.png";
// import img5 from "../assets/Multi/Multi-5.png";
// import img6 from "../assets/Multi/Multi-6.png";
// import img7 from "../assets/Multi/Multi-7.png";
// import img8 from "../assets/Multi/Multi-8.png";

// const ShuffleGrid = () => {
//   const shuffle = (array) => {
//     let currentIndex = array.length,
//       randomIndex;

//     while (currentIndex != 0) {
//       randomIndex = Math.floor(Math.random() * currentIndex);
//       currentIndex--;

//       [array[currentIndex], array[randomIndex]] = [
//         array[randomIndex],
//         array[currentIndex],
//       ];
//     }

//     return array;
//   };

//   const squareData = [
//     {
//       id: 1,
//       src: img1,
//     },
//     {
//       id: 2,
//       src: img2,
//     },
//     {
//       id: 3,
//       src: img3,
//     },
//     {
//       id: 4,
//       src: img4,
//     },
//     {
//       id: 5,
//       src: img5,
//     },
//     {
//       id: 6,
//       src: img6,
//     },
//     {
//       id: 7,
//       src: img7,
//     },
//     {
//       id: 8,
//       src: img8,
//     },
//   ];

//   const generateSquares = () => {
//     return shuffle(squareData).map((sq) => (
//       <motion.div
//         key={sq.id}
//         layout
//         transition={{ duration: 1.5, type: "spring" }}
//         className="w-full h-full"
//         style={{
//           backgroundImage: `url(${sq.src})`,
//           backgroundSize: "cover",
//         }}
//       ></motion.div>
//     ));
//   };

//   const timeoutRef = useRef(null);
//   const [squares, setSquares] = useState(generateSquares());

//   useEffect(() => {
//     shuffleSquares();

//     return () => clearTimeout(timeoutRef.current);
//   }, []);

//   const shuffleSquares = () => {
//     setSquares(generateSquares());

//     timeoutRef.current = setTimeout(shuffleSquares, 3000);
//   };

//   return (
//     <div className="grid grid-cols-3 grid-rows-3 h-full gap-1 px-[8%]">
//       {squares.map((sq) => sq)}
//     </div>
//   );
// };

// export default ShuffleGrid;

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const ShuffleGrid = () => {
  const shuffle = (array) => {
    let currentIndex = array.length,
      randomIndex;

    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  };

  const squareData = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    src: `/Multi/Multi-${i + 1}.png`,
  }));

  const generateSquares = () => {
    return shuffle([...squareData]).map((sq) => (
      <motion.div
        key={sq.id}
        layout
        transition={{ duration: 1.5, type: "spring" }}
        className="w-full h-full"
        style={{
          backgroundImage: `url(${sq.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
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
