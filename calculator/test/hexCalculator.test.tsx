import {calculateHex} from '../src/lib/hexCalculator';
import {describe} from 'node:test';


describe('Hexadecimal Calculator',() =>
{
    test('adds two hex values correctly',() => {
        expect(calculateHex('A', '5', '+')).toBe('000F');
        expect(calculateHex('FF', '01', '+')).toBe('0100');
    }
    )
})