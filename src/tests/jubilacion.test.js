import { esJubilado } from '../funciones/jubilacion.js';

describe('Pruebas para la función esJubilado', () => {
    test('Edad negativa, debería retornar "ERROR"', () => {
        expect(esJubilado(-1, 250)).toBe('ERROR');
    });

    test('Edad menor a 65 años y 240 aportes, debería retornar false', () => {
        expect(esJubilado(50, 240)).toBe(true);
    });

    test('Edad mayor a 65 años pero menos de 240 aportes, debería retornar false', () => {
        expect(esJubilado(66, 239)).toBe(false);
    });

    test('Edad igual a 65 años y 240 aportes, debería retornar true', () => {
        expect(esJubilado(65, 240)).toBe(true);
    });

    test('Edad mayor a 65 años y 240 aportes o más, debería retornar true', () => {
        expect(esJubilado(66, 240)).toBe(true);
    });

    test('Edad igual a 65 años y más de 240 aportes, debería retornar true', () => {
        expect(esJubilado(65, 241)).toBe(true);
    });
});
