import 'react-native';
import React from 'react';
import {Caption} from '../src/components/homeScreen/PostCaption'
import {render, screen} from '@testing-library/react-native'

describe("rendr caption ",()=>
{
    afterAll(() => console.log('1 - afterAll'));
    test('renders correctly', () => {
        render(<Caption description="test caption"/>)
        const caption=screen.getByText("test caption");
        expect(caption).toBeTruthy()    
        
        });
})

