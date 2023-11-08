import { useState } from 'react';

export function chiffresRomains(chiffreArabe) {
    let chiffreRomain = "";

    const correspondances = [
        { arabe: 1000, romain: "M" },
        { arabe: 900, romain: "CM" },
        { arabe: 500, romain: "D" },
        { arabe: 400, romain: "CD" },
        { arabe: 100, romain: "C" },
        { arabe: 90, romain: "XC" },
        { arabe: 50, romain: "L" },
        { arabe: 40, romain: "XL" },
        { arabe: 10, romain: "X" },
        { arabe: 9, romain: "IX" },
        { arabe: 5, romain: "V" },
        { arabe: 4, romain: "IV" },
        { arabe: 1, romain: "I" }
    ];

    for (const correspondance of correspondances) {
        while (chiffreArabe >= correspondance.arabe) {
            chiffreRomain += correspondance.romain;
            chiffreArabe -= correspondance.arabe;
        }
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
