import React from "react";
import { FaLinux } from 'react-icons/fa'



const Cards = [
  {
    id: 1,
    name: "Ubuntu",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium corporis impedit omnis ratione",
    rating: 5.5,
    logo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Logo-ubuntu_cof-orange-hex.svg/1200px-Logo-ubuntu_cof-orange-hex.svg.png",
    base: "Debian",
  },
  {
    id: 2,
    name: "Manjaro",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium corporis impedit omnis ratione",
    rating: 4,
    logo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Manjaro-logo.svg/512px-Manjaro-logo.svg.png?20210414143234",
    base: "Arch",
  },
  {
    id: 3,
    name: "Parrot OS",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium corporis impedit omnis ratione",
    rating: 8,
    logo:
      "https://upload.wikimedia.org/wikipedia/commons/4/45/Parrot_Logo.png",
    base: "Debian",
  },
  {
    id: 4,
    name: "Mint",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium corporis impedit omnis ratione",
    rating: 6.5,
    logo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Linux_Mint_logo_without_wordmark.svg/1200px-Linux_Mint_logo_without_wordmark.svg.png",
    base: "Debian",
  },
];

function HomeCards() {
  return (
    <>
    <h1 id='testo'  className='flex items-center m-5 text-4xl font-black'><FaLinux />Distro</h1>
    <div className="grid md:grid-cols-2 grid-cols-1 place-items-center m-4">
      {Cards.map((Card) => {
        return (
          <div
            key={Card.id}
            id="card"
            className="flex flex-col p-4 bg-blu mt-6 rounded-lg mx-3 max-w-xl space-y-2.5"
          >
            <div className="flex justify-between items-center mx-3">
              <img src={Card.logo} alt="" className="h-10 w-10" />
              {Card.rating<5 ? <span className="text-xs px-5 py-1 text-center bg-red-400 text-black rounded-xl">{Card.rating}</span> : <span className="text-xs px-5 py-1 text-center bg-green-400 text-black rounded-xl">{Card.rating}</span>}
             
            </div>
            <h1 className="text-giallo text-xl font-bold mt-4 mx-4">{Card.name}</h1>
            <p className="text-sm mx-4 text-giallo mb-2">{Card.desc}</p>
          </div>
        );
      })}</div>
    </>
  );
}

export default HomeCards;
