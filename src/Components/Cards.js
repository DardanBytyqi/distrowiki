import Navbar from "./Navbar";
import { useState } from "react";
import distro from "../dati/datiDistro";
import { FaLinux } from "react-icons/fa";
import { Link } from 'react-router-dom'

function Cards() {
  const [cerca, setCerca] = useState("");
  const [filter, setFilter] = useState("Tutte");

  const cardFiltrate = distro.filter((distro) =>
    distro.name.toLowerCase().includes(cerca.toLowerCase())
  );

  function onchange(p) {
    setFilter(p);
  }
  return (
    <>
      <Navbar />
      <div className="">
        <h1 id="testo" className="flex items-center m-5 text-5xl font-black">
          <FaLinux />
          Distro
        </h1>

        <div className="m-7">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="grey"
            className="z-20  absolute w-6 h-6 mt-2.5 ml-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 15.75l-2.489-2.489m0 0a3.375 3.375 0 10-4.773-4.773 3.375 3.375 0 004.774 4.774zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>

          <input
            type="search"
            placeholder="Cerca distro"
            value={cerca}
            onChange={(e) => setCerca(e.target.value)}
            className="border-2 border-blu  bg-slate-100 outline-none relative text-slate-500 py-2 px-10 rounded-full"
          ></input>
        </div>

        <div className="flex gap-3 m-7 text-sm lg:text-md">
          <button
            onClick={(e) => onchange(e.target.value)}
            value="Tutte"
            className="bg-blu text-giallo px-5 py-1 rounded-full"
          >
            Tutte
          </button>
          <button
            onClick={(e) => onchange(e.target.value)}
            value="Debian"
            className="bg-blu text-giallo px-5 py-2 rounded-full"
          >
            Debian based
          </button>
          <button
            onClick={(e) => onchange(e.target.value)}
            value="Arch"
            className="bg-blu text-giallo px-5 py-2 rounded-full"
          >
            Arch based
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5 m-7">
          {cardFiltrate.map((distro) => {
            if (filter === "Tutte") {
              return (
                <div key={distro.id} className=" bg-blu text-giallo rounded-lg">
                  <img
                    className="w-full h-56 object-cover p-3 rounded-lg"
                    src={distro.image}
                    alt="distro image"
                  />

                  {distro.rating > 5.5 ? (
                    <span className="m-4 text-xs px-5 py-1 text-center bg-green-300 text-blu rounded-xl ">
                      {distro.rating}/10
                    </span>
                  ) : (
                    <span className="m-4 text-xs px-5 py-1 text-center bg-red-400 text-blu rounded-xl ">
                      {distro.rating}/10
                    </span>
                  )}

                  <span className="text-xs px-5 py-1 text-center bg-giallo text-blu rounded-xl ">
                    {distro.base} based
                  </span>
                  <div className="m-4 flex flex-col gap-3">
                    <h1 className="text-2xl">{distro.name}</h1>
                    <p>{distro.desc}</p>
                      <Link to={`/Distro/${distro.id}`} className="text-center m-4 border-giallo border hover:bg-giallo hover:text-blu rounded-full px-4 py-3">
                        Scopri
                      </Link>
                    
                  </div>
                </div>
              );
            } else {
              if (filter === distro.base) {
                return (
                  <div className="bg-blu text-giallo rounded-lg">
                    <img
                      className="w-full h-56 object-cover p-3 rounded-lg"
                      src={distro.image}
                      alt="distro image"
                    />

                    {distro.rating > 5.5 ? (
                      <span className="m-4 text-xs px-5 py-1 text-center bg-green-300 text-blu rounded-xl ">
                        {distro.rating}/10
                      </span>
                    ) : (
                      <span className="m-4 text-xs px-5 py-1 text-center bg-red-400 text-blu rounded-xl ">
                        {distro.rating}/10
                      </span>
                    )}

                    <span className="text-xs px-5 py-1 text-center bg-giallo text-blu rounded-xl ">
                      {distro.base} based
                    </span>
                    <div className="m-4 flex flex-col gap-3">
                      <h1 className="text-2xl">{distro.name}</h1>
                      <p>{distro.desc}</p>
                      <Link to={`/Distro/${distro.id}`} className="text-center m-4 border-giallo border hover:bg-giallo hover:text-blu rounded-full px-4 py-3">
                        Scopri
                      </Link>
                    </div>
                  </div>
                );
              }
            }
          })}
        </div>
      </div>
    </>
  );
}

export default Cards;
