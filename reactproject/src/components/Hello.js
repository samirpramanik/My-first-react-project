//const name = "TestName";
function Hello() {
  return <h1>Hello {displayMessage()}</h1>;
}

//const Hello = () => <h1>Hello World!</h1>

const displayMessage = () => {
    return "Child function called!";
}

export default Hello;