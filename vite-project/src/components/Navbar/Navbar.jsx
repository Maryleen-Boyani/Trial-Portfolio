import { useState} from 'react';
import {FaBars, FaTimes} from 'react-icons/fa';

export function Navbar(){
    
        const [isOpen, setIsOpen]= useState(false);

        const showNavBar=()=>{
            setIsOpen(!isOpen);
        }
    
    
    return(
        <div className="">
            <header className="flex h-14 justify-between p-2 ">
                <img className="w-8 h-8"src="../../../public/assets/images/logo.png" alt="Logo" />
                <nav className="justify-end font-serif text-2xl">
                    <a href="#" className="text-black p-2 ">Home</a>
                    <a href="/about" className="text-black p-2">About me</a>
                    <a href="/projects" className="text-black p-2" >Projects</a>
    
                    <button onClick={showNavBar} className="p-2">
                        {isOpen? <FaTimes />: <FaBars />}
                    </button>
                
                    
                    
                </nav>
           </header>
        </div>
           
    )
            
    
}
