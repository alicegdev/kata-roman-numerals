import { chiffresRomains } from "./components/input";

describe('Test de la fonction chiffresRomains', () => {
    it('Devrait retourner "I" pour 1', () => {
        const resultat = chiffresRomains(1);
        expect(resultat).toBe("I");
    });

    it('Devrait retourner "V" pour 5', () => {
        const resultat = chiffresRomains(5);
        expect(resultat).toBe("V");
    });

    it('Devrait retourner "IV" pour 4', () => {
        const resultat = chiffresRomains(4);
        expect(resultat).toBe("IV");
    });

    it('Devrait retourner "X" pour 10', () => {
        const resultat = chiffresRomains(10);
        expect(resultat).toBe("X");
    });

    it('Devrait retourner "IX" pour 9', () => {
        const resultat = chiffresRomains(9);
        expect(resultat).toBe("IX");
    });

    it('Devrait retourner "XX" pour 20', () => {
        const resultat = chiffresRomains(20);
        expect(resultat).toBe("XX");
    });

    // Ajoutez d'autres tests pour d'autres chiffres arabes et leurs conversions attendues ici
});
