import React, { useState } from "react";
import { RightOutlined, LeftOutlined } from "@ant-design/icons";

const SingleCarMedia = (props: {
  dealerListingImages: { image_location: string }[];
}) => {
  const [current, setCurrent] = useState(0);

  const length = props.dealerListingImages.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div className="flex mt-4 mx-[10%]">
      <section className="relative max-w-screen-xl">
        <LeftOutlined
          className="absolute top-[45%] left-[1rem] text-3xl z-10 text-slate-700 hover:text-white"
          onClick={prevSlide}
          data-testid="left-btn"
        />
        <RightOutlined
          className="absolute top-[45%] right-[1rem] text-3xl z-10 text-slate-700 hover:text-white"
          onClick={nextSlide}
          data-testid="right-btn"
        />
        {props.dealerListingImages.map((image, index) => {
          return (
            <div key={index} className={index === current ? 'car active' : 'car'}>
              {index === current && (
                <img
                  src={image.image_location}
                  alt="car image"
                  className="w-[1440px] h-[500px] rounded object-cover"
                  data-testid="image"
                />
              )}
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default SingleCarMedia;
