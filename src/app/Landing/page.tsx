import Navbar from "../Components/Navbar"

export default function Landing(){
    return (
        <>
           <div className = "relative w-screen h-[70vh] overflow-hidden">
             <video src = "/BannerVideo1.mp4" autoPlay loop muted className = "absolute inset-0 w-full h-[500px] object-cover"></video>
             <div className = "absolute bg-gradient-to-t from-blue-900/80 via-blue-700/70 to-blue-400/50 z-0 inset-0 h-[500px]"></div>
             <div className = "absolute top-0 left-0 w-full z-20">
                 <Navbar />
                 <div className = "text-white absolute m-10 ml-45 mt-15 flex flex-col justify-center items-start gap-10">
                    <div className = "font-bold text-6xl">Welcome to Your <br /> very own Study Universe !</div>
                    <div> <button className = "bg-white text-blue-500 rounded-lg p-3 text-xl font-bold">Start Solo Study</button> </div>
                </div>
             </div>
           </div>
           <div className = "flex flex-col justify-center items-center mr-20 ml-20 mb-20 h-80vh">
            <div className = "flex justify-center items-center gap-4 mb-10">
                <h1 className = "text-black text-5xl font-bold">Forget the outside world</h1>
                <img src = "/brainstorm.png" className = "h-[100px] w-[100px]"/>
            </div>
            <div className = "flex justify-between items-center gap-10">
                <div className = "flex flex-col justify-start items-start font-semibold text-3xl p-10">
                    <div className = "ml-10"><p>-- Do you ever have trouble concentrating because your surroundings are too cluttered?</p></div>
                    <div className = "ml-10">-- Do you have a hard time zoning out the noise at home?</div>
                    <div className = "ml-10">-- Do you ever wish you could teleport into a different world?</div>
                </div>
                <div className = "mr-10 ml-10">
                    <img src = "/dog image.jpeg" className = "h-70 w-200 rounded-lg"></img>
                </div>
            </div>
           </div>


           <div>
            Helloo
           </div>
        
        </>
    )
}