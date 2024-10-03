import Link from "next/link";

export default function Menu() {
    return(
        <div className="flex justify-center gap-3">
            <Link href="/">Main</Link>
            |
            <Link href="/strona1">Strona1</Link>
            |
            <Link href="/zadanie1">Zadanie 1</Link>
            |
            <Link href="/zadanie2">Zadanie 2</Link>
            |
            <a href="/strona1">zwykły link</a>

        </div>
    )
}