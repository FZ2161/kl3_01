"use client";

import { useState } from "react"
//klamerki żeby tylko usestate zaimportować z react
export default function Strona1(){

    //    licznik   po odświażeniu       wart. domyśl
    const [licznik, setLicznik] = useState(0)
    // const licznik nie aktualizuje się na bieżąca
    //setLicznik(5) //pętla ----> po twarciu zmienia się wartość licznika i odświeża stronę, co powoduje, że wartość to 0 i tak w kółko ---react zabezpoiecza błędem

    const handleClick = () =>{
        setLicznik(licznik +1)
    }
    const odejmij = () => {
        setLicznik(licznik-1)
    }
    return(
        //można tylko 1 gółwny element, np. div
        <>
            <h1>
                {licznik}
            </h1>
            <button onClick={handleClick}>powiększ licznik</button>
            {/* odświerzenie strony resetuje licznik do default */}
            <br/>
            <button onClick={odejmij}>zmniejsz licznik</button>

        </>
    )
}