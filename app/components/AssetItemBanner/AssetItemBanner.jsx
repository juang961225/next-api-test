function AssetItemBanner(props) {
    return (
        <li className="flex">
            <span className="px-2">{'element'}</span>
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
                {/* {Array.from({ length: quantity }, (_, index) => (
                    <option key={index} value={index + 1}>
                        frame {index + 1}
                    </option>
                ))} */}
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
                {/* {Array.from({ length: quantity }, (_, index) => (
                    <option key={index} value={index + 1}>
                        frame {index + 1}
                    </option>
                ))} */}
            </select>
        </li>
    );
}

export { AssetItemBanner };
