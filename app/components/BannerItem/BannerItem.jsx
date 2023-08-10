import { useEffect } from "react";

function BannerItem(props) {
  return (
    <div className="flex">
      <div onClick={props.action} className="button cursor-pointer mb-5">
        {props.text}
      </div>
      <label
        htmlFor="quantity"
        className="text-gray-700 text-sm font-bold mb-2 px-5 flex items-center"
      >
        Frames
      </label>
      <input
        id="quantity"
        type="number"
        value={props.quantity}
        onChange={props.change}
        className="mb-2 w-10 shadow appearance-none border rounded text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>
  );
}

export { BannerItem };
