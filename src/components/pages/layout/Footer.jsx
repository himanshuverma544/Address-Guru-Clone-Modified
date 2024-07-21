import { Link } from "react-router-dom";

import { PiInstagramLogoLight } from "react-icons/pi";
import { 
  AiFillFacebook,
  AiOutlineGithub
} from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa6";


export default function Footer() {

  return (
    <footer className="flex flex-col gap-5 border-t-2 px-5 py-10 mb-14 lg:mb-0">
      <div className="top flex flex-col gap-8 lg:flex-row">
        <div className="content flex flex-col gap-3 lg:w-[49%]">
          <div className="heading font-semibold text-sm 2xl:text-base">
            Footer Heading
          </div>
          <div className="text text-sm 2xl:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nullam vel fringilla nulla. Aliquam erat volutpat. Sed euismod, lorem in vestibulum volutpat, eros lacus facilisis velit, non vulputate sapien felis a magna.
          </div>
        </div>

        <div className="social-icons flex justify-evenly gap-10 text-2xl lg:grow lg:items-center">
          <Link href="#">
            <PiInstagramLogoLight/>
          </Link>
          <Link href="#">
            <AiFillFacebook/>
          </Link>
          <Link href="#">
            <FaLinkedin/>
          </Link>
          <Link href="#">
            <AiOutlineGithub/>
          </Link>
        </div>
      </div>

      <div className="bottom flex flex-col flex-wrap gap-5 lg:flex-row">
        <div className="text text-sm lg:w-[49%] 2xl:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Nullam vel fringilla nulla. Aliquam erat volutpat. Sed euismod, lorem in vestibulum volutpat, eros lacus facilisis velit, non vulputate sapien felis a magna.
        </div>
        <div className="buttons-group flex flex-wrap items-center justify-evenly gap-5 mx-auto text-sm lg:grow 2xl:text-base">
          <button className="border px-3 py-1 rounded">Button 1</button>
          <button className="border px-3 py-1 rounded">Button 2</button>
          <button className="border px-3 py-1 rounded">Button 3</button>
          <button className="border px-3 py-1 rounded">Button 4</button>
          <button className="border px-3 py-1 rounded">Button 5</button>
        </div>
      </div>
    </footer>
  );
}
