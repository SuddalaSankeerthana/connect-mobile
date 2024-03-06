import 'react-native';
import React from 'react';
import { Caption } from '../src/components/Caption';
import {render, screen} from '@testing-library/react-native'


test('renders correctly', () => {
render(<Caption description="test caption"/>)
const caption=screen.getByText("test caption");
expect(caption).toBeTruthy()    

});
