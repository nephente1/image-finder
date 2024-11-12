import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, beforeEach, expect, vi } from 'vitest';
import { Inputs } from '../components/Inputs/Inputs';
import { StateContext } from '../context/appContext';

const mockUpdateUserData = vi.fn();

const mockUserData = {
  name: '',
  surname: '',
};

const renderWithContext = (children: React.ReactNode) => {
  return render(
    <StateContext.Provider
      value={{
        updateUserData: mockUpdateUserData,
        userData: mockUserData,
        selectedOption: '',
        updateSelectedOption: vi.fn(),
        customOption: '',
        updateCustomOption: vi.fn(),
      }}
    >
      {children}
    </StateContext.Provider>,
  );
};

describe('Inputs Component', () => {
  beforeEach(() => {
    vi.clearAllMocks(); // Clear previous calls to mock functions
  });

  it('renders correctly and displays initial user data', () => {
    renderWithContext(<Inputs />);

    expect(screen.getByText(/Fill your name and surname/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/type your name/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/type your surname/i)).toBeInTheDocument();
  });

  it('updates user data on button click', () => {
    renderWithContext(<Inputs />);

    const nameInput = screen.getByPlaceholderText(/type your name/i);
    const surnameInput = screen.getByPlaceholderText(/type your surname/i);
    const button = screen.getByRole('button', { name: /set your data/i });

    // Simulate user input
    fireEvent.change(nameInput, { target: { value: 'John' } });
    fireEvent.change(surnameInput, { target: { value: 'Doe' } });

    // Click the button
    fireEvent.click(button);

    // Assert that the updateUserData function was called with correct arguments
    expect(mockUpdateUserData).toHaveBeenCalledWith('John', 'Doe');
  });

  it('displays updated user data after input', () => {
    mockUserData.name = 'Jane';
    mockUserData.surname = 'Doe';

    renderWithContext(<Inputs />);

    const nameInput = screen.getByPlaceholderText(/type your name/i);
    const surnameInput = screen.getByPlaceholderText(/type your surname/i);

    // Simulate user input
    fireEvent.change(nameInput, { target: { value: 'Jane' } });
    fireEvent.change(surnameInput, { target: { value: 'Doe' } });

    // Check if the updated values are displayed in the component
    expect(screen.getByText(/Jane Doe/i)).toBeInTheDocument();
  });
});
