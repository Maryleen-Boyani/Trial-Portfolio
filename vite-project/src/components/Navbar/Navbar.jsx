import { useRef} from 'react';
import {FaBars, FaTimes} from 'react-icons/fa';

export const Navbar=()=>{
    const NavRef= useRef();// used to refer to the nav 

    const showNavBar =()=>{
        NavRef.current.classList.toggle("responsive_nav");
    }

    
    return(
        <div className="bg-green-200">
            <header className="flex h-14 justify-between p-2  ">
                <img className="w-8 h-8"src="../../../public/assets/images/logo.png" alt="Logo" />
                <nav ref={NavRef} className="justify-centre font-serif text-xl bg-pink-500">
                    <a href="/" className="text-black p-2 hover:text-purple-700 hover:underline offset-4">Home</a>
                    <a href="/services" className="text-black p-2 hover:text-purple-700 hover:underline offset-4 " >Services</a>
                    <a href="/skills" className="text-black p-2 hover:text-purple-700 hover:underline offset-4 ">Skills</a>
                    <a href="/contact" className="text-black p-2 hover:text-purple-700 hover:underline offset-4 ">Contact</a>
                    <button className="text-white bg-gradient-to-r from-purple-600 via-purple-900 to-purple-950 p-3 rounded-full ">
                        Hire me!
                    </button>
                    <button onClick={showNavBar} className='hidden '>
                        <FaTimes />
                    </button>
                    
                </nav>
                <button onClick={showNavBar} className='lg:hidden md:visible text-blue-900 ' >
                    <FaBars />
                </button>
           </header>
        </div>
           
    )
            
    
}
