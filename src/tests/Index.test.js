import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';
import Calculator from '../components/Calculator';

describe('Reder Home Page', () => {
  test('Test to render home page', () => {
    render(<App />);
    expect(document.body.textContent).toMatch(/Welcome to our page!/i);
  });

  test('Test to render Calculator link', () => {
    render(<App />);
    const navLinkCalculator = document.querySelector('[href="/calculator"]');
    expect(navLinkCalculator.innerHTML).toMatch(/Calculator/i);
  });

  test('Test the user interaction summing 5 + 7', () => {
    render(<Calculator />);
    const key5 = screen.getByText('5');
    const key7 = screen.getByText('7');
    const plusKey = screen.getByText('+');
    const equalKey = screen.getByText('=');
    const displayContainer = document.querySelector('#output');
    expect(key5.innerHTML).toBe('5');
    expect(key7.innerHTML).toBe('7');
    expect(plusKey.innerHTML).toBe('+');
    fireEvent.click(key5, { target: { innerText: '5' } });
    fireEvent.click(plusKey, { target: { innerText: '+' } });
    fireEvent.click(key7, { target: { innerText: '7' } });
    fireEvent.click(equalKey, { target: { innerText: '=' } });
    expect(displayContainer.innerHTML).toBe('12');
  });
  test('When key 5 is click, 5 is display in the Calculator', () => {
    render(<Calculator />); const key = screen.getByText('5');
    const displayContainer = document.getElementById('output');
    expect(key.innerHTML).toBe('5');
    fireEvent.click(key, { target: { innerText: '5' } });
    expect(displayContainer.innerHTML).toBe('5');
  });
});
