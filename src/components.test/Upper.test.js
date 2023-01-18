import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Upper from '../components/Upper';

describe('Upper', () => {
  it('renders the correct text', () => {
    const { getByText } = render(<Upper total={1} operation="+" next="2" />);
    const input = getByText('1 + 2');
    expect(input).toMatchSnapshot();
  });
});
