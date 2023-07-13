function BannerItem(props) {
    return (
        <li className="flex flex-col my-10">
            <div className="flex">
                <div
                    onClick={() => toggleHidden("indexFolder")}
                    className="w-auto mb-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    {"element.name"}
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
                    // value={"quantity"}
                    // onChange={"handleQuantityChange"}
                    className="mb-2 w-10 shadow appearance-none border rounded text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-center"
                />
            </div>
            <ul>{props.children}</ul>
        </li>
    );
}

export { BannerItem };
