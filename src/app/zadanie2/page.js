"use client";
import { useState } from "react"

export default function Color() {
 
        const [color, setColor] = useState("bg-black")

        const handleClick = () =>{
            // if(color=="bg-gray-700" || color=="black"){ 
            //     setColor("bg-white")
            // }
            // else setColor("bg-gray-700") 
            //////////////////////////////// TO NA DOLE JEST LEPSZE I JEST NA KARTKÓWKE!!!!!!!!

            setColor(color == "bg-black" || color == "bg-gray-700"? "bg-white" : "bg-gray-700" )/* KARTKÓWKA: taki magiczny if */
        }
    return(
        <>
        <div className={`h-screen w-full ${color}`}>{/* KARTKÓWKA: połączenie ${} i zwykłego w className */}
        <button onClick={handleClick}>Zmień</button>
        </div>  
        
        </>
    )
}