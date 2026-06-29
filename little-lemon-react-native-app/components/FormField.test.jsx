import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react-native';
import FormField from './FormField';

describe('FormField', () => {
  it('renders its title label', () => {
    render(<FormField title="Email" value="" handleChangeText={() => {}} />);
    expect(screen.getByText('Email')).toBeTruthy();
  });

  it('shows the error message when an error is provided', () => {
    render(
      <FormField
        title="Email"
        value=""
        handleChangeText={() => {}}
        error="Email is required"
      />
    );
    expect(screen.getByText('Email is required')).toBeTruthy();
  });

  it('calls handleChangeText when the user types', () => {
    const handleChangeText = jest.fn();
    render(
      <FormField
        title="Email"
        value=""
        placeholder="you@example.com"
        handleChangeText={handleChangeText}
      />
    );

    fireEvent.changeText(screen.getByPlaceholderText('you@example.com'), 'jane@example.com');

    expect(handleChangeText).toHaveBeenCalledWith('jane@example.com');
  });
});
