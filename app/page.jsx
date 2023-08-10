"use client";

import React from "react";
import Image from "next/image";

import { ContainerFolders } from "./components/ContainerFolders/ContainerFolders";
import { ContainerButton } from "./components/ContainerButton/ContainerButton";
import { AssetItemBanner } from "./components/AssetItemBanner/AssetItemBanner";
import { AssetItemEmail } from "./components/AssetItemEmail/AssetItemEmail";
import { ButtonItem } from "./components/ButtonItem/ButtonItem";
import { BannerItem } from "./components/BannerItem/BannerItem";
import { EmailItem } from "./components/EmailItem/EmailItem";

const logo = require("../public/ddb-bg.png");

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
    const preformattedData = await fetch("api/banner", {
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

  const buttons = [
    { text: "Get Folder", action: getBannerData },
    { text: "Create Banner", action: createBanners },
    { text: "Create Email", action: createEmails },
  ];

  return (
    <main className="w-full flex flex-col min-h-screen p-12 gap-12">
      <div className="flex flex-col gap-3">
        <Image
          src={logo}
          alt={"logo"}
          width={150}
          className="mx-auto mix-blend-multiply"
        />
        <h1 className="mx-auto text-3xl font-Poppins font-bold uppercase text-amber-950">
          Banners & Email Creator
        </h1>
      </div>
      <div className="container mx-auto">
        <ContainerButton>
          {buttons.map((b, i) => {
            return (
              <ButtonItem buttonText={b.text} buttonClick={b.action} key={i} />
            );
          })}
        </ContainerButton>
      </div>
      <form
        action=""
        className="container mx-auto h-96 bg-neutral-200 shadow-md rounded p-8 flex justify-start items-start gap-5"
      >
        {/* folders banners */}
        <ContainerFolders>
          <BannerItem>
            <AssetItemBanner />
            <AssetItemBanner />
          </BannerItem>
        </ContainerFolders>
        {/* folders emails */}
        <ContainerFolders>
          <EmailItem>
            <AssetItemEmail />
            <AssetItemEmail />
          </EmailItem>
        </ContainerFolders>
      </form>
    </main>
  );
}
