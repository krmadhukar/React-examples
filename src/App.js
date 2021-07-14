import "./styles.css";
import LoginPage from "./pages/login";

function App() {
  const message = "Random Number Generator";

  function messageToChild() {
    return "Hello World Function()";
  }

  return (
    <div>
      <LoginPage
        messageToShow={message}
        messageFunction={messageToChild}
        messageToSend
        messageAsString={4234234}
      />
    </div>
  );
}

export default App;
