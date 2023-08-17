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
    const preformattedData = await fetch("api/get_banner_data", {
      method: "POST",
      body: JSON.stringify({
        name: "test",
      }),
    });

    const data = await preformattedData.json();
    setElements(data.result);
    console.log(data);
  }
  async function getEmailData() {
    const preformattedData = await fetch("api/getEmailsData");
    const data = await preformattedData.json();
    setElements(data.result);
    console.log(data);
  }

  async function getBannerData() {
    try {
      const requestData = {
        name: "test",
        additionalInfo: "Hello, additional data!",
        // Puedes agregar más campos aquí si es necesario
      };

      const response = await fetch("api/get_banner_data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });

      if (!response.ok) {
        throw new Error(
          `Error al realizar la solicitud: ${response.status} ${response.statusText}`
        );
      }

      const responseData = await response.json();

      // Puedes hacer algo con la responseData aquí, como procesarla o mostrarla en la interfaz
      console.log("Respuesta recibida:", responseData);
    } catch (error) {
      console.error("Ocurrió un error:", error);
    }
  }

  // async function createBanners() {
  //   const preformattedData = await fetch("api/banner", {
  //     method: "POST",
  //     body: JSON.stringify({
  //       name: "daniel",
  //     }),
  //   });
  //   const data = await preformattedData.json();
  //   console.log(data + " esto es lo que va pegado");
  // }

  async function createEmails() {
    const preformattedData = await fetch("api/generateEmail");
    const data = await preformattedData.json();
    console.log(data);
  }

  const getButtons = [
    { text: "Get Banners", action: getBannerData },
    { text: "Get Emails", action: getEmailData },
  ];

  const createButtons = [
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
          {getButtons.map((b, i) => {
            return (
              <ButtonItem buttonText={b.text} buttonClick={b.action} key={i} />
            );
          })}
          {createButtons.map((b, i) => {
            return (
              <ButtonItem buttonText={b.text} buttonClick={b.action} key={i} />
            );
          })}
        </ContainerButton>
      </div>
      <div className="bg-white w-3/6 mx-auto shadow-md rounded px-8 pt-6 pb-8 mb-4">
        {elements.map((element, indexFolder) => (
          <div key={indexFolder}>
            <BannerItem
              action={() => toggleHidden(indexFolder)}
              text={element.name}
              quantity={quantity}
              change={handleQuantityChange}
            />
            {element.assets.map((element, indexAsset) => (
              <AssetItemBanner
                key={indexAsset}
                hiddenElements={hiddenElements[indexFolder]}
                element={element}
                quantity={quantity}
              />
            ))}
          </div>
        ))}
      </div>
    </main>
  );
}
