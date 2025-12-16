import { motion } from "framer-motion";
import { Certification as CertificationType } from "../../../assets/Variables"; // Import the Certification type


type CertificationProps = CertificationType & {
  className?: string;
};

const Certification: React.FC<CertificationProps> = ({
  title,
  colors,
  logo,
  previewDescription,
  className,
}) => {
  
  let gradients:string = `from-${colors[0]}`



  for (let i = 1; i < colors.length - 1; i++) {
    gradients += ` via-${colors[i]} `;
  }
  gradients += `to-${colors[colors.length - 1]}`;

  

  

  


  return (
    <div className={`  ${className} bg-gradient-to-br ${gradients} m-[.3rem] cursor-pointer shadow-border-white p-[2px] rounded-xl  hover:scale-[1.03] transition-transform duration-300 ease-in-out w-auto h-auto`}>
      <motion.div className={`bg-tertiary  relative rounded-xl  sml:w-[15rem] sml:h-[15rem] w-full h-full `}>
        <h3 className={` bg-gradient-to-r ${gradients} bg-clip-text text-transparent flex justify-center font-mali custom-text-outline text-[.8rem] sml:flex xsm:text-[1rem]  med:text-[1.4rem]`}>{title}</h3>
        <div className={`h-[1px] bg-gradient-to-r ${gradients}  rounded-xl`}  />
        <p className="text-[.9rem] m-3  sml:text-[.7rem] font-mali text-white ">{previewDescription}</p>
        {logo && <img src={logo} alt={"certification company logo"} className=" w-10 h-auto absolute right-[.4rem] bottom-[.4rem]" />}   
      </motion.div>

      
    </div>
  );
};

export default Certification;
