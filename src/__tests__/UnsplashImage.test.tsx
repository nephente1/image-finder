import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect, beforeEach, vi, Mock } from 'vitest';
import { useImageQuery } from '../api';
import { UnsplashImage } from '../components/UnsplashImage/UnsplashImage';
import { StateContext } from '../context/appContext';

// Mock the useImageQuery hook
vi.mock('../api', () => ({
  useImageQuery: vi.fn(),
}));

// Mock the navigate function
const mockNavigate = vi.fn();

vi.mock('react-router', () => ({
  useNavigate: () => mockNavigate,
}));

const mockUserData = {
  name: '',
  surname: '',
};

const renderWithContext = (category: string, customOption: string) => {
  return render(
    <MemoryRouter>
      <StateContext.Provider
        value={{
          updateUserData: vi.fn(),
          userData: mockUserData,
          selectedOption: category,
          updateSelectedOption: vi.fn(),
          customOption: customOption,
          updateCustomOption: vi.fn(),
        }}
      >
        <UnsplashImage category={category} />
      </StateContext.Provider>
    </MemoryRouter>,
  );
};

describe('UnsplashImage Component', () => {
  beforeEach(() => {
    vi.clearAllMocks(); // Clear previous calls to mock functions
  });

  it('renders loading state', () => {
    (useImageQuery as Mock).mockReturnValue({
      data: null,
      isLoading: true,
      error: null,
      refetch: vi.fn(),
    });

    renderWithContext('nature', '');

    expect(screen.getByTestId('loader')).toBeInTheDocument();
  });

  it('renders error state', () => {
    const errorMessage = 'Failed to fetch image';
    (useImageQuery as Mock).mockReturnValue({
      data: null,
      isLoading: false,
      error: new Error(errorMessage),
      refetch: vi.fn(),
    });

    renderWithContext('nature', '');

    expect(screen.getByText(/error:/i)).toBeInTheDocument();
    expect(screen.getByText(/refresh data/i)).toBeInTheDocument();
  });

  it('renders message when no category is selected', () => {
    (useImageQuery as Mock).mockReturnValue({
      data: null,
      isLoading: false,
      error: null,
      refetch: vi.fn(),
    });

    renderWithContext('', '');

    expect(screen.getByText(/please select an image category/i)).toBeInTheDocument();
  });

  it('renders image when data is fetched successfully', () => {
    const mockImage = {
      id: '1',
      urls: { regular: 'https://example.com/image.jpg' },
      alt_description: 'A beautiful scenery',
    };

    (useImageQuery as Mock).mockReturnValue({
      data: mockImage,
      isLoading: false,
      error: null,
      refetch: vi.fn(),
    });

    renderWithContext('nature', '');

    expect(screen.getByText(/picture from/i)).toBeInTheDocument();
    expect(screen.getByRole('img')).toHaveAttribute('src', mockImage.urls.regular);
  });

  it('navigates to /generate on Accept button click', () => {
    const mockImage = {
      id: '1',
      urls: { regular: 'https://example.com/image.jpg' },
      alt_description: 'A beautiful scenery',
    };

    (useImageQuery as Mock).mockReturnValue({
      data: mockImage,
      isLoading: false,
      error: null,
      refetch: vi.fn(),
    });

    renderWithContext('nature', '');

    fireEvent.click(screen.getByRole('button', { name: /accept/i }));

    expect(mockNavigate).toHaveBeenCalledWith('/generate');
  });

  it('calls refetch on Reject button click', () => {
    const mockRefetch = vi.fn();

    (useImageQuery as Mock).mockReturnValue({
      data: null,
      isLoading: false,
      error: null,
      refetch: mockRefetch,
    });

    renderWithContext('nature', '');

    fireEvent.click(screen.getByRole('button', { name: /reject/i }));

    expect(mockRefetch).toHaveBeenCalled();
  });
});
