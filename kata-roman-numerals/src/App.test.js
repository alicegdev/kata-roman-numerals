import { render, screen } from '@testing-library/react';
import App from './App';

import { chiffresRomains } from './components/input';


describe('Test de la fonction chiffresRomains', () => {
  it('Devrait retourner "I" pour 1', () => {
      const resultat = chiffresRomains(1);
      expect(resultat).toBe("I");
  });

  it('Devrait retourner "V" pour 5', () => {
      const resultat = chiffresRomains(5);
      expect(resultat).toBe("V");
  });
});