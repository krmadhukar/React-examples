import React, { useState } from "react";

//Class based component - State

//functional based component - Presentational component

function LoginPage(props) {
  console.log(props);

  const [helloMessage, setHelloMessage] = useState(props.messageToShow);

  function handleClickEvent() {
    setHelloMessage(Math.random() * 100000);
  }

  return (
    <div>
      {helloMessage}

      <button onClick={handleClickEvent}>Generate Random Number</button>
    </div>
  );
}

export default LoginPage;
