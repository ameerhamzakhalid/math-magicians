import { cleanup } from '@testing-library/react';
import calculate from '../../logic/calculate';

afterEach(cleanup);

describe('Verificate the math operations', () => {
  test('addition', () => {
    const operationArgs = { total: 5, next: 20, operation: '+' };
    const result = calculate(operationArgs, operationArgs.operation);
    expect(result.total).toBe('25');
  });

  it('substraction', () => {
    const operationArgs = { total: 25, next: 5, operation: '-' };
    const result = calculate(operationArgs, operationArgs.operation);
    expect(result.total).toBe('20');
  });

  it('division', () => {
    const operationArgs = { total: 30, next: 10, operation: '÷' };
    const result = calculate(operationArgs, operationArgs.operation);
    expect(result.total).toBe('3');
  });

  it('multiplication', () => {
    const operationArgs = { total: 35, next: 5, operation: 'x' };
    const result = calculate(operationArgs, operationArgs.operation);
    expect(result.total).toBe('175');
  });
});
