import React from 'react';
import Jest from 'jest';
import ColorExtractor from './components/helpers/ColorExtractor';
it('correctly extracts the url', () => {
    expect(ColorExtractor.extractUrl('http://facebook.com?color=#abcabc')).toBe('http://facebook.com');
    expect(ColorExtractor.extractUrl('http://github.com/svantetic?color=#abcabc')).toBe('http://github.com/svantetic');
    expect(ColorExtractor.extractUrl('http://github.com')).toBe('http://github.com');
})

it('correctly extracts the color from url', () => {
    expect(ColorExtractor.extractColor('http://facebook.com?color=#abcabc')).toBe('#abcabc')
    expect(ColorExtractor.extractColor('http://github.com/svantetic?color=#abcabc')).toBe('#abcabc')
})

it('returs default color for url with no color', () => {
    let extractorDefaultColor = ColorExtractor.defaultColor
    expect(ColorExtractor.extractColor('http://github.com')).toBe(extractorDefaultColor)
    expect(ColorExtractor.extractColor('http://wykop.pl')).toBe(extractorDefaultColor);
})