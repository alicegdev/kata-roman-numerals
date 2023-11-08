import { chiffresRomains } from "./components/input";

describe('Test de la fonction chiffresRomains', () => {
  it('Devrait retourner "I" pour 1', () => {
      const resultat = chiffresRomains(1);
      expect(resultat).toBe("I");
  });

  it('Devrait retourner "IV" pour 4', () => {
      const resultat = chiffresRomains(4);
      expect(resultat).toBe("IV");
  });

  it('Devrait retourner "IX" pour 9', () => {
      const resultat = chiffresRomains(9);
      expect(resultat).toBe("IX");
  });

  it('Devrait retourner "XL" pour 40', () => {
      const resultat = chiffresRomains(40);
      expect(resultat).toBe("XL");
  });

  it('Devrait retourner "XC" pour 90', () => {
      const resultat = chiffresRomains(90);
      expect(resultat).toBe("XC");
  });

  it('Devrait retourner "CD" pour 400', () => {
      const resultat = chiffresRomains(400);
      expect(resultat).toBe("CD");
  });

  it('Devrait retourner "CM" pour 900', () => {
      const resultat = chiffresRomains(900);
      expect(resultat).toBe("CM");
  });

  it('Devrait retourner "M" pour 1000', () => {
      const resultat = chiffresRomains(1000);
      expect(resultat).toBe("M");
  });
});
