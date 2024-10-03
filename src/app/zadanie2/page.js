"use client";
import { useState } from "react"

export default function Color() {
 
        const [color, setColor] = useState("bg-black")

        const handleClick = () =>{
            if(color=="bg-gray-700" || color=="black"){ 
                setColor("bg-white")
            }
            else setColor("bg-gray-700")
        }
    return(
        <>
        <div className={color}>
            ok
        </div>  
        <button onClick={handleClick}>Zmień</button>
        </>
    )
}