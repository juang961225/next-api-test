function ButtonItem(props) {
    return (
        <li className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
            <button
                onClick={props.buttonClick}
                className=""
            >
                {props.buttonText}
            </button>
        </li>
    );
}

export { ButtonItem };
