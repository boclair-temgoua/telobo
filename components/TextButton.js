import React from 'react';
import {
    Text,
    TouchableOpacity,
    Image,
    StyleSheet
} from 'react-native'
import { FONTS, COLORS } from '../constants'


const TextButton = ({
    buttonContainerStyle,
    containerStyle,
    label,
    labelStyle,
    icon,
    iconPosition,
    iconStyle,
    onPress,
    disabled
}) => {
    return (
        <TouchableOpacity
            style={{
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: COLORS.primary,
                ...buttonContainerStyle,
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
                color: COLORS.white,
                ...FONTS.h3,
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
export default TextButton