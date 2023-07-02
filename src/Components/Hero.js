import datiDistro from "../dati/datiDistro";

import { AiOutlineFire } from "react-icons/ai";
import Ranking from "./Ranking";

function Hero() {
  const distro = datiDistro.filter((d) => d.hero === true);
  return (
    <>
      <h1 className="flex items-center m-7 text-4xl font-black">
        <AiOutlineFire /> Hot{" "}
      </h1>
      <div className="flex">
        {distro.map((distro) => (
          <div key={distro.id}>
            <div className="grid md:grid-cols-2 grid-cols-1 md:gap-10 m-7  border border-blu text-white">
              <div className="m-auto">
                <img src={distro.image} alt="PopOS" />
              </div>

              <div className="flex flex-col gap-5 m-7">
                <div>
                  <h1 className="md:text-5xl text-3xl text-blu font-black">
                    {distro.name}
                  </h1>
                </div>

                <div className="flex gap-5">
                  <div className="flex flex-col gap-1">
                    <h2 className="text-blu">Creato da</h2>
                    <div className="flex gap-2 items-center justify-center   bg-blu text-giallo py-2 px-4 rounded-full shadow-2xl">
                      <img
                        src={distro.logo}
                        alt=""
                        className="w-5 h-5 rounded-full"
                      />
                      <h2>System 76</h2>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h2 className="text-blu">Versione</h2>
                    <div className="text-center bg-blu text-giallo py-2 px-3 rounded-full shadow-2xl">
                      <h2>{distro.version}</h2>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col  xl:w-11/12">
                  <div className="p-6 bg-blu text-white rounded-lg text-sm">
                    Basata su: <a className="text-giallo">{distro.based}</a>{" "}
                    <br />
                    Architetture:{" "}
                    <a className="text-giallo"> aarch64, x86_64</a> <br />
                    Desktop Envoirment:{" "}
                    <a className="text-giallo">GNOME, KDE, xfce</a> <br />
                    Official website:{" "}
                    <a
                      target="_blank"
                      href={distro.website}
                      className="text-blue-600"
                    >
                      {" "}
                      {distro.website}
                    </a>
                  </div>
                </div>

                <button className="bg-blu rounded-full w-6/12 text-giallo py-4">
                  Scopri di più
                </button>
              </div>
            </div>
          </div>
        ))}

        <div className="">
          <Ranking />
        </div>
      </div>
    </>
  );
}

export default Hero;
