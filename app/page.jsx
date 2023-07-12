"use client";
import Image from "next/image";
import React from "react";

// getBannerData deberia listar los banners encontrados en la interfaz
// luego con esos names crear botones los cuales me van a generar debajo de ellos su lista de assets
// y arriba de la lista de assets un inpunt colocando el numero de frames que va a tener el banner
// cada asssets debe de tener dos selects que deteerminee el numero de entrada y el de salida (frame)

export default function Home() {
    let [elements, setElements] = React.useState([]);

    const [hiddenElements, setHiddenElements] = React.useState([]);
    const toggleHidden = (index) => {
        setHiddenElements((prevHiddenElements) => {
            const updatedHiddenElements = [...prevHiddenElements];
            updatedHiddenElements[index] = !updatedHiddenElements[index];
            return updatedHiddenElements;
        });
    };

    const [quantity, setQuantity] = React.useState(0);
    const handleQuantityChange = (event) => {
        setQuantity(parseInt(event.target.value));
    };

    async function getBannerData() {
        const preformattedData = await fetch("api/get_banner_data");
        const data = await preformattedData.json();
        setElements(data.result);
        console.log(data);
    }

    async function createBanners() {
        const preformattedData = await fetch("api/generateBanner", {
            method: "POST",
            body: JSON.stringify({
                name: "test",
            }),
        });
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
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-10"
                >
                    get banners folders
                </button>
            </div>
            <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
                <button
                    onClick={createBanners}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-10"
                >
                    create banner button
                </button>
            </div>
            <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
                <button
                    onClick={createEmails}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-10"
                >
                    create email button
                </button>
            </div>

            <div className="w-full max-w-s">
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    {elements.map((element, indexFolder) => (
                        <ul className="" key={indexFolder}>
                            <li className="">
                                <div className="flex">
                                    <div
                                        onClick={() =>
                                            toggleHidden(indexFolder)
                                        }
                                        className="w-auto mb-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                    >
                                        {element.name}
                                    </div>
                                    <label
                                        htmlFor="quantity"
                                        className="text-gray-700 text-sm font-bold mb-2 px-5 flex items-center"
                                    >
                                        frames
                                    </label>
                                    <input
                                        id="quantity"
                                        type="number"
                                        value={quantity}
                                        onChange={handleQuantityChange}
                                        className="mb-2 w-10 shadow appearance-none border rounded text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    />
                                </div>
                                {element.assets.map((element, indexAsset) => (
                                    <ul
                                        key={indexAsset}
                                        className={
                                            hiddenElements[indexFolder]
                                                ? ""
                                                : "hidden"
                                        }
                                    >
                                        <li className="flex">
                                            <span className="px-2">
                                                {element}
                                            </span>
                                            <label
                                                htmlFor="options"
                                                className="block text-gray-700 text-sm font-bold mb-2 px-2"
                                            >
                                                enter
                                            </label>
                                            <select
                                                id="options"
                                                defaultValue=""
                                                name="asset"
                                                className="block py-0 px-5 w-auto text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                                            >
                                                {Array.from(
                                                    { length: quantity },
                                                    (_, index) => (
                                                        <option
                                                            key={index}
                                                            value={index + 1}
                                                        >
                                                            frame {index + 1}
                                                        </option>
                                                    )
                                                )}
                                            </select>
                                            <label
                                                htmlFor="options"
                                                className="block text-gray-700 text-sm font-bold mb-2"
                                            >
                                                leave
                                            </label>
                                            <select
                                                name="asset"
                                                id="options"
                                                defaultValue=""
                                                className="block py-2 px-5 w-auto text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer
                                                "
                                            >
                                                {Array.from(
                                                    { length: quantity },
                                                    (_, index) => (
                                                        <option
                                                            key={index}
                                                            value={index + 1}
                                                        >
                                                            frame {index + 1}
                                                        </option>
                                                    )
                                                )}
                                            </select>
                                        </li>
                                    </ul>
                                ))}
                            </li>
                        </ul>
                    ))}
                </form>
            </div>

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
