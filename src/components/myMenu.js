import Link from "next/link";

export default function Menu() {
    return(
        <div className="flex justify-center gap-3 text-green-600">
            <Link href="/">Main</Link>
            
            <Link href="/strona1">Strona1</Link>
            
            <Link href="/zadanie1">Zadanie 1</Link>
            
            <Link href="/zadanie2">Zadanie 2</Link>

            <Link href="/zadanie3">Zadanie 3</Link>

            <Link href="/zadanie4">Zadanie 4</Link>
            
            <a href="/strona1">zwykły link</a>

        </div>
    )
}