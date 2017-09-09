import React from 'react';
import Jest from 'jest';
import ColorFinder from './components/helpers/ColorFinder';
const githubColor = '#24292e';
const facebookColor = '#4267b2';
it('gets correct color by site url with prefix', () => {
    expect(ColorFinder.getColorFromUrl('http://github.com')).toBe(githubColor);
});

it ('get correct color by site url with https prefix', () => {
    expect(ColorFinder.getColorFromUrl('https://github.com')).toBe(githubColor);
});

it('gets correct color by site url without prefix', () => {
    expect(ColorFinder.getColorFromUrl('facebook.com')).toBe(facebookColor);
})


it('non existing site returns black color', () => {
    expect(ColorFinder.getColorFromUrl('netflix')).toBe('#000000');
})

it('correctly appends the colors to URL', () => {

    let expectedUrl = 'facebook.com?color='+facebookColor;
    expect(ColorFinder.getEncodedUrl('facebook.com')).toBe(expectedUrl);
})