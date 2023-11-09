import { chiffresArabes, chiffresRomains } from "./components/input";

// Test de la fonction chiffresRomains pour 1, 3 et 5
test('Conversion de chiffres arabes en chiffres romains (1, 3, 5)', () => {
    expect(chiffresRomains(1)).toBe('I');
    expect(chiffresRomains(3)).toBe('III');
    expect(chiffresRomains(5)).toBe('V');
});

// Test de la fonction chiffresArabes pour les chiffres romains correspondants (I, III, V)
test('Conversion de chiffres romains en chiffres arabes (I, III, V)', () => {
    expect(chiffresArabes('I')).toBe(1);
    expect(chiffresArabes('III')).toBe(3);
    expect(chiffresArabes('V')).toBe(5);
});
