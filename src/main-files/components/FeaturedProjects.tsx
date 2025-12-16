import tricon from "../../assets/tricon.jpg"
import { useState } from "react"

import {motion, AnimatePresence} from 'framer-motion'






const FeaturedProjects = () => {

    



    const [isOpen, setIsOpen] = useState(true);
        
    
    const handleClick = () => {
        setIsOpen(!isOpen);
        console.log(isOpen);
    }
    

    

    const dropDownVariants = {
        hidden: {
            y: '-110vh',


        },
        visible: {
            y: '0vh',
            transition: {
                duration: .8, 
                ease: 'easeInOut', 
            },

        },
        exit: {
            y: '-110vh',
            transition: {
                duration: 0.5, 
                ease: 'easeInOut', 
            },

        },
    }

    const boxVariants = {
        closed: {
            maxHeight: '20px',
            transition: {
                duration: .5, 
                ease: 'easeInOut', 
            },
        },
        open: {
            maxHeight: '5000px',
            
            transition: {
                duration: .5, 
                ease: 'easeInOut', 
            },
        },
        
    }





    return (
        <div className='bg-secondary pb-6 border-solid border-primary p-[.5rem] rounded-[1rem] border-[.1rem] flex flex-col mb-[2rem] h-auto shadow-[0px_0px_5px_1px_rgba(136,0,255,0.8)] overflow-hidden'>


            <motion.div className='bg-secondary   flex flex-col mb-[.8rem] h-auto '  variants={boxVariants}  animate= {isOpen ? 'open' : 'closed'}>
                    
                
                <div className=" w-full flex flex-row mb-4 xsm:text-[1.5rem] sml:text-[2rem]   ">
                    <div className=" w-full flex justify-center items-center ">
                        <div className="items-center justify-center text-[1.5rem]  ">
                            Featured Projects
                            <hr className="border-primary w-[12rem] xsm:hidden sml:w-[16.5rem] xsm:w-[12.5rem] mx-auto rounded-lg shadow-[0px_0px_5px_1px_rgba(136,0,255,0.8)]" />
                        </div>
                    
                        <button onClick={handleClick} className={` med:hidden absolute mt-5 sml:mt-1 sml:right-[6rem] right-[2.5rem] flex   bg-[#141414] ${isOpen ? 'rotate-90' : ''} transform transition-transform duration-300 ease-in-out rounded-md border  border-[#8800ff] p-[.3rem] mr-1 shadow-[0px_0px_5px_1px_rgba(136,0,255,0.8)]`}>
                            <svg className="w-5  " viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#121111" stroke-width="0">
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                <g id="SVGRepo_iconCarrier"> 
                                <path transform="translate(12 12) scale(2) translate(-12 -12)" fill-rule="evenodd" clip-rule="evenodd" d="M12.7071 14.7071C12.3166 15.0976 11.6834 15.0976 11.2929 14.7071L6.29289 9.70711C5.90237 9.31658 5.90237 8.68342 6.29289 8.29289C6.68342 7.90237 7.31658 7.90237 7.70711 8.29289L12 12.5858L16.2929 8.29289C16.6834 7.90237 17.3166 7.90237 17.7071 8.29289C18.0976 8.68342 18.0976 9.31658 17.7071 9.70711L12.7071 14.7071Z" fill="#ffffff"></path> </g>
                            </svg>
                        </button>
                    </div> 
                    
                    
                </div>

                
                

                <div className="grid grid-cols-1 gap-1 med:grid-cols-4 sml:grid-cols-2 mt-4">


                    <div className="flex flex-col justify-center">
                        <span className=" hidden med:flex justify-center">EverGreen Estates</span>
                        <div className=" h-[7rem]  med:h-full bg-tertiary rounded-lg flex m-3 flex-row items-center med:flex-col  border-[.1rem] border-solid border-primary shadow-[0px_0px_5px_1px_rgba(136,0,255,0.8)]">
                            
                            
                            <img alt="image of project#1" src={tricon} className="h-full w-[9rem] med:rounded-tr-lg med:rounded-bl-none med:mb-2 med:w-full block med:mr-0 mr-2 rounded-l-lg"/>
                            <div className="m-2 mt-0 rounded-lg w-full p-2">
                                <h1 className="flex justify-center w-full med:hidden font-semibold ">EverGreen Estates</h1>
                                <p className=" hidden xxs:flex sml:hidden  med:flex text-xs text-left">This is a recreation of my original project "EverGreen_Estates" in this version I introduces more modern design choices and technology like abstracting site data to a separate file and typescript implementation.</p>
                            </div>
                            
                        </div>
                    </div>




                    <div className="flex flex-col justify-center">
                        <span className=" hidden med:flex justify-center">Project Ttitle</span>
                        <div className=" h-[7rem]  med:h-full bg-tertiary rounded-lg flex m-3 flex-row items-center med:flex-col  border-[.1rem] border-solid border-primary shadow-[0px_0px_5px_1px_rgba(136,0,255,0.8)]">
                            
                            
                            <img alt="image of project#1" src={tricon} className="h-full w-[9rem] med:rounded-tr-lg med:rounded-bl-none med:mb-2 med:w-full block med:mr-0 mr-2 rounded-l-lg"/>
                            <div className="m-2 rounded-lg w-full p-2">
                                <h1 className="flex justify-center w-full med:hidden font-semibold ">Project Title</h1>
                                <p className=" hidden xxs:flex sml:hidden  med:flex text-xs text-left">This was a project about making a website for the here I used react node.js and tailwind along with typescript</p>
                            </div>
                            
                        </div>
                    </div>





                    <div className="flex flex-col justify-center">
                        <span className=" hidden med:flex justify-center">Project Ttitle</span>
                        <div className=" h-[7rem]  med:h-full bg-tertiary rounded-lg flex m-3 flex-row items-center med:flex-col  border-[.1rem] border-solid border-primary shadow-[0px_0px_5px_1px_rgba(136,0,255,0.8)]">
                            
                            
                            <img alt="image of project#1" src={tricon} className="h-full w-[9rem] med:rounded-tr-lg med:rounded-bl-none med:mb-2 med:w-full block med:mr-0 mr-2 rounded-l-lg"/>
                            <div className="m-2 rounded-lg w-full p-2">
                                <h1 className="flex justify-center w-full med:hidden font-semibold ">Project Title</h1>
                                <p className=" hidden xxs:flex sml:hidden  med:flex text-xs text-left">This was a project about making a website for the here I used react node.js and tailwind along with typescript</p>
                            </div>
                            
                        </div>
                    </div>

                    <div className="flex flex-col justify-center">
                        <span className=" hidden med:flex justify-center">Project Ttitle</span>
                        <div className=" h-[7rem]  med:h-full bg-tertiary rounded-lg flex m-3 flex-row items-center med:flex-col  border-[.1rem] border-solid border-primary shadow-[0px_0px_5px_1px_rgba(136,0,255,0.8)]">
                            
                            
                            <img alt="image of project#1" src={tricon} className="h-full w-[9rem] med:rounded-tr-lg med:rounded-bl-none med:mb-2 med:w-full block med:mr-0 mr-2 rounded-l-lg"/>
                            <div className="m-2 rounded-lg w-full p-2">
                                <h1 className="flex justify-center w-full med:hidden font-semibold ">Project Title</h1>
                                <p className=" hidden xxs:flex sml:hidden  med:flex text-xs text-left">This was a project about making a website for the here I used react node.js and tailwind along with typescript</p>
                            </div>
                            
                        </div>
                    </div>

                    


                </div>






                
  
                    
                
            </motion.div>
            

        </div>
    )
}

export default FeaturedProjects;