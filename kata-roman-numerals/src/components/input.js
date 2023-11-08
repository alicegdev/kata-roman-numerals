import { useState } from 'react';

export function chiffresRomains(chiffreArabe) {
    let chiffreRomain = "";

    if (chiffreArabe === 1) {
        chiffreRomain = "I";
    }
    if (chiffreArabe === 5) {
        chiffreRomain = "V";
    }

    return chiffreRomain;
}

export default function Form() {
    const [nombreArabe, setNombreArabe] = useState('');
    const [nombreRomain, setNombreRomain] = useState('');

    function handleOnclick() {
        const chiffreRomain = chiffresRomains(Number(nombreArabe));
        setNombreRomain(chiffreRomain); // Mettez à jour le nombre romain dans l'état
    }

    return (
        <>
            <label>
                Nombre arabe :
                <input
                    value={nombreArabe}
                    onChange={e => setNombreArabe(e.target.value)}
                    type="number"
                />
                <button onClick={handleOnclick}>Convertir</button>
            </label>

            {nombreRomain &&
                <p>Le nombre romain correspondant est {nombreRomain}.</p>
            }
        </>
    );
}
