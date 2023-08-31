import Image from "next/image";
import { ContainerButton } from "../ContainerButton/ContainerButton";
import { ButtonItem } from "../ButtonItem/ButtonItem";

const logo = require("../../../public/ddb-bg.png");

const Navbar = (props) => {
  const getButtons = [
    {
      text: "Get Banners",
      action: props.bannerButtonAction,
    },
    {
      text: "Get Emails",
      action: props.emailButtonAction,
    },
  ];

  return (
    <div className="w-full h-2/12 flex justify-between items-center gap-5">
      <div className="w-8/12 flex items-center gap-5">
        <Image
          src={logo}
          alt={"logo"}
          width={150}
          className="mix-blend-multiply"
        />
        <div className="w-[1px] h-12 bg-neutral-900"></div>
        <h1 className="text-xl font-Poppins uppercase text-amber-950">
          Banners/Emails Creator
        </h1>
      </div>
      <div className="w-4/12">
        <ContainerButton orientation={false}>
          {getButtons.map((b, i) => {
            return (
              <ButtonItem buttonText={b.text} buttonClick={b.action} key={i} />
            );
          })}
        </ContainerButton>
      </div>
    </div>
  );
};

export default Navbar;
