import evergreencover from "../../assets/evergreencover.png";

import searchcover from "../../assets/searchcover.png"
import {useState} from "react";
import {motion} from 'framer-motion'
 

const FeaturedProjects = () => {

    const [isOpen, setIsOpen] = useState(false);
        
    const handleClick = () => {
        setIsOpen(!isOpen);
        console.log(isOpen);
    }
        
    

    const boxVariants = {
        closed: {
            maxHeight: '3rem',
            transition: {
                duration: 1,
                ease: 'easeInOut', 
            },
        },
        open: {
            maxHeight: '5000px',
            
            transition: {
                duration: 2,
                ease: 'easeInOut', 
            },
        },
        
    }



    return (
        <div className='bg-secondary pb-6 border-solid border-primary p-[.5rem] rounded-[1rem] border-[.1rem] flex flex-col mb-[2rem] h-auto shadow-[0px_0px_5px_1px_rgba(136,0,255,0.8)] overflow-hidden'>

            <motion.div className="sml:flex flex-col gap-1 med:grid-cols-4 sml:grid-cols-2 mt-4" variants={boxVariants} initial="closed" animate={isOpen ? "open" : "closed"}>

                <div className="w-full flex  mb-4 xsm:text-[1.5rem] sml:text-[2rem]">
                        
                    <div className=" grid w-full justify-center items-center ">
                        <div className="w-full flex  items-center justify-center text-[1.5rem] ">
                             Featured Projects
                        </div>    
                        <hr className={`border-primary w-[12rem] sml:hidden sml:w-[16.5rem]  mx-auto rounded-lg shadow-[0px_0px_5px_1px_rgba(136,0,255,0.8)] ${!isOpen ? 'hidden' : ''}`}/>
                             
                    </div>
                        
                    <button onClick={handleClick} className={` med:hidden flex bg-[#141414] ${!isOpen ? 'rotate-90' : ''} sml:hidden auto transform transition-transform duration-300 ease-in-out rounded-md border mt-3 border-[#8800ff] p-[.3rem] shadow-[0px_0px_5px_1px_rgba(136,0,255,0.8)] }`}>
                            <svg className="w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#121111" stroke-width="0">
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                <g id="SVGRepo_iconCarrier"> 
                                <path transform="translate(12 12) scale(2) translate(-12 -12)" fill-rule="evenodd" clip-rule="evenodd" d="M12.7071 14.7071C12.3166 15.0976 11.6834 15.0976 11.2929 14.7071L6.29289 9.70711C5.90237 9.31658 5.90237 8.68342 6.29289 8.29289C6.68342 7.90237 7.31658 7.90237 7.70711 8.29289L12 12.5858L16.2929 8.29289C16.6834 7.90237 17.3166 7.90237 17.7071 8.29289C18.0976 8.68342 18.0976 9.31658 17.7071 9.70711L12.7071 14.7071Z" fill="#ffffff"></path> </g>
                            </svg>
                    </button>
                    
                        
                </div>
        
    
          
                <div>
                    <a href="https://evergreenestates.netlify.app/" target="_blank" rel="noopener noreferrer"> {/*add link to project here + noonpener noreferrer to close security vulnerability*/}
                        <div className="flex flex-col justify-center">
                            <span className=" hidden med:flex justify-center">EverGreen Estates</span>
                            <div className=" h-[7rem]  med:h-full bg-tertiary rounded-lg flex m-3 flex-row items-center med:flex-col  border-[.1rem] border-solid border-primary shadow-[0px_0px_5px_1px_rgba(136,0,255,0.8)]">
                                
                                
                                <img alt="image of project#1" src={evergreencover} className="h-full w-[9rem]  med:rounded-tr-lg med:rounded-bl-none med:mb-2 med:w-full block med:mr-0 mr-2 rounded-l-lg"/>
                                <div className=" mt-0 ml-0 rounded-lg h-full flex w-full p-2">
                                    <span className="med:hidden w-full flex text-2xl items-center justify-center">EverGreen Estates</span>
                                    <p className=" hidden  med:flex text-xs text-left">This is a recreation of my original project "EverGreen_Estates" in this version I introduces more modern design choices and technology like abstracting site data to a separate file and typescript implementation.</p>
                                </div>
                                
                            </div>
                        </div>
                    </a>

                    <a href="https://search-project-wastaken.netlify.app/" target="_blank" rel="noopener noreferrer">
                        <div className="flex flex-col justify-center">
                            <span className=" hidden med:flex  justify-center">Search Project</span>
                            <div className=" h-[7rem]  med:h-full bg-tertiary rounded-lg flex m-3 flex-row items-center med:flex-col  border-[.1rem] border-solid border-primary shadow-[0px_0px_5px_1px_rgba(136,0,255,0.8)]">
                                

                            <img alt="image of project#1" src={searchcover} className="h-full w-[9rem] mr-0 med:rounded-tr-lg med:rounded-bl-none med:mb-2 med:w-full block med:mr-0 mr-2 rounded-l-lg"/>
                            <div className="mt-0 ml-0 rounded-lg h-full flex w-full p-2">
                                <span className=" med:hidden w-full flex text-2xl items-center justify-center">Search Project</span>
                                
                                <p className=" hidden   med:flex text-xs text-left">A search and filtering web application built with Next.js, TypeScript, and Axios. Features include: Text-based search across items Tag-based filtering Range input filters Dynamic fetching via API routes Clean project structure with TypeScript types, and param and url query implementation</p>
                            </div>
                            </div>
                            
                        </div>
                    </a>
                </div>


            </motion.div>


        </div>
    )
}

export default FeaturedProjects;