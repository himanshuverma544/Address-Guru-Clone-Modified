import React from 'react';

import Carousel from 'react-multi-carousel';
    
import Avatar from '../../../../utility/Avatar';

import useWindowSize from "../../../../../../utilities/hooks/useWindowSize";

import { getCarouselResponsive } from '../../../../../../utilities/functions';

import { breakpoints } from '../../../../../../utilities/constants';

import Client1 from "../../../../../assets/general/clients/client1.jpg";
import Client2 from "../../../../../assets/general/clients/client2.png";
import Client3 from "../../../../../assets/general/clients/client3.jpg";
import Client4 from "../../../../../assets/general/clients/client4.png";
import Client5 from "../../../../../assets/general/clients/client5.jpeg";
import Client6 from "../../../../../assets/general/clients/client6.jpeg";
import Client7 from "../../../../../assets/general/clients/client7.jpg";

import ArrowActive from '../../../../../assets/utility/arrows/arrow-active.svg?react';
import ArrowDisabled from '../../../../../assets/utility/arrows/arrow-disabled.svg?react';

const data = [
  {
    id: 1,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel fringilla nulla. Aliquam erat volutpat. Sed euismod, lorem in vestibulum volutpat, eros lacus facilisis velit, non vulputate sapien felis a magna.",
    avatar: {
      name: "Virendra Gupta",
      location: "Jaipur, Rajasthan",
      profilePic: Client1
    }
  },
  {
    id: 2,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel fringilla nulla. Aliquam erat volutpat. Sed euismod, lorem in vestibulum volutpat, eros lacus facilisis velit, non vulputate sapien felis a magna.",
    avatar: {
      name: "Shivani Sharma",
      location: "Gurugram, Haryana",
      profilePic: Client2
    }
  },
  {
    id: 3,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel fringilla nulla. Aliquam erat volutpat. Sed euismod, lorem in vestibulum volutpat, eros lacus facilisis velit, non vulputate sapien felis a magna.",
    avatar: {
      name: "Vikas Garg",
      location: "Delhi, NCR",
      profilePic: Client3
    }
  },
  {
    id: 4,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel fringilla nulla. Aliquam erat volutpat. Sed euismod, lorem in vestibulum volutpat, eros lacus facilisis velit, non vulputate sapien felis a magna.",
    avatar: {
      name: "Himanshu Verma",
      location: "Dehradun, Uttarakhand",
      profilePic: Client4
    }
  },
  {
    id: 5,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel fringilla nulla. Aliquam erat volutpat. Sed euismod, lorem in vestibulum volutpat, eros lacus facilisis velit, non vulputate sapien felis a magna.",
    avatar: {
      name: "Vaibhav Kumar",
      location: "Nainital, Uttarakhand",
      profilePic: Client5
    }
  },
  {
    id: 6,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel fringilla nulla. Aliquam erat volutpat. Sed euismod, lorem in vestibulum volutpat, eros lacus facilisis velit, non vulputate sapien felis a magna.",
    avatar: {
      name: "Nitin Kashyap",
      location: "Haldwani, Uttarakhand",
      profilePic: Client6
    }
  },
  {
    id: 7,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel fringilla nulla. Aliquam erat volutpat. Sed euismod, lorem in vestibulum volutpat, eros lacus facilisis velit, non vulputate sapien felis a magna.",
    avatar: {
      name: "John Smith",
      location: "New York, United States",
      profilePic: Client7
    }
  }
];

const responsive = getCarouselResponsive();

const { md } = breakpoints;

export default function Testimonials() {

  const screenWidth = useWindowSize();

  const carouselRef = React.useRef(null);


  const [highlightTestimonial, setHighlightTestimonial] = React.useState(1);


  const [isDisabled, setIsDisabled] = React.useState({
    leftArrowBtn: true,
    rightArrowBtn: false,
  });

  const leftArrowBtnRef = React.useRef(null);
  const rightArrowBtnRef = React.useRef(null);
    
    
  const highlightMiddleTestimonial = React.useCallback(setHighlightTestimonial => {

    const {
      listRef: { current: { childNodes: testimonialsNode } },
      state: { totalItems }
    } = carouselRef.current;

    const activeClassName = "react-multi-carousel-item--active";
    let activeClassNameCount = 0;
    let middleTestimonialId;

    for (const testimonialNode of testimonialsNode) {

      if (testimonialNode.classList.contains(activeClassName))
        activeClassNameCount++;

      if (activeClassNameCount === (2 + 1)) { // adding 1 because 3rd becomes 2nd
        middleTestimonialId = testimonialNode.firstElementChild.getAttribute('data-id');
        break;
      }
    }

    setHighlightTestimonial(
      middleTestimonialId == (totalItems - 1) ? 1 : middleTestimonialId
    );
  }, []);


  const disableArrowBtn = React.useCallback(setIsDisabled => {

    const { 
      listRef: {
        current : { 
          nextElementSibling  : { 
            firstElementChild: firstDot,
            lastElementChild: lastDot
          } 
        }
      } 
    } = carouselRef.current;

    const activeClassName = 'react-multi-carousel-dot--active';

    setIsDisabled(
      firstDot.classList.contains(activeClassName)
        ? { leftArrowBtn: true, rightArrowBtn: false }
        : (
            lastDot.classList.contains(activeClassName)
              ? prev => ({ ...prev, rightArrowBtn: true })
              : prev => ({ ...prev, leftArrowBtn: false })
          )
    );    
  }, []);
    
    
  return (
    <section className="testimonials flex flex-col items-center gap-5 px-5 py-10 bg-tertiaryLight">
      <h2 className="text-xl font-bold text-primaryBlue sm:text-2xl lg:text-3xl">
        Testimonials
      </h2>

      <div className="carousel-cont-&-arrows-wrapper">
        <Carousel
          ref= {carouselRef}
          responsive={responsive}
          showDots
          rewind
          rewindWithAnimation
          autoPlay
          keyBoardControl
          removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
          containerClass="w-[89.3vw] pb-10"
          sliderClass="flex items-center lg:h-[35vw] lg:max-h-[350px] xl:max-h-[300px]"
          itemClass="fix-drag select-none sm:px-5"
          beforeChange={
            (..._) => screenWidth > md && highlightMiddleTestimonial(setHighlightTestimonial)
          }
          afterChange={(..._) => {
            screenWidth >= md && disableArrowBtn(setIsDisabled)
            
          }}           
        >
          {data.map(item => (
            <div 
              key={item.id} 
              className={`
                flex flex-col justify-center items-center gap-5
                p-5 border-8 rounded-lg
                bg-white border-secondaryLight
                transition-all duration-500 ease-in
                ${highlightTestimonial == (item.id - 1) ? "lg:py-10 xl:py-12" : ""}
              `}
              data-id={item.id - 1}
            >
              <p className='text-center text-xs md:text-sm'>
                {item.text}
              </p>
              <div className="avatar-details flex gap-5">
                <Avatar
                  src={item.avatar.profilePic}
                  alt={`${item.avatar.name} Avatar`}
                />
                <div className="info text-xs md:text-sm">
                  <div className='name'>{item.avatar.name}</div>
                  <div className='location'>{item.avatar.location}</div>
                </div>
              </div>
            </div>
          ))}
        </Carousel>

        <div className="carousel-arrows flex justify-between lg:hidden">
          <button
            ref={leftArrowBtnRef}
            className="left-arrow-btn border me-5 ms-5 rounded-[50%] sm:ms-7 md:ms-9"
            disabled={isDisabled.leftArrowBtn}
            onClick={() => carouselRef.current.previous()}
          >
            {!isDisabled.leftArrowBtn ?
              <ArrowActive className="left-arrow-active rotate-180 fill-primaryBlue"/> :
              <ArrowDisabled className="left-arrow-disabled fill-primaryBlue"/>
            }
          </button>
          <button
            ref={rightArrowBtnRef}
            className="right-arrow-btn border me-5 rounded-[50%] sm:me-7 md:me-9"
            disabled={isDisabled.rightArrowBtn}
            onClick={() => carouselRef.current.next()}
          >
            {!isDisabled.rightArrowBtn ?
              <ArrowActive className="right-arrow-active fill-primaryBlue"/> :
              <ArrowDisabled className="right-arrow-disabled rotate-180 fill-primaryBlue"/>
            }
          </button>
        </div>
      </div>
    </section>
  );
}

