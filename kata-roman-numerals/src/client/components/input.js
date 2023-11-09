import { useState } from "react";
import "./input.css";
import chiffresArabes from "../utils/chiffresArabes";
import chiffresRomains from "../utils/chiffresRomains";

export default function Form() {
  const [nombreArabe, setNombreArabe] = useState("");
  const [nombreRomain, setNombreRomain] = useState("");

  function handleConvertToRoman() {
    const chiffreRomain = chiffresRomains(Number(nombreArabe));
    setNombreRomain(chiffreRomain);
  }

  function handleConvertToArabic() {
    const chiffreArabe = chiffresArabes(nombreRomain);
    setNombreArabe(chiffreArabe);
  }

  return (
    <div className="form-container">
      <div className="input-container">
        <label className="label">Nombre arabe :</label>
        <input
          className="input-field"
          value={nombreArabe}
          onChange={(e) => setNombreArabe(e.target.value)}
          type="number"
        />
        <button className="convert-button" onClick={handleConvertToRoman}>
          Convertir en chiffre romain
        </button>
      </div>

      <div className="input-container">
        <label className="label">Nombre romain :</label>
        <input
          className="input-field"
          value={nombreRomain}
          onChange={(e) => setNombreRomain(e.target.value)}
        />
        <button className="convert-button" onClick={handleConvertToArabic}>
          Convertir en chiffre arabe
        </button>
      </div>

      {nombreRomain && (
        <p className="result-text">
          Le nombre romain correspondant est {nombreRomain}.
        </p>
      )}
    </div>
  );
}
