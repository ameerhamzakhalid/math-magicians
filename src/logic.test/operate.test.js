import operate from '../logic/operate';

describe('operate', () => {
  it('should return the sum of two numbers', () => {
    const result = operate('5', '7', '+');
    expect(result).toBe('12');
  });

  it('should return the difference of two numbers', () => {
    const result = operate('5', '7', '-');
    expect(result).toBe('-2');
  });

  it('should return the product of two numbers', () => {
    const result = operate('5', '7', 'x');
    expect(result).toBe('35');
  });

  it('should return the quotient of two numbers', () => {
    const result = operate('21', '7', '÷');
    expect(result).toBe('3');
  });

  it('should return error message when dividing by zero', () => {
    const result = operate('21', '0', '÷');
    expect(result).toBe("Can't divide by 0.");
  });

  it('should return the modulus of two numbers', () => {
    const result = operate('21', '7', '%');
    expect(result).toBe('0');
  });

  it('should return error message when modulus by zero', () => {
    const result = operate('21', '0', '%');
    expect(result).toBe("Can't find modulo as can't divide by 0.");
  });

  it('should throw an error for unknown operations', () => {
    expect(() => {
      operate('5', '7', '#');
    }).toThrowError("Unknown operation '#'");
  });
});
