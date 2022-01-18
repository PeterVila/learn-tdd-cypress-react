const Display = (props) => {
  const {counter} = props;
  return <h3 data-testid="counter">{counter}</h3>;
}

export default Display;
