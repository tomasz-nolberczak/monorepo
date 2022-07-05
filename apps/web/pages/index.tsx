import { IResponseJson } from "@pizza-hero/interfaces";
import { Button } from "@pizza-hero/ui";

import React, { useState } from "react";

const API_URL = "http://localhost:3002";

export default function Web() {
  const makeOrder = async () => {
    try {
      const response = await fetch(`${API_URL}/order`);

      console.log(response.ok);

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      return (await response.json()) as IResponseJson;
    } catch (error) {
      return {
        status: "server error",
        message: "Something went wrong",
      } as IResponseJson;
    }
  };
  const [response, setResponse] = useState<string>("");

  const handleButtonClick = async () => {
    const response = await makeOrder();

    setResponse(response.message);
  };

  return (
    <div>
      Click here to order pizza:
      <Button clickHandler={() => handleButtonClick()} />
      {response && <pre>{response}</pre>}
    </div>
  );
}
