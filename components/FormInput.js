import React from 'react';
import { Text, View, TextInput, Button, Alert } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { FONTS, COLORS, SIZES } from '../constants'


const FormInput = ({
    containerStyle,
    label,
    placeholder,
    inputStyle,
    value,
    autoCorrect,
    prependComponent,
    appendComponent,
    onChangeText,
    onBlur,
    secureTextEntry,
    keyboardType= 'default',
    autoCompleteType='off',
    autoCapitalize='none',
    errorMsg= ''
}) => {
    return (
        <View style={{ ...containerStyle}}>
            {/* Label & Error msg */}
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }} >
                <Text style={{ color: COLORS.gray, ...FONTS.body4 }}>
                    {label}
                </Text>
                <Text style={{ color: COLORS.red, ...FONTS.body4 }}>
                   {errorMsg}
                </Text>
            </View>

            {/* Text input */}
            <View
                style={{
                    flexDirection: 'row',
                    height: 55,
                    paddingHorizontal: SIZES.padding,
                    marginTop: SIZES.base,
                    borderRadius: SIZES.radius,
                    backgroundColor: COLORS.lightGray1

                }}
            >
                {prependComponent}

                <TextInput
                    style={{
                        flex: 1,
                        ...inputStyle
                    }}
                    value={value}
                    placeholder={placeholder}
                    autoCorrect={autoCorrect}
                    placeholderTextColor={COLORS.gray}
                    secureTextEntry={secureTextEntry}
                    keyboardType={keyboardType}
                    onBlur={onBlur}
                    onChangeText={onChangeText}
                    autoCompleteType={autoCompleteType}
                    autoCapitalize={autoCapitalize}
                />

                {appendComponent}

            </View>

        </View>
    )

}
export default FormInput