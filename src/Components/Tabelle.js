import datiTabella1 from "../dati/datiTabella1";
import datiTabella2 from "../dati/datiTabella2";
import { FiPackage } from "react-icons/fi";
function Tabelle() {
  return (
    <div className="mt-14">
      <h1 className="flex items-center ml-7 text-4xl font-black">
        <FiPackage />
        Ultime release
      </h1>
      {/*tabella1*/}
      <div className="mt-3 grid grid-cols-1 md:grid-cols-2">
        <div className=" lg:grid-cols-3  gap-5 m-7">
          <div className="bg-giallo text-giallo m-4 rounded-lg">
            <h1 className="bg-blu p-2 w-6/12 rounded-lg mt-2 mx-auto text-center text-giallo">
              Ultime versioni
            </h1>
            <ul className="mt-3 bg-blu m-3 rounded-lg p-2 space-y-3">
              {datiTabella1.map((tabella1) => {
                return (
                  <li
                    key={tabella1.id}
                    className="lista p-1 flex justify-between items-center border-b border-giallo"
                  >
                    {tabella1.name}{" "}
                    <span className="text-xs p-0.5 bg-giallo text-blu rounded-full w-10 text-center">
                      {tabella1.rating}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/*tabella2*/}
        <div className="md:grid-cols-2 lg:grid-cols-3  gap-5 m-7">
          <div className="bg-giallo text-giallo m-4 rounded-lg">
            <h1 className="bg-blu p-2 w-7/12 rounded-lg mt-2 mx-auto text-center text-giallo">
              Desktop Environment
            </h1>
            <ul className="mt-3 bg-blu m-3 rounded-lg p-2 space-y-3">
              {datiTabella2.map((tabella2) => {
                return (
                  <li
                    key={tabella2.id}
                    className="lista p-1 flex justify-between items-center border-b border-giallo"
                  >
                    {tabella2.name}{" "}
                    <span className="text-xs p-0.5 bg-giallo text-blu rounded-full w-10 text-center">
                      {tabella2.rating}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tabelle;
