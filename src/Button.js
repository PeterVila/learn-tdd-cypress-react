const Display = (props) => {
  const { onClick, text } = props;
  return (
    <button onClick={onClick} data-testid={text}>
      {text}
    </button>
  );
}

export default Display;
