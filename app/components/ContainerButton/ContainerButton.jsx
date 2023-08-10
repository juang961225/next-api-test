function ContainerButton(props) {
  return (
    <ul className="w-full flex justify-center items-center gap-5">
      {props.children}
    </ul>
  );
}

export { ContainerButton };
