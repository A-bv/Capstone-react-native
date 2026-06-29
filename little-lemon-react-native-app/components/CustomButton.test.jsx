import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react-native';
import CustomButton from './CustomButton';

describe('CustomButton', () => {
  it('renders its title', () => {
    render(<CustomButton title="Sign In" handlePress={() => {}} />);
    expect(screen.getByText('Sign In')).toBeTruthy();
  });

  it('calls handlePress when pressed', () => {
    const handlePress = jest.fn();
    render(<CustomButton title="Sign In" handlePress={handlePress} />);

    fireEvent.press(screen.getByText('Sign In'));

    expect(handlePress).toHaveBeenCalledTimes(1);
  });

  it('does not call handlePress while loading', () => {
    const handlePress = jest.fn();
    render(<CustomButton title="Sign In" handlePress={handlePress} isLoading />);

    fireEvent.press(screen.getByText('Sign In'));

    expect(handlePress).not.toHaveBeenCalled();
  });
});
