import React from "react";
import AnimateIn from "./AnimateIn";

const Footer = () => {
  const icons = [
    {
      src: "/Icon/facebook.png",
      link: "https://www.facebook.com/AndhikaGilangRahadian/",
    },
    {
      src: "/Icon/ig.png",
      link: "https://www.instagram.com/andhikagilangr/",
    },
    {
      src: "/Icon/linkedin.png",
      link: "https://www.linkedin.com/in/andhika-gilang-rahadian-5883951b8/",
    },
    {
      src: "/Icon/lynk.png",
      link: "https://lynk.id/andhikagr",
    },
  ];

  return (
    <section className="py-5 px-[7%] w-full ">
      <div className="flex flex-col md:flex-row items-center justify-between gap-y-4 ">
        <div className=" py-2 px-6 rounded-2xl flex flex-wrap items-center justify-center gap-4 ">
          <AnimateIn className="">
            <h6>Happy to connect with you</h6>
          </AnimateIn>

          <ul className=" gap-x-2  flex ">
            {icons.map((items, index) => (
              <li key={index}>
                <AnimateIn direction="up" delay={0.1 + index * 0.3}>
                  <a
                    href={items.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={items.src}
                      alt="icon"
                      tabIndex={0}
                      className="w-12 h-12 object-contain shadow-theme hover-theme cursor-pointer p-2 rounded-2xl"
                    />
                  </a>
                </AnimateIn>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center justify-center md:justify-end whitespace-nowrap  ">
          <span class="flex text-center gap-2">
            <AnimateIn direction="left">
              <p>© 2025</p>
            </AnimateIn>
            <AnimateIn direction="up">
              <p>Andhika Gilang Rahadian. All Rights Reserved.</p>
            </AnimateIn>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Footer;
