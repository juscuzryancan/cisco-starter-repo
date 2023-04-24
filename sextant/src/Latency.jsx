import {useState, useEffect} from "react";
import {w3cwebsocket as Client} from "websocket";

const client = new Client("ws://localhost:55455");

const Latency = () => {
  const [latency, setLatency] = useState(null);

  useEffect(() => {
    client.onmessage = (message) => {
      setLatency(Date.now() - message.data);
    };
  }, []);

  return <span>
    {latency}
  </span>
}

export default Latency;
