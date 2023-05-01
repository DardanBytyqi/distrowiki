import logo from '../img/logo_distrowiki.png'
import { CiCircleList } from 'react-icons/ci'
import {useState} from "react";
import { FcLinux } from 'react-icons/fc'
import { SlClose } from 'react-icons/sl'

// ..

function Navbar() {
    const [nav,setNav] = useState(true)
    function handleNav(){
        setNav(!nav)
    }

    return(

        <div>
        <div className="border-b border-white flex justify-between items-center m-2 bg-giallo  text-white ">
            
            <img src={logo} alt={"logo"} className='h-16' />

            {nav ? <CiCircleList onClick={handleNav} size={30} className="md:hidden mr-2 cursor-pointer" /> : <SlClose onClick={handleNav} size={30} className='md:hidden mr-2 cursor-pointer' />}


            <div className="hidden md:flex md:gap-4 md:items-center md:justify-center">

                <ul className="flex gap-3 text-md text-w">
                    <li>Distro</li>
                    <li>About</li>
                </ul>
                <button className=" flex justify-center items-center gap-2 bg-blu rounded-full px-4 py-3">Distro Random<FcLinux size={20} /></button>
            </div>
        </div>

            <div className={!nav ? 'block transition duration-500 ease-in-out' : 'hidden transition duration-500 ease-in-out'}>
                <div className="md:hidden text-white bg-blu m-4 p-6 transition duration-500 ease-in-out">
                    <ul className="m-2 p-2 flex flex-col gap-4 text-md text-w">
                        <li className="p-2 border-b border-giallo"><a href="#">Distro</a></li>

                        <li className="p-2 border-b border-giallo"><a href="#">About</a></li>
                    </ul>
                    <button className="flex justify-center items-center m-2 bg-giallo rounded-full px-4 py-3">Distro Random<FcLinux size={20} /></button>
                </div>
            </div>
        </div>

    );
    
}

export default Navbar;