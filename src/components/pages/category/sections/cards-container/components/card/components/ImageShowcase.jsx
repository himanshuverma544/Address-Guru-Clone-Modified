import { useState } from "react";

import Carousel from "react-multi-carousel";

import { getCarouselResponsive } from "../../../../../../../../../utilities/functions";

import defaultImage from "../../../../../../../../assets/pages/category/sections/card-container/components/card/components/image-showcase/default-image.jpeg";


const responsive = getCarouselResponsive();


const ImageShowCase = ({ className, images }) => {
  
  const [activeImage, setActiveImage] = useState(defaultImage);

  const handleSelectedImage = event => {

    if (event.target.tagName !== 'LI') {
      event.preventDefault();
    }
    else {
      setActiveImage(prev => {
        const selectedImageEle = event.target.querySelector('img');
        const selectedImage = selectedImageEle.src;
        selectedImageEle.src = prev;
        return selectedImage;
      });
    }
  }

  return (
    <div className={`${className} grid grid-rows-2`}>
      <div className="row-1 img-cont h-[16.5rem] row-span-1 col-span-full my-3 lg:h-[18rem]">
        <img
          className="w-full h-full object-cover rounded-md"
          src={activeImage}
          alt={`Active Image`}
        />
      </div>

      <div
        className="row-2 h-fit grid grid-cols-3 row-span-1 col-span-full gap-2"
        onClick={handleSelectedImage}
      >
        <Carousel
          responsive={responsive}
          keyBoardControl
          removeArrowOnDeviceType={["mobile"]}
          containerClass="w-[31.2rem]"
          itemClass="select-none fix-drag px-[0.3vw] cursor-pointer hover:brightness-50 "
        >
          {images.map(image =>
            <div key={image.id} className="img-cont h-[6rem] lg:h-[7.5rem]">
              <img 
                className="w-full h-full object-cover rounded-md"
                src={image.url}
                alt={`Image ${image.id}`}
              />
            </div>
          )}
        </Carousel>
      </div>
    </div>
  );
}

export default ImageShowCase;
