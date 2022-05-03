import React from 'react';
import { render } from '@testing-library/react-native'

import { Home } from '../../screens/Home';


test('check if show correctly search input text palceholder', () => {
    const { getByPlaceholderText } = render(<Home/>)

    const inputName = getByPlaceholderText('Buscar...')

    expect(inputName.props.placeholder).toBeTruthy()
})

test('check if data has been loaded', () => {
    const { getByTestId } = render(<Home/>)

    const inputName = getByTestId('input-search')

    expect(inputName.props.value).toEqual('')
})