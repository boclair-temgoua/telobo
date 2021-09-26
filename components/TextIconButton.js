import React from 'react';
import {
    Text,
    TouchableOpacity,
    Image,
    StyleSheet
} from 'react-native'
import { FONTS, COLORS } from '../constants'


const TextIconButton = ({ 
    label,
    labelStyle,
    icon,
    iconPosition,
    iconStyle,
    disabled,
    onPress,
    containerStyle
 }) => {
    return (
        <TouchableOpacity
            style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                ...containerStyle,
            }}
            disabled={disabled}
            onPress={onPress}
        >
            {iconPosition == 'LEFT' && (
                <Image
                    source={icon}
                    style={{
                        ...style.image,
                        ...iconStyle,
                    }}
                />
            )}

            <Text style={{
                ...FONTS.body3,
                ...labelStyle
            }}>
                {label}
            </Text>

            {iconPosition == 'RIGHT' && (
                <Image
                    source={icon}
                    style={{
                        ...style.image,
                        ...iconStyle,
                    }}
                />
            )}
            
        </TouchableOpacity>
    )

}

const style = StyleSheet.create({
    image: {
        marginLeft: 5,
        width: 20,
        height: 20,
        tintColor: COLORS.black
    }
})
export default TextIconButton