"use client";
import Image from "next/image";
import React from "react";


// getBannerData deberia listar los banners encontrados en la interfaz
// luego con esos names crear botones los cuales me van a generar debajo de ellos su lista de assets 
// y arriba de la lista de assets un inpunt colocando el numero de frames que va a tener el banner 
// cada asssets debe de tener dos selects que deteerminee el numero de entrada y el de salida (frame)

export default function Home() {
    let [elements, setElements] = React.useState([]);

    async function getBannerData() {
        const preformattedData = await fetch("api/get_banner_data");
        const data = await preformattedData.json();
        console.log(data);
    }

    async function createBanners() {
        const preformattedData = await fetch("api/generateBanner", {method:'POST', body:JSON.stringify({name: "pruebaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"})});
        const data = await preformattedData.json();
        console.log(data);
    }

    async function createEmails() {
        const preformattedData = await fetch("api/generateEmail");
        const data = await preformattedData.json();
        console.log(data);
    }

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
                <button
                    onClick={getBannerData}
                    className="group rounded-lg border px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                >
                    get banners folders
                </button>
            </div>
            <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
                <button
                    onClick={createBanners}
                    className="group rounded-lg border px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                >
                    create banner button
                </button>
            </div>
            <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
                <button
                    onClick={createEmails}
                    className="group rounded-lg border px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                >
                    create email button
                </button>
            </div>

            <ul>
                {elements.map((element, index) => (
                    <li key={index}>{element}</li>
                ))}
            </ul>

            <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
                <Image
                    className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                    src="/next.svg"
                    alt="Next.js Logo"
                    width={180}
                    height={37}
                    priority
                />
            </div>
        </main>
    );
}
