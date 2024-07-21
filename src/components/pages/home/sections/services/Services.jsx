import ServicesGrid from './components/ServicesGrid';


export default function Services() {

  return (
    <section id="services" className="flex flex-col items-center justify-center gap-5 px-5 py-10 bg-tertiaryLight">
      <h2 className="text-center text-xl font-bold text-primaryBlue sm:text-2xl lg:text-3xl">
        Search, Just One Call Away.
      </h2>
      <ServicesGrid/>  
    </section>
  );
}
