import FXInput from "./input"

const ERHero = () => {


return(
<main className="h-auto bg-black">
    <section className="h-screen max-w-6xl  w-full p-3 font-JetBrains-Mono border-white border ">
      <h2 className=" text-white font-bold text-lg">CHECK THE RATE</h2>

{/* container for 2 currency change checker */}
        <div className=" h-auto  flex flex-col gap-5 items-center p-2 bg-BlackLight rounded-lg border border-amber-600">

        {/* send container */}
          <div className="bg-BlackSR h-35 w-full flex flex-col p-2 rounded-md border border-green-400  gap-4 ">
              <span className="text-white/60 text-lg font-bold ">SEND</span>

              <div className="w-auto">
                <FXInput/>

                {/* dropdown */}
                
              
              </div>
          
          </div>

          {/* exchange image- */}
            <div className="w-20 h-20  ">
            <button className="w-full  h-full border border-white rounded-md active:border-2 hover:cursor-pointer active: ">
              <img src="/images/icon-exchange-vertical.svg" alt="excange-icon" className="w-30 h-10" />
            </button>
            
            </div>


          {/* receive */}
          <div className="bg-BlackSR h-35 w-full p-2 rounded-md border border-white ">
              <span className="text-white/60 text-lg font-bold ">RECEIVE</span>

              <div className="w-auto">
              
              
              </div>
          
          </div>

        </div>


    </section>





</main>
)}
export default ERHero