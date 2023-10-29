import MerkleTree from "./utils/MerkleTree";
import niceList from "./utils/niceList.json";
import axios from "axios";
import { serverUrl } from "./url";



import { useContext, useState,createContext} from "react";


const MyContext = createContext();

const merkleTree = new MerkleTree(niceList);
const root = merkleTree.getRoot();

const MyProvider=({children})=>{

    const[contextName, setContexName] =useState();
    const[contextMessage, setContextMessage] =useState("")

    const  handlClick= async(name)=>{
        if(name===undefined){
            setContextMessage("Enter Your Name Please!")
        }
        else{
         
            const index = niceList.findIndex((n)=> n===contextName)
          
            const proof = merkleTree.getProof(index);
           
            const credentials = {
                name:contextName,
                root: root,
                proof: proof,
                
            }

            await axios.post(`${serverUrl}/gift`, 
                {data:credentials}
            ).then((res)=>{
                setContextMessage(res.data);
            })
            
        }
    }
       

    return(
        <MyContext.Provider value={{
            setContexName,
            contextName,
            contextMessage,
            handlClick
           
        }}>
            {children}
        </MyContext.Provider>
    )
}



export function useMycontext(){
    return useContext(MyContext);
}

export default MyProvider;
