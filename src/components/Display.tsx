import React, { useState } from "react";
import axios from "axios";

// create an axios instance
const api = axios.create({
  baseURL: "https://api.quran.com/api/v3",
});

function Display() {
  const [ayah, setAyah] = useState("");

  async function getRandom() {
    try {
      const response = await api.get("/verses/random");
      setAyah(response.data.verse.text_uthmani);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <button onClick={getRandom}> Get Random Ayah </button>
      {ayah && <p>{ayah}</p>}
    </div>
  );
}

export default Display;
