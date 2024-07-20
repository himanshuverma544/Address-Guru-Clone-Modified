import Card from "./components/card/Card";


export default function CardsContainer() {

  return (
    <section id="cards-container flex flex-col">
      {Array.from({ length: 10 }).map((_, index) =>
        <Card key={index}/>
      )}
    </section>
  );
}
