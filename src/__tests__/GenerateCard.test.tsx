import { useQueryClient } from '@tanstack/react-query';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect, beforeEach, vi, Mock } from 'vitest';
import { StateContext } from '../context/appContext';
import { GenerateCard } from '../pages/GenerateCard';

// Mock the useQueryClient hook
vi.mock('@tanstack/react-query', () => ({
  useQueryClient: vi.fn(),
}));

// Mock the navigate function
const mockNavigate = vi.fn();
vi.mock('react-router', () => ({
  useNavigate: () => mockNavigate,
}));

const renderWithContext = (selectedOption: string, customOption: string, userData: { name: string; surname: string }) => {
  return render(
    <MemoryRouter>
      <StateContext.Provider
        value={{
          updateUserData: vi.fn(),
          userData: userData,
          selectedOption: selectedOption,
          updateSelectedOption: vi.fn(),
          customOption: customOption,
          updateCustomOption: vi.fn(),
        }}
      >
        <GenerateCard />
      </StateContext.Provider>
    </MemoryRouter>,
  );
};

describe('GenerateCard Component', () => {
  beforeEach(() => {
    vi.clearAllMocks(); // Clear previous calls to mock functions
  });

  it('renders correctly with cached image and user data', () => {
    const mockImage = {
      urls: { regular: 'https://example.com/image.jpg' },
    };

    (useQueryClient as Mock).mockReturnValue({
      getQueryData: vi.fn().mockReturnValue(mockImage),
    });

    const userData = { name: 'John', surname: 'Doe' };
    renderWithContext('nature', '', userData);

    expect(screen.getByText(/generate card/i)).toBeInTheDocument();
    expect(screen.getByText(/john doe/i)).toBeInTheDocument();
    expect(screen.getByRole('img')).toHaveAttribute('src', mockImage.urls.regular);
  });

  it('renders message when no cached image or user data is available', () => {
    (useQueryClient as Mock).mockReturnValue({
      getQueryData: vi.fn().mockReturnValue(undefined),
    });

    const userData = { name: '', surname: '' };
    renderWithContext('nature', '', userData);

    expect(screen.getByText(/please select an image category and fill your name and surname/i)).toBeInTheDocument();
  });

  it('navigates back when Back button is clicked', () => {
    const mockImage = {
      urls: { regular: 'https://example.com/image.jpg' },
    };

    (useQueryClient as Mock).mockReturnValue({
      getQueryData: vi.fn().mockReturnValue(mockImage),
    });

    const userData = { name: 'John', surname: 'Doe' };
    renderWithContext('nature', '', userData);

    fireEvent.click(screen.getByRole('button', { name: /back/i }));

    expect(mockNavigate).toHaveBeenCalledWith(-1);
  });
});
