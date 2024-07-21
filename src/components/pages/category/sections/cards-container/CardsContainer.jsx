import Card from "./components/card/Card";


export default function CardsContainer() {

  return (
    <section id="cards-container flex flex-col px-5 py-5">
      {Array.from({ length: 10 }).map((_, index) =>
        <Card key={index}/>
      )}
    </section>
  );
}
