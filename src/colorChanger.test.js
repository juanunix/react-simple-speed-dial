import React from 'react';
import Jest from 'jest';
import ColorFinder from './components/helpers/ColorFinder';
it('gets correct color by site url with prefix', () => {
    expect(ColorFinder.getColorFromUrl('http://github.com')).toBe('#000000');
});

it ('get correct color by site url with https prefix', () => {
    expect(ColorFinder.getColorFromUrl('https://github.com')).toBe('#000000');
});

it('gets correct color by site url without prefix', () => {
    expect(ColorFinder.getColorFromUrl('facebook.com')).toBe('#abcabc');
})


it('doesnt get non existing site', () => {
    expect(ColorFinder.getColorFromUrl('netflix')).toBe('default');
})