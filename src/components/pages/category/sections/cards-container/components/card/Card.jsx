import { faker } from '@faker-js/faker';

import Carousel from "react-multi-carousel";

import { CiLocationOn } from "react-icons/ci";

import ImageShowcase from "./components/ImageShowcase";
import Rating from "../../../../../../utility/Rating";
import ProgressBar from "./components/ProgressBar";

import useWindowSize from "../../../../../../../../utilities/hooks/useWindowSize";

import { getCarouselResponsive, getImages } from "../../../../../../../../utilities/functions";

import { breakpoints } from "../../../../../../../../utilities/constants";

import FeatureIcon from "../../../../../../../assets/pages/category/sections/card-container/components/card/feature-icon.svg?react";


const features = [
  {
    id: 1,
    icon: <FeatureIcon/>,
    text: "Photoshop"
  },
  {
    id: 2,
    icon: <FeatureIcon/>,
    text: "Coreldraw"
  },
  {
    id: 3,
    icon: <FeatureIcon/>,
    text: "Illustrator"
  },
  {
    id: 4,
    icon: <FeatureIcon/>,
    text: "Blender"
  }
];

const progressBars = [
  {
    id: 1,
    title: "Infrastructure",
    progress: "43%"
  },
  {
    id: 2,
    title: "Administration",
    progress: "89%"
  },
  {
    id: 3,
    title: "Academics",
    progress: "73%"
  },
  {
    id: 4,
    title: "Extracurricular",
    progress: "73%"
  }
];

const buttons = [
  {
    id: 1,
    text: "Show Numbers"
  },
  {
    id: 2,
    text: "Enquire Now"
  }
];

const images = getImages({ count: 10 });

const responsive = getCarouselResponsive();


export default function Card() {

  const screenWidth = useWindowSize();
  const { md } = breakpoints;

  return (
    <div className="card flex flex-col gap-5 border px-3 py-5 md:flex-row md:mx-3">

      {screenWidth >= md && 
        <ImageShowcase className="image-showcase-cont w-[40%] px-2" images={images}/>
      }

      <div className="wrapper flex flex-col gap-5 md:w-[60%] md:py-5">
        <div className="heading text-2xl font-semibold px-[5vw] md:px-2 lg:text-3xl">
          DSOM- Graphic Designing course Dehradun
        </div>
        
        {screenWidth < md &&
          <Carousel
            responsive={responsive}
            keyBoardControl
            removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
            containerClass="w-[93vw]"
            itemClass="fix-drag select-none px-[5vw] "
          >
            {images.map(image =>
              <div key={image.id} className="image-cont h-[60vw] sm:h-[28vw]">
                <img
                  className="size-full object-cover rounded"
                  src={image.url}
                  alt={`Image ${image.id}`}
                />
              </div>
            )}
          </Carousel>
        }

        <div className="content-cont flex flex-col items-center gap-5 md:items-stretch">
          
          <div className="wrapper flex flex-col items-center justify-center gap-5 md:flex-row md:justify-between lg:me-[5vw]">
            <div className="location-cont flex gap-1 px-2">
              <CiLocationOn className="location-icon text-2xl text-primaryBlue md:text-xl"/>
              <span className="location-text text-center text-sm text-black opacity-90 md:text-left lg:text-base">
                Lorem ipsum dolor sit amet consectetur. Aliquet facilisis.
              </span>
            </div> 
            <Rating className="order-first md:order-none" rated={faker.number.int({ min: 1, max: 5 })}/>
          </div>
        
          <ul className="features-cont flex gap-[10vw] px-2 text-xs font-medium md:gap-5 lg:text-base">
            {features.map(feature =>
              <li key={feature.id} className="feature flex flex-col flex-wrap items-center gap-3">
                <div className="feature-icon">
                  {feature.icon}
                </div>
                <div className="feature-text mx-auto text-center text-primaryBlue font-semibold">
                  {feature.text}
                </div>
              </li>
            )}
          </ul>
          
          <p className="description px-[5vw] text-sm md:px-2">
            DSOM offers a comprehensive program for Graphic Designing that thoroughly covers the fundamental concepts. This program is designed to equip students with the essential skills and knowledge required in the field of graphic design.
          </p>

          <ul className="progress-bars-cont w-full flex flex-col flex-wrap items-center gap-1 px-[5vw] text-sm font-medium text-black opacity-90 sm:flex-row sm:gap-5 md:px-2 lg:text-lg">
            {progressBars.map(progressBar =>
              <li key={progressBar.id} className="progress-bar-item w-[inherit] sm:w-[48%] md:w-[45%]">
                <ProgressBar title={progressBar.title} progress={progressBar.progress} />
              </li>
            )}
          </ul>
      
          <ul className="button-group flex flex-wrap gap-[5vw] text-xs font-bold md:gap-5 lg:text-base">
            {buttons.map(button =>
              <li key={button.id} className="button-item">
                <button className="text-center border px-3 py-1 rounded-full border-primaryBlue text-primaryBlue sm:px-5 md:px-7 md:py-2 lg:px-8"
                >
                  {button.text}
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}