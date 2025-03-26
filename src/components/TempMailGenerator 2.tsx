import { useState } from "react";
import {ToastContainer, toast} from "react-toastify";
const TempMailGenerator = () => {
  const [loading, setLoading] = useState<boolean>(false);
  // hook that hasn't been used yet
  // const [inbox, setInbox] = useState<{ address: string; token: string }>({ address: "", token: "" });

  const handleGenerateEmail = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://api.tempmail.lol/v2/inbox/create?domain&prefix", {
        method: "POST",
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const inbox = await response.json();

    toast.success(
      <div style={{ textAlign: "left" }}>
        <div><h2></h2>Inbox: {inbox.address}</div>
        <div>Token: {inbox.token}</div>
      </div>
    );
    } catch (error) {
      console.error("Failed to generate temp email", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>TempMail Generator</h1>
      <button onClick={handleGenerateEmail} disabled={loading}>
        {loading ? "Generating..." : "Generate Temp Email:"}
      </button>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        pauseOnHover
        theme="dark" 
        toastStyle={{ width: "450px" }}
      />
    </div>
  );
};

export default TempMailGenerator;
