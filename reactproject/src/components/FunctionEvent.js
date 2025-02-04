function FunctionEvent() {
  function handleClick() {
    console.log('Button clicked');
  }

  return (
    <div>
      Functional Component!
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default FunctionEvent;