import { useRef} from 'react';
import {FaBars, FaTimes} from 'react-icons/fa';

export const Navbar=()=>{
    const NavRef= useRef();// used to refer to the nav 

    const showNavBar =()=>{
        NavRef.current.classList.toggle("responsive_nav");
    }

    
    return(
        <div className="">
            <header className="flex h-14 justify-between p-2 ">
                <img className="w-8 h-8"src="../../../public/assets/images/logo.png" alt="Logo" />
                <nav ref={NavRef} className="justify-end font-serif text-2xl">
                    <a href="/about" className="text-black p-2 hover:text-blue-700 hover:underline offset-4">About me</a>
                    <a href="/projects" className="text-black p-2 hover:text-blue-700 hover:underline offset-4 " >Projects</a>
                    <a href="/" className="text-black p-2 hover:text-blue-700 hover:underline offset-4 ">Home</a>
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
