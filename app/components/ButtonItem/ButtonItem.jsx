function ButtonItem() {
    return (
        <li className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
            <button
                onClick={'getBannerData'}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-10"
            >
                Get banners folders
            </button>
        </li>
    );
}

export { ButtonItem };
