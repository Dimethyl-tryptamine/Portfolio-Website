
import Card from "./util/Card.tsx";
import profilegreen from "../../assets/profilegreen.gif";
import spaceimage from "../../assets/spaceimage.png"
import spaceimage2 from "../../assets/spaceimage2.jpg"

const Hero = () => {
  return (
    <>
      
      <div className="w-[100vw] overflow-x-hidden h-[100vh] bg-contain  flex flex-col z-[-2] justify-center items-center relative " style={{ backgroundImage: `url(${spaceimage2})` }}>
        <div className="w-[99vw] xsm:block h-[100vh] bg-no-repeat bg-contain bg-bottom z-[-1] absolute bottom-0" style={{ backgroundImage: `url(${spaceimage})` }}></div>
        <div className="hidden med:block absolute z-[-2] bg-black w-screen h-[110px] bottom-0">
          
        </div>

        <div className="flex justify-center items-center absolute  sml:top-[20%] z-10 sml:right-[20%] ] ">
          



          <svg
            width="20rem"
            height="10rem"
            viewBox="0 0 500 200"
            className="justify-center items-center w-[10rem] h-[10rem] sml:w-[20vw] sml:h-[20vw]  overflow-visible absolute "
            >
            <path
                id="curve"
                d="M40,0 A80,80 0 0,1 460,0" // Updated d to make the arc at the top and double the size
                fill="transparent"
                stroke=""
            />
            <text>
                <textPath
                href="#curve"
                startOffset="50%"
                textAnchor="middle"
                style={{ fontSize: "2.5rem", fill: "white" }}
                >
                F r o n t  E n d  D e v e l o p e r
                </textPath>
            </text>
          </svg>


          
          <div className=" w-full flex flex-col justify-center items-center relative ">
            <Card
              primaryColor="#8800FF"
              secondaryColor=""
              className="rounded-[50%] block w-[8rem] h-[8rem] sml:w-[16vw] sml:h-[16vw] bg-cover shadow-[0px_0px_5px_1px_rgba(136,0,255,0.8)]"
              content=""
              backgroundimage={profilegreen}
            />

            {/* Name Text under the Card */}
            <div className="mt-2 text-[white] text-[2rem] sml:text-[4vw] font-gothic">
              Bryan Reyes
            </div>
          </div>



        </div>
      </div>
    </>
  );
};

export default Hero;
