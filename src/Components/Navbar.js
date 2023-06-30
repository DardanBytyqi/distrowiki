import logo from '../img/logo_distrowiki.png'
import { CiCircleList } from 'react-icons/ci'
import {useState} from "react";
import { FcLinux } from 'react-icons/fc'
import { SlClose } from 'react-icons/sl'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import datiDistro from '../dati/datiDistro';


// ..

function Navbar() {
    const navigate = useNavigate()
    const [nav,setNav] = useState(true)
    function handleNav(){
        setNav(!nav)
    }

function handleRandomButton(){
    const randomId = Math.floor(Math.random() * datiDistro.length)
    const randomDistroId = datiDistro[randomId].id
    navigate(`/Distro/${randomDistroId}`)

}

    return(

        <div>
        <div className="border-b border-white flex justify-between items-center m-2 bg-giallo  text-white ">
            
        <Link to="/"><img src={logo} alt={"logo"} className='h-16' /></Link>

            {nav ? <CiCircleList onClick={handleNav} size={30} className="md:hidden mr-2 cursor-pointer" /> : <SlClose onClick={handleNav} size={30} className='md:hidden mr-2 cursor-pointer' />}


            <div className="hidden md:flex md:gap-4 md:items-center md:justify-center">

                <ul className="flex gap-3 text-md text-w">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/Distro">Distro</Link></li>
                    <li>About</li>
                </ul>
                <button onClick={handleRandomButton} className=" flex justify-center items-center gap-2 bg-blu rounded-full px-4 py-3">Distro Random<FcLinux size={20} /></button>
            </div>
        </div>

            <div className={!nav ? 'block transition duration-500 ease-in-out' : 'hidden transition duration-500 ease-in-out'}>
                <div className="md:hidden text-white bg-blu m-4 p-6 transition duration-500 ease-in-out">
                    <ul className="m-2 p-2 flex flex-col gap-4 text-md text-w">
                        <li className="p-2 border-b border-giallo"><Link to="/">Home</Link></li>
                        <li className="p-2 border-b border-giallo"><Link to="/Distro">Distro</Link></li>
                        <li className="p-2 border-b border-giallo">About</li>
                    </ul>
                    <button onClick={handleRandomButton} className="flex justify-center items-center m-2 bg-giallo rounded-full px-4 py-3">Distro Random<FcLinux size={20} /></button>
                </div>
            </div>
        </div>

    );
    
}

export default Navbar;