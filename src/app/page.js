import NameList from "@/components/NameList";
import Image from "next/image";
import Link from "next/link";

export default function Home() {

  const lista = [
    {imie: "os1 os1", status: false},
    {imie: "os2 os2", status: true}
  ]

  return (
    
    <div className="flex flex-col justify-center items-center h-screen gap-1">

    <NameList imie="Jan Kowalski" col="Nie"/>
    <NameList imie="Filip Zalewski"/>
    <NameList imie="MateuSz" col="Nie" ok/>
    <NameList imie="MaTeczka" ok/>
    

    {
      lista.map((osoba, idx) => (
        <NameList key={idx} imie={osoba.imie} ok = {osoba.status}/>
      ))
    }

    <Link href="/strona1">Strona1</Link>
    </div>
    );     
}
