import { useMycontext } from "../Mycontex";


const Home =()=>{
    const {contextName, contextMessage,setContexName,handlClick} = useMycontext();
   
    return(
        <>
            <div className="flex w-full h-24 sm:h-48 md:h-32  bg-slate-700 sm:items-center md:items-center items-center justify-center sm:justify-center md:justify-center justify-center">
                <h1 className="font-serif  text-3xl tracking-wider text-zinc-100 text-white">Alchemy Merkle Tree Giftlist Project</h1>
            </div>
            <div className="flex md:flex-row sm:flex-col gap-4 mt-5 mr-14 items-center justify-center ">
                <p className="text-xl tracking-wider">Enter Your Name To Get Gift :</p>
                <input className="w-1/4 h-10 bg-gray border border-black rounded-md outline-4 focus:none p-2"
                    placeholder="Enter Your Name To Check Egibilty" type="text"
                    onChange={(e)=>{
                        setContexName(e.target.value);
                    }}
                    ></input>
                    <button className="rounded-full bg-red-700 w-28 h-10 text-white"
                    onClick={()=>{
                        handlClick(contextName);
                    }}
                    >Get My Gift</button>
            </div>
            <div className="flex flex-row gap-4 mt-5 mr-14 items-center justify-center ">
                <p className="text-xl tracking-wider">{contextMessage}</p>


            </div>
        </>
    )
}


export default Home;