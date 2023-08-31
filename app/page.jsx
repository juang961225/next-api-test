"use client";

import React from "react";

import { ContainerFolders } from "./components/ContainerFolders/ContainerFolders";
import { ContainerButton } from "./components/ContainerButton/ContainerButton";
import { AssetItemBanner } from "./components/AssetItemBanner/AssetItemBanner";
import { AssetItemEmail } from "./components/AssetItemEmail/AssetItemEmail";
import { ButtonItem } from "./components/ButtonItem/ButtonItem";
import { BannerItem } from "./components/BannerItem/BannerItem";
import { EmailItem } from "./components/EmailItem/EmailItem";
import Navbar from "./components/Navbar/Navbar";
import { data } from "autoprefixer";

// getBannerData deberia listar los banners encontrados en la interfaz
// luego con esos names crear botones los cuales me van a generar debajo de ellos su lista de assets
// y arriba de la lista de assets un inpunt colocando el numero de frames que va a tener el banner
// cada asssets debe de tener dos selects que deteerminee el numero de entrada y el de salida (frame)

export default function Home() {
  let [elements, setElements] = React.useState([]);

  const [hiddenBanners, setHiddenBanners] = React.useState(false);
  const [hiddenEmails, setHiddenEmails] = React.useState(false);

  const toggleHidden = () => {
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

  async function getBannerData(path) {
    const img = path === "banners" ? "assets" : "img";

    if (img === "assets") {
      setHiddenBanners(!hiddenBanners);
      setHiddenEmails(false);
    } else {
      setHiddenEmails(!hiddenEmails);
      setHiddenBanners(false);
    }

    let parameterValue = {
      url: `./public/pending_tasks/${path}`,
      img: img,
    };

    parameterValue = encodeURIComponent(JSON.stringify(parameterValue));

    try {
      const response = await fetch(
        `/api/get_banner_data?parametro=${parameterValue}`
      );
      const data = await response.json();
      console.log(data.result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }

    return data.result;
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

  const createButtons = [
    {
      text: "Preview Banner",
      //action: () => previewBanners(),
    },
    {
      text: "Create Banner",
      action: () => createBanners(),
    },
    {
      text: "Preview Email",
      //action: () => previewEmail(),
    },
    {
      text: "Create Email",
      action: () => createEmails(),
    },
  ];

  return (
    <main className="w-full flex flex-col min-h-screen py-5 px-16 gap-5">
      <Navbar
        bannerButtonAction={() => getBannerData("banners")}
        emailButtonAction={() => getBannerData("emails")}
      />
      <div
        className={`w-full h-[80vh] bg-neutral-100 p-5 ${
          hiddenBanners || hiddenEmails
            ? "flex items-stretch justify-center"
            : "flex items-center justify-center"
        }`}
      >
        {!hiddenBanners && !hiddenEmails ? (
          <p className="mx-auto text-center w-full uppercase">
            Selecciona recurso
          </p>
        ) : (
          <>
            <div
              className={`w-6/12 ${
                hiddenBanners || hiddenEmails
                  ? "border-r border-neutral-900 px-4"
                  : ""
              }`}
            >
              <form
                action=""
                className={`w-auto mx-auto h-96 bg-neutral-300 shadow-md rounded p-5 flex justify-start items-start gap-5 ${
                  hiddenBanners || hiddenEmails ? "" : "hidden"
                }`}
              >
                {/* folders banners */}
                <ContainerFolders hiddenElements={hiddenBanners}>
                  <BannerItem action={toggleHidden} text={data.result}>
                    <AssetItemBanner />
                    <AssetItemBanner />
                  </BannerItem>
                </ContainerFolders>
                {/* folders emails */}
                <ContainerFolders hiddenElements={hiddenEmails}>
                  <EmailItem>
                    <AssetItemEmail />
                    <AssetItemEmail />
                  </EmailItem>
                </ContainerFolders>
              </form>
              <div className="w-full mt-5">
                {hiddenBanners ? (
                  <ContainerButton orientation={true}>
                    <ButtonItem
                      buttonText={createButtons[0].text}
                      buttonClick={createButtons[0].action}
                    />
                    <ButtonItem
                      buttonText={createButtons[1].text}
                      buttonClick={createButtons[1].action}
                    />
                  </ContainerButton>
                ) : (
                  <></>
                )}

                {hiddenEmails ? (
                  <ContainerButton orientation={true}>
                    <ButtonItem
                      buttonText={createButtons[2].text}
                      buttonClick={createButtons[2].action}
                    />
                    <ButtonItem
                      buttonText={createButtons[3].text}
                      buttonClick={createButtons[3].action}
                    />
                  </ContainerButton>
                ) : (
                  <></>
                )}
              </div>
            </div>
            <div className="w-6/12 flex justify-center items-center overflow-y-auto">
              {hiddenBanners && "Banner preview"}
              {hiddenEmails && "Email preview"}
            </div>
          </>
        )}
      </div>
    </main>
  );
}
