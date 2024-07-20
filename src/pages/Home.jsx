import Services from "../components/pages/home/sections/services/Services";
import Listings from "../components/pages/home/sections/listings/Listings";
import Testimonials from "../components/pages/home/sections/testimonials/Testimonials";


export default function Home() {

  return (
    <div className="homepage">
      <Services/>
      <Listings/>
      <Testimonials/>
    </div>
  );
}
