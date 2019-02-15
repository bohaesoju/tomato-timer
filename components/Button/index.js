import React from 'react';
import { TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

function Button(iconName, onPress){
    return(
        <TouchableOpacity onPress={onPress}>
            <FontAwesome name={iconName} size={80} color="white"/>
        </TouchableOpacity>

    )
}

export default Button;