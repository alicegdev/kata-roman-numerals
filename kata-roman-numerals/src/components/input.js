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
export function chiffresArabes(chiffreRomain) {
    const romainToArabeMap = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    };

    let chiffreArabe = 0;
    let prevValue = 0;

    for (let i = chiffreRomain.length - 1; i >= 0; i--) {
        const currentRomain = chiffreRomain[i];
        const currentValue = romainToArabeMap[currentRomain];

        if (currentValue < prevValue) {
            chiffreArabe -= currentValue;
        } else {
            chiffreArabe += currentValue;
        }

        prevValue = currentValue;
    }

    return chiffreArabe;
}


export default function Form() {
    const [nombreArabe, setNombreArabe] = useState('');
    const [nombreRomain, setNombreRomain] = useState('');

    function handleConvertToRoman() {
        const chiffreRomain = chiffresRomains(Number(nombreArabe));
        setNombreRomain(chiffreRomain);
    }

    function handleConvertToArabic() {
        const chiffreArabe = chiffresArabes(nombreRomain);
        setNombreArabe(chiffreArabe);
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
                <button onClick={handleConvertToRoman}>Convertir en romain</button>
            </label>

            <label>
                Nombre romain :
                <input
                    value={nombreRomain}
                    onChange={e => setNombreRomain(e.target.value)}
                />
                <button onClick={handleConvertToArabic}>Convertir en arabe</button>
            </label>

            {nombreRomain &&
                <p>Le nombre romain correspondant est {nombreRomain}.</p>
            }
        </>
    );
}
