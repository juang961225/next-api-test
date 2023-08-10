function ButtonItem(props) {
  return (
    <li className="items-center justify-between font-mono text-sm">
      <button onClick={props.buttonClick}>{props.buttonText}</button>
    </li>
  );
}

export { ButtonItem };
