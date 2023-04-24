import { useState, useEffect } from "react";
import Exhibit from "./Exhibit";

const IPAddress = ({
  type
}) => {
  const [loading, setLoading] = useState(true);
  const [address, setAddress] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const handleAddress = async () => {
      setLoading(true);
      try {
        const URL = (type === "IPv4") 
          ? "https://api.ipify.org?format=json"
          : "https://api64.ipify.org?format=json"
        const res = await fetch(URL)
        const {ip} = await res.json();
        setAddress(ip);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    }

    handleAddress();
  }, []);

  return <div>
    {(!loading && !error) && `${type}: ${address}`}
  </div>
}

export default IPAddress;
