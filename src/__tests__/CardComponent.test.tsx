import { render, screen } from '@testing-library/react';
import { describe, it, expect, beforeEach } from 'vitest';
import { CardComponent } from '../components/CardComponent/CardComponent';

describe('CardComponent', () => {
  beforeEach(() => {
    // Any setup that needs to happen before each test can go here
  });

  it('renders correctly with provided props', () => {
    const category = 'Nature';
    const name = 'John';
    const surname = 'Doe';
    const imageSrc = 'https://example.com/image.jpg';

    render(<CardComponent category={category} name={name} surname={surname} imageSrc={imageSrc} />);

    // Check if the image is rendered with the correct src and alt attributes
    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('src', imageSrc);
    expect(image).toHaveAttribute('alt', category);

    // Check if the name and surname are rendered correctly
    expect(screen.getByText(`${name} ${surname}`)).toBeInTheDocument();
  });

  it('renders without crashing when no props are provided', () => {
    render(<CardComponent category="" name="" surname="" imageSrc="" />);

    // Check if the component renders without any errors
    expect(screen.getByRole('img')).toHaveAttribute('alt', '');
  });
});
