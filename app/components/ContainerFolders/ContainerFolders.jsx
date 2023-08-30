function ContainerFolders(props) {
  return (
    <ul className={`${props.hiddenElements ? "w-3/6" : "hidden"}`}>
      {props.children}
    </ul>
  );
}

export { ContainerFolders };
