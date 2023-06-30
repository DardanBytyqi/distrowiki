import React from 'react';
import { useParams } from 'react-router-dom';
import datiDistro from '../dati/datiDistro';

function DistroPage() {
    const { distroId } = useParams()
    const index = distroId-1
    return (
      <div>
      
      <div className="grid md:grid-cols-2 grid-cols-1 md:gap-10 m-7  border border-blu text-white">
        <div className="m-auto">
          <img src={datiDistro[index].image} alt={datiDistro[index].name} />
        </div>

        <div className="flex flex-col gap-5 m-7">
          <div>
            <h1 className="md:text-5xl text-3xl text-blu font-black">
            {datiDistro[index].name}
            </h1>
          </div>

          <div className="flex gap-5">
            <div className="flex flex-col gap-1">
              <h2 className="text-blu">Creato da</h2>
              <div className="flex gap-2 items-center justify-center   bg-blu text-giallo py-2 px-4 rounded-full shadow-2xl">
                <img src={datiDistro[index].logo} alt="" className="w-5 h-5 rounded-full" />
                <h2>System 76</h2>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <h2 className="text-blu">Versione</h2>
              <div className="bg-blu text-giallo py-2 px-3 rounded-full shadow-2xl">
                <h2>21.04</h2>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:w-8/12">
            <div className="p-6 bg-blu text-white rounded-lg text-sm">
              Basata su: <a className="text-giallo"> Debian/Ubuntu</a> <br />
              Architetture: <a className="text-giallo"> aarch64, x86_64</a>{" "}
              <br />
              Desktop Envoirment: <a className="text-giallo">GNOME</a> <br />
              Official website:{" "}
              <a className="text-blue-600"> https://system76.com/pop</a>
            </div>
          </div>

          <button className="bg-blu rounded-full w-6/12 text-giallo py-4">
            Scopri di più
          </button>
        </div>
      </div>
    </div>
    )

}

export default DistroPage;
