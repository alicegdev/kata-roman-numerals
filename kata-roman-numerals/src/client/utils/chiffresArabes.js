export default function chiffresArabes(chiffreRomain) {
  const romainToArabeMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
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
