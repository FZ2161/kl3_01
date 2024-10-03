"use client"

import { useState } from "react"

export default function zadanie4(){
    // var lista = [
    //     {imie: "i1"},
    //     {imie: "i2"},
    //     {imie: "i2"}
    // ]
    const [items, setItems] = useState(["item1"])
    const [inp, setInp] = useState("")

    const handleClick = ()=>{
        setItems([...items, inp])
        console.log([...items])
        setInp("")
    }

    return(

        <div>
            <input className="text-slate-800" type="text" onChange={(e)=> setInp(e.target.value)} ></input>
            <button onClick={handleClick}>potwierdz</button>
            <ul>
            {
                items.map((item, idx)=>
                    <li key={idx}>{item}</li>
                )
            }
            </ul>
        </div>


    )

}