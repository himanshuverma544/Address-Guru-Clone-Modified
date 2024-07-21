import { faker } from '@faker-js/faker';

import List from './components/List';


const listings = [
  {
    name: "Eduquest Global LLP",
    business: "Coaching Institute",
    time: "1 week ago",
    image: faker.image.url()
  },
  {
    name: "Eduquest Global LLP",
    business: "Coaching Institute",
    time: "1 week ago",
    image: faker.image.url()
  },
  {
    name: "Eduquest Global LLP",
    business: "Coaching Institute",
    time: "1 week ago",
    image: faker.image.url()
  },
  {
    name: "Eduquest Global LLP",
    business: "Coaching Institute",
    time: "1 week ago",
    image: faker.image.url()
  },
  {
    name: "Eduquest Global LLP",
    business: "Coaching Institute",
    time: "1 week ago",
    image: faker.image.url()
  },
  {
    name: "Eduquest Global LLP",
    business: "Coaching Institute",
    time: "1 week ago",
    image: faker.image.url()
  },
  {
    name: "Eduquest Global LLP",
    business: "Coaching Institute",
    time: "1 week ago",
    image: faker.image.url()
  },
  {
    name: "Eduquest Global LLP",
    business: "Coaching Institute",
    time: "1 week ago",
    image: faker.image.url()
  },
  {
    name: "Eduquest Global LLP",
    business: "Coaching Institute",
    time: "1 week ago",
    image: faker.image.url()
  },
  {
    name: "Eduquest Global LLP",
    business: "Coaching Institute",
    time: "1 week ago",
    image: faker.image.url()
  },
  {
    name: "Eduquest Global LLP",
    business: "Coaching Institute",
    time: "1 week ago",
    image: faker.image.url()
  },
  {
    name: "Eduquest Global LLP",
    business: "Coaching Institute",
    time: "1 week ago",
    image: faker.image.url()
  },
  {
    name: "Eduquest Global LLP",
    business: "Coaching Institute",
    time: "1 week ago",
    image: faker.image.url()
  },
  {
    name: "Eduquest Global LLP",
    business: "Coaching Institute",
    time: "1 week ago",
    image: faker.image.url()
  },
  {
    name: "Eduquest Global LLP",
    business: "Coaching Institute",
    time: "1 week ago",
    image: faker.image.url()
  },
  {
    name: "Eduquest Global LLP",
    business: "Coaching Institute",
    time: "1 week ago",
    image: faker.image.url()
  },
  {
    name: "Eduquest Global LLP",
    business: "Coaching Institute",
    time: "1 week ago",
    image: faker.image.url()
  },
  {
    name: "Eduquest Global LLP",
    business: "Coaching Institute",
    time: "1 week ago",
    image: faker.image.url()
  },
  {
    name: "Eduquest Global LLP",
    business: "Coaching Institute",
    time: "1 week ago",
    image: faker.image.url()
  },
  {
    name: "Eduquest Global LLP",
    business: "Coaching Institute",
    time: "1 week ago",
    image: faker.image.url()
  },
  {
    name: "Eduquest Global LLP",
    business: "Coaching Institute",
    time: "1 week ago",
    image: faker.image.url()
  },
  {
    name: "Eduquest Global LLP",
    business: "Coaching Institute",
    time: "1 week ago",
    image: faker.image.url()
  },
  {
    name: "Eduquest Global LLP",
    business: "Coaching Institute",
    time: "1 week ago",
    image: faker.image.url()
  },
  {
    name: "Eduquest Global LLP",
    business: "Coaching Institute",
    time: "1 week ago",
    image: faker.image.url()
  }
];


export default function ListingsGrid() {

  return (
    <div className="listings-grid w-[90%] flex flex-col items-center justify-center gap-5 border-8 p-5 rounded-3xl border-secondaryLight bg-white">
      <h2 className="text-xl font-bold text-primaryBlue sm:text-2xl lg:text-3xl">
        Recent Listings
      </h2>

      <hr className="w-full"/>

      <div className="listings flex flex-wrap justify-around items-center gap-5">
        {listings.map((list, index) => 
          <List key={index} list={list}/>
        )}
      </div>
    </div>
  );
}
