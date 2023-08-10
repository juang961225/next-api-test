function EmailItem(props) {
  return (
    <li className="w-full flex flex-col">
      <div className="flex mb-8 items-center justify-start gap-3">
        <button onClick={() => toggleHidden("indexFolder")}>
          {"element.name"}
        </button>
        <label
          htmlFor="quantity"
          className="text-gray-700 w-auto text-sm font-bold mb-2 px-5 flex items-center"
        >
          Type Email
        </label>
        <input
          id="quantity"
          type="text"
          // value={"quantity"}
          // onChange={"handleQuantityChange"}
          className="mb-2 w-10 h-10 shadow appearance-none border rounded text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-center"
        />
      </div>
      <ul>{props.children}</ul>
    </li>
  );
}

export { EmailItem };
