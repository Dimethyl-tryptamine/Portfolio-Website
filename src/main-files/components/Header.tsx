
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import {motion, AnimatePresence} from 'framer-motion'
import menuImg from '../../assets/menu.png'; 
import { useLocation }from 'react-router-dom';





const Header: React.FC<{}> = () => { 

const [isVisible, setIsVisible] = useState(false);  const location = useLocation();
const currentPath = location.pathname;


    
const Menu = () => {
        setIsVisible(!isVisible);
    }

    

useEffect(() => {
    if (isVisible) {
        document.body.style.overflow = "hidden";
    } else {
        document.body.style.overflow = "auto";
    }
   
    }, [isVisible]);


const menuVariants = {

    hidden:{
        x: '-100vw',
        borderRadius: 100,
    },
    visible:{
        
        x: '0vw',
        borderRadius: 0,
        transition: { duration: .5 },
    },
    exit: {
        x: '-100vw', 
        transition: { duration: .5 },
        borderRadius: 100,
    },
    

}

return (
    <div className="absolute flex  z-[1] w-full">
        <nav className="w-full min-h-[1.5rem]">
            
            <ul className="  hidden sml:flex relative flex-row space-x-[1rem] mx-[.5rem] text-[2rem]">
                <li>
                    <Link to="/" className="font-mali text-[1.5rem]">Home</Link>
                    <hr className={`w-[4rem] h-[0rem]  border-solid  border-primary ${currentPath === "/" ? "border-b-4 border-purple-600" : ""}`}></hr>
                </li>
                <li>
                    <Link to="/skills" className="font-mali text-[1.5rem]">Skills</Link>
                    <hr className={`w-[4rem]  border-primary ${currentPath === "/skills" ? "border-b-4 border-purple-600" : ""}`}></hr>
                </li>
                <li>
                    <Link to="/projects" className="font-mali text-[1.5rem]">Projects</Link>
                    <hr className={`w-[6.5rem]  border-primary ${currentPath === "/projects" ? "border-b-4 border-purple-600" : ""}`}></hr>
                </li>
                <li>
                    <Link to="/contacts" className="font-mali text-[1.5rem]">Contacts</Link>
                    <hr className={`w-[7rem]  border-primary ${currentPath === "/contacts" ? "border-b-4 border-purple-600" : ""}`}></hr>
                </li>
                <li>
                    <Link to="/blog" className="font-mali text-[1.5rem]">Blog</Link>
                    <hr className={`w-[3.5rem]  border-primary ${currentPath === "/blog" ? "border-b-4 border-purple-600" : ""}`}></hr>
                </li>
            </ul>

            <div className='float-right'>
                <button 
                    className="flex sml:hidden border-primary relative my-[.3rem] mx-[.5rem] z-10 border-[.1rem] shadow-[0px_0px_5px_1px_rgba(136,0,255,0.8)] bg-secondary border-solid w-[2rem] h-[2rem] justify-center rounded-[27%] items-center"
                    onClick={Menu}
                    >

                    <img src={menuImg} alt="Menu" className="w-[1.3rem] h-[1.3rem] justify-center" />

                </button>
            </div>
        </nav>




        <AnimatePresence>
            {isVisible && 
            
            
            
            <motion.div className=' top-0 left-0 w-[100vw] h-[100vh] fixed z-[1] bg-gray-800/95'
            variants={menuVariants}
            initial='hidden'
            animate='visible'
            exit='exit'>


                
                <nav className='w-[100vw]    flex flex-col '>
                    <div className=' text-white'>
                        <ul className="space-y-3 left-0 relative text-[2rem] font-mali">
                            <li>
                                <Link to="/" className={currentPath === '/' ? 'text-white' : 'text-[#141414]'}>
                                    Home
                                </Link>
                                <hr className="w-[5.5rem] h-[20px]" />
                            </li>

                            <li>
                                <Link to="/skills" className={currentPath === '/skills' ? 'text-white' : 'text-[#141414]'}>
                                    Skills
                                </Link>
                                <hr className="w-[5rem] h-[20px]" />
                            </li>

                            <li>
                                <Link to="/projects" className={currentPath === '/projects' ? 'text-white' : 'text-[#141414]'}>
                                    Projects
                                </Link>
                                <hr className="w-[8.5rem] h-[20px]" />
                            </li>

                            <li>
                                <Link to="/contacts" className={currentPath === '/contacts' ? 'text-white' : 'text-[#141414]'}>
                                    Contacts
                                </Link>
                                <hr className="w-[9rem] h-[20px]" />
                            </li>

                            <li>
                                <Link to="/blog" className={currentPath === '/blog' ? 'text-white' : 'text-[#141414]'}>
                                    Blog
                                </Link>
                                <hr className="w-[4.3rem] h-[20px]" />
                            </li>
                        </ul>
                    </div>
                </nav>
                
            </motion.div>
            }
        </AnimatePresence>
    </div>
    );
}

export default Header;
