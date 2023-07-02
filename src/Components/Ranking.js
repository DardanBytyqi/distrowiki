import React from "react";
import datiDistro from "../dati/datiDistro";

function Ranking() {
  const topDistros = datiDistro
    .slice()
    .sort((a, b) => b.punti - a.punti)
    .slice(0, 5);

  return (
    <div
      className="hidden lg:block bg-giallo rounded-lg m-6"
      id="classifica_distro"
    >
      <h1 className="bg-blu p-2 w-10/12 rounded-lg mt-2 mx-auto text-center text-giallo">
        Classifica
      </h1>
      <ul className="text-giallo mt-3 bg-blu m-3 rounded-lg p-2 space-y-3">
        {topDistros.map((distro, index) => (
          <li
            className="flex gap-14 justify-between items-center"
            key={distro.id}
          >
            {distro.name}
            <span className="text-xs p-0.5 bg-giallo text-blu rounded-full w-10 text-center">
              {distro.punti}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Ranking;
