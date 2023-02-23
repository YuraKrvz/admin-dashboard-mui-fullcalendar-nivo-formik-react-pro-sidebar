import { describe, it, expect } from 'vitest'

import { capitalizeFirstLetter } from './helpers'

/*eslint-disable */
describe('capitalize first letter', () => {
   it('return capitalize first letter: Letter', () => {
      expect(capitalizeFirstLetter('letter')).toBe('Letter')
   })

   it('return capitalize first letter: L', () => {
      expect(capitalizeFirstLetter('l')).toBe('L')
   })

})
/*eslint-enable */