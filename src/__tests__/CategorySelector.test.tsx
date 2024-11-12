import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { CategorySelector } from '../components/CategorySelector/CategorySelector';
import { StateContext } from '../context/appContext';

const mockUpdateSelectedOption = vi.fn();
const mockUpdateCustomOption = vi.fn();
const mockUserData = {
  name: '',
  surname: '',
};

const renderWithContext = (selectedOption: string) => {
  return render(
    <StateContext.Provider
      value={{
        updateUserData: vi.fn(),
        userData: mockUserData,
        selectedOption,
        updateSelectedOption: mockUpdateSelectedOption,
        customOption: '',
        updateCustomOption: mockUpdateCustomOption,
      }}
    >
      <CategorySelector />
    </StateContext.Provider>,
  );
};

describe('CategorySelector Component', () => {
  beforeEach(() => {
    vi.clearAllMocks(); // Clear previous calls to mock functions
  });

  it('renders correctly and displays the heading', () => {
    renderWithContext('default'); // Provide a default option

    expect(screen.getByText(/choose an image category/i)).toBeInTheDocument();
    expect(screen.getByRole('combobox')).toBeInTheDocument(); // Check if select element is rendered
  });

  it('calls updateSelectedOption when a new option is selected', () => {
    renderWithContext('default');

    const select = screen.getByRole('combobox');

    // Simulate selecting a new option
    fireEvent.change(select, { target: { value: 'other' } });

    // Assert that the updateSelectedOption function was called with the correct argument
    expect(mockUpdateSelectedOption).toHaveBeenCalledWith('other');
  });

  it('renders input and button when "other" is selected', () => {
    renderWithContext('other'); // Set selected option to 'other'

    expect(screen.getByPlaceholderText(/type your category/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument();
  });

  it('calls updateCustomOption with input value when button is clicked', () => {
    renderWithContext('other');

    const input = screen.getByPlaceholderText(/type your category/i);
    const button = screen.getByRole('button', { name: /search/i });

    // Simulate user input
    fireEvent.change(input, { target: { value: 'Custom Category' } });

    // Click the button
    fireEvent.click(button);

    // Assert that updateCustomOption was called with the correct value
    expect(mockUpdateCustomOption).toHaveBeenCalledWith('Custom Category');
  });
});
