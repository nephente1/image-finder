import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { ButtonComponent } from '../components/Button/ButtonComponent';

describe('ButtonComponent', () => {
  it('renders with the correct name', () => {
    render(<ButtonComponent name="Click Me" />);

    // Check if the button is rendered with the correct text
    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toBeInTheDocument();
  });

  it('calls onClick function when clicked', () => {
    const handleClick = vi.fn(); // Create a mock function
    render(<ButtonComponent name="Click Me" onClick={handleClick} />);

    const button = screen.getByRole('button', { name: /click me/i });

    // Simulate a click event
    fireEvent.click(button);

    // Assert that the onClick function was called
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('does not crash when no onClick prop is provided', () => {
    render(<ButtonComponent name="No Click" />);

    const button = screen.getByRole('button', { name: /no click/i });

    // Ensure the button renders correctly without crashing
    expect(button).toBeInTheDocument();
  });
});
