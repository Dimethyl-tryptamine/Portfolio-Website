import tricon from "../../assets/tricon.jpg"
import { useState } from "react"
import { RiArrowDropDownLine } from "react-icons/ri";
import {motion, AnimatePresence} from 'framer-motion'
import { useWindowWidth } from "./util/CustomHooks";
import Dropdown from "./util/Dropdown";




const FeaturedProjects = () => {

    const [isOpen, setIsOpen] = useState(true);

    
    const toggleDropdown = () => {
        setIsOpen(!isOpen)
        console.log(isOpen)
        
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
        <div className='bg-secondary  border-solid border-primary p-[.5rem] rounded-[1rem] border-[.1rem] flex flex-col mb-[2rem] h-auto shadow-[0px_0px_5px_1px_rgba(136,0,255,0.8)] overflow-hidden'>


            <motion.div className='bg-secondary   flex flex-col mb-[.8rem] h-auto '  variants={boxVariants}  animate= {isOpen ? 'open' : 'closed'}>
                    
                
                <div className="flex flex-col xsm:text-[1.5rem] sml:text-[2rem]  text-center flex-grow">
                    Featured Projects
                    <hr className="border-primary w-[8.2rem] xsm:hidden sml:w-[16.5rem] xsm:w-[12.5rem] mx-auto rounded-lg shadow-[0px_0px_5px_1px_rgba(136,0,255,0.8)]" />
                </div>

                <div className="w-full flex justify-end">
                    
                    <Dropdown/>
                    
                </div>
                

                <div className="grid grid-cols-1 gap-1 med:grid-cols-4 sml:grid-cols-2 mt-4">


                    <div>
                        <span>Project Ttitle</span>
                        <div className=" h-[7rem]  med:h-full bg-tertiary rounded-lg flex m-3 flex-row items-center med:flex-col  border-[.1rem] border-solid border-primary shadow-[0px_0px_5px_1px_rgba(136,0,255,0.8)]">
                            
                            
                            <img alt="image of project#1" src={tricon} className="h-full w-[9rem] med:rounded-tr-lg med:rounded-bl-none med:mb-2 med:w-full block med:mr-0 mr-2 rounded-l-lg"/>
                            <div className="m-2 rounded-lg w-full ">
                                <h1 className="flex justify-center w-full med:hidden font-semibold ">Project Title</h1>
                                <p className=" hidden xxs:flex sml:hidden  med:flex text-xs text-left">This was a project about making a website for the here I used react node.js and tailwind along with typescript</p>
                            </div>
                            
                        </div>
                    </div>

                     <div>
                        <span>Project Ttitle</span>
                        <div className=" h-[7rem]  med:h-full bg-tertiary rounded-lg flex m-3 flex-row items-center med:flex-col  border-[.1rem] border-solid border-primary shadow-[0px_0px_5px_1px_rgba(136,0,255,0.8)]">
                            
                            
                            <img alt="image of project#1" src={tricon} className="h-full w-[9rem] med:rounded-tr-lg med:rounded-bl-none med:mb-2 med:w-full block med:mr-0 mr-2 rounded-l-lg"/>
                            <div className="m-2 rounded-lg w-full ">
                                <h1 className="flex justify-center w-full med:hidden font-semibold ">Project Title</h1>
                                <p className=" hidden xxs:flex sml:hidden  med:flex text-xs text-left">This was a project about making a website for the here I used react node.js and tailwind along with typescript</p>
                            </div>
                            
                        </div>
                    </div>

                     <div>
                        <span>Project Ttitle</span>
                        <div className=" h-[7rem]  med:h-full bg-tertiary rounded-lg flex m-3 flex-row items-center med:flex-col  border-[.1rem] border-solid border-primary shadow-[0px_0px_5px_1px_rgba(136,0,255,0.8)]">
                            
                            
                            <img alt="image of project#1" src={tricon} className="h-full w-[9rem] med:rounded-tr-lg med:rounded-bl-none med:mb-2 med:w-full block med:mr-0 mr-2 rounded-l-lg"/>
                            <div className="m-2 rounded-lg w-full ">
                                <h1 className="flex justify-center w-full med:hidden font-semibold ">Project Title</h1>
                                <p className=" hidden xxs:flex sml:hidden  med:flex text-xs text-left">This was a project about making a website for the here I used react node.js and tailwind along with typescript</p>
                            </div>
                            
                        </div>
                    </div>

                     <div>
                        <span>Project Ttitle</span>
                        <div className=" h-[7rem]  med:h-full bg-tertiary rounded-lg flex m-3 flex-row items-center med:flex-col  border-[.1rem] border-solid border-primary shadow-[0px_0px_5px_1px_rgba(136,0,255,0.8)]">
                            
                            
                            <img alt="image of project#1" src={tricon} className="h-full w-[9rem] med:rounded-tr-lg med:rounded-bl-none med:mb-2 med:w-full block med:mr-0 mr-2 rounded-l-lg"/>
                            <div className="m-2 rounded-lg w-full ">
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