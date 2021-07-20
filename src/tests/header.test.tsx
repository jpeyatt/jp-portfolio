
import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../components/header';

describe('Header Component', () => {
    test('contains the correct text', () => {
        render(<Header />);
        const headerH1 = document.querySelector('.header-content > h1')
        const headerH4 = document.querySelector('.header-content > h4')
        expect(headerH1).toHaveTextContent("Hi, I'm Justin.")
        expect(headerH4).toHaveTextContent("I'm a")
    });
});

