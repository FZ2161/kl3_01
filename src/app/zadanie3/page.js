// nw czy działa ale trzeba nauczyc się pobierać wartość z inputa
// na kartkówce nie będzie zadania z kolorem ALE BĘDZIE INNE INPUT + BUTTON

"use client"
import { useState } from "react"


export default function Colors (){

    const [color, setColor] = useState("")

    const [input, setInput] = useState("")
    // const Inp = () =>{
    //    setColor("bg-black")
    // }
    const handleClick = () => {
        setColor(input)
    }

    return(
        <>
        {/* e - event */}
        <div className={`h-screen w-full ${color}`}>
        <input className="text-slate-800" type="text" onChange={(e)=>setInput(e.target.value)}></input>
        <input type="submit" onClick={handleClick}></input>
        </div>  
        </>
    )
}