

import React from "react";
import {createRoot} from "react-dom/client"

import { Abc } from "./Abc";
const data=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

createRoot(document.getElementById("root")).render(
    <>
    { /* Dynamic  */}
     {
        data.map((ele)=>{
            return <Abc name={ele} key={ele}/>
        })
     }
     {/*   Hard coded  */ }
     <Abc name={"A"}/>
     <Abc name={"B"}/>
     <Abc name={"C"}/>
     <Abc name={"D"}/>
     <Abc name={"E"}/>
     <Abc name={"F"}/>
     <Abc name={"G"}/>
     <Abc name={"H"}/>
     <Abc name={"I"}/>
     <Abc name={"J"}/>
     <Abc name={"K"}/>
     <Abc name={"L"}/>
     <Abc name={"M"}/>
     <Abc name={"N"}/>
     <Abc name={"O"}/>
     <Abc name={"P"}/>
     <Abc name={"Q"}/>
     <Abc name={"R"}/>
     <Abc name={"S"}/>
     <Abc name={"T"}/>
     <Abc name={"U"}/>
     <Abc name={"V"}/>
     <Abc name={"W"}/>
     <Abc name={"X"}/>
     <Abc name={"Y"}/>
     <Abc name={"Z"}/>
    
    </>
)