import operate from '../../logic/operate';

describe('Testing Math Operation in operate file', () => {
  it('testing addition: plus', () => {
    const result = operate(20, 5, '+');
    expect(result).toBe('25');
  });

  it('testing substraction: minus', () => {
    const result = operate(25, 10, '-');
    expect(result).toBe('15');
  });

  it('testing multiplication: multiplication', () => {
    const result = operate(30, 15, 'x');
    expect(result).toBe('450');
  });

  it('testing division: div', () => {
    const result = operate(30, 10, '÷');
    expect(result).toBe('3');
  });

  it('testing division by 0: div for zero', () => {
    const result = operate(10, 0, '÷');
    expect(result).toBe("Can't divide by 0.");
  });

  it('testing operate.js: mod ', () => {
    const result = operate(10, 5, '%');
    expect(result).toBe('0');
  });

  it('testing operate.js: mod for zero', () => {
    const result = operate(10, 0, '%');
    expect(result).toBe("Can't find modulo as can't divide by 0.");
  });
});
