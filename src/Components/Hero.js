import PopOS from '../img/Pop_OS-21.04-cosmic-1.webp';
import s76Logo from '../img/System76-Logo-removebg-preview.png'
import { AiOutlineFire } from 'react-icons/ai'

function Hero() {
    return(
        <div>
            <h1 className='flex items-center m-7 text-5xl font-black'><AiOutlineFire /> AAAA</h1>
        <div className="grid md:grid-cols-2 grid-cols-1 md:gap-10 m-7  border border-blu text-white">
            <div className='m-auto'>
                <img src={PopOS} alt="PopOS" />
            </div>

            <div className='flex flex-col gap-5 m-7'>
                <div>
                    <h1 className='md:text-5xl text-4xl text-blu font-black'>Pop!_OS</h1>
                    
                </div>
                
                <div className='flex gap-5'>
                     <div className='flex flex-col gap-1'>
                        <h2 className='text-blu'>Creato da</h2>
                        <div className='flex gap-2 items-center justify-center   bg-blu text-giallo py-2 px-4 rounded-full shadow-2xl'>
                            <img src={s76Logo} alt="" className='w-5 h-5 rounded-full' />
                            <h2>System 76</h2>
                            </div>
                        
                        </div>
                    <div className='flex flex-col gap-1'>
                    <h2 className='text-blu'>Versione</h2>
                    <div className='bg-blu text-giallo py-2 px-3 rounded-full shadow-2xl'><h2>21.04</h2></div>
                    
                    </div>
                </div>

                
      <div className="flex flex-col lg:w-8/12">
        <div className="p-6 bg-blu text-giallo rounded-lg">
          Basata su: Debian/Ubuntu <br />
          Architetture: aarch64, x86_64 <br />
          Desktop Envoirment: GNOME <br />
          Official website: <a  className="text-blue-600" > https://system76.com/pop</a>
        </div>
        
      </div>


      <button className="bg-blu rounded-full w-6/12 text-giallo py-4">Scopri di più</button>

    </div>

    
  </div>

        </div>

       
    );
}

export default Hero;