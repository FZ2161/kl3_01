'use client'
import { useEffect, useState } from "react"
import Image from "next/image"

export default function Kraj() {

    const [data, setData] = useState(null)
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(true)    

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await fetch("https://restcountries.com/v3.1/all")
                const json = await response.json()

                setData(json)
                console.log(json)
            } catch (error) {
                console.error("nie pobrano danych")
                setError(true)
            } finally {
                setLoading(false)
            }
        }

        getData()

    }, [])

    return (
        <div className="flex flex-row flex-wrap justify-center items-center gap-5 border-dashed border-2 border-blue">
            {/* Display loading or error messages */}
            <h1>{loading && "Pobieranie danych"}</h1>
            <h1>{error && "Nie pobrano danych"}</h1>

            {/* Display data when available */}
            {data && data.map((kraj, idx) => (
                <div key={idx} className="border border-gray-900 p-4 hover:bg-red-500 hover:text-violet-400 h-400 w-400">
                    <Image src={kraj.flags.svg} width={200} height={400} alt={kraj.name.common} style={{ objectFit: "cover" }} />
                    <h1>{kraj.name.common}</h1>
                </div>
            ))}
        </div>
    )
}
