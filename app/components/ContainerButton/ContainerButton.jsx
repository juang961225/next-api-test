function ContainerButton(props) {
  return (
    <ul
      className={`w-full flex gap-5 ${
        props.orientation
          ? "flex-col items-stretch justify-center "
          : "flex-row items-center justify-end"
      }`}
    >
      {props.children}
    </ul>
  );
}

export { ContainerButton };
