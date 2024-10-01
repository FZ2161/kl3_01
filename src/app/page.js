import NameList from "@/components/NameList";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen gap-1 bg-black">
    <NameList imie="Jan Kowalski" col="Nie"/>
    <NameList imie="Filip Zalewski"/>
    <NameList imie="MateuSz" col="Nie" ok/>
    <NameList imie="MaTeczka" ok/>
    </div>
     );
}
