import { render, screen, fireEvent } from '@testing-library/react';
import { Select } from '../components/Select/Select';

describe('Select component', () => {
  const mockOnChange = vi.fn();

  afterEach(() => {
    mockOnChange.mockClear();
  });

  it('renders correctly with given options', () => {
    const options = ['Option 1', 'Option 2', 'Option 3'];
    render(<Select options={options} value="" onChange={mockOnChange} />);

    expect(screen.getByLabelText(/option select/i)).toBeInTheDocument();

    options.forEach((option) => {
      expect(screen.getByText(option)).toBeInTheDocument();
    });

    expect(screen.getByText(/select an option/i)).toBeInTheDocument();
  });

  it('calls onChange when a valid option is selected', () => {
    const options = ['Option 1', 'Option 2'];
    render(<Select options={options} value="" onChange={mockOnChange} />);

    fireEvent.change(screen.getByRole('combobox'), { target: { value: 'Option 1' } });

    expect(mockOnChange).toHaveBeenCalledWith('Option 1');
  });

  it('does not call onChange when the default option is selected', () => {
    const options = ['Option 1', 'Option 2'];
    render(<Select options={options} value="" onChange={mockOnChange} />);

    fireEvent.change(screen.getByRole('combobox'), { target: { value: '' } });

    expect(mockOnChange).not.toHaveBeenCalled();
  });
});
