import React, { useEffect, useRef, useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Button,
    TextInput,
    Image
} from 'react-native'
import { useForm, Controller } from "react-hook-form"
import { AuthLayout } from '../../components'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { icons, FONTS, SIZES, COLORS } from '../../constants'
import { FormInput, TextButton, TextIconButton } from '../../components'


const schema = yup.object().shape({
    fullName: yup.string().required().min(3).max(200),
    email: yup.string().email().required().min(3).max(200),
    password: yup.string().required().min(8).max(200),
    confirmPassword: yup.string().required().min(8).max(200)
        .oneOf([yup.ref('password'), null], 'Passwords must match')
})


const Register = ({ navigation }) => {
    const [showPass, setShowPass] = useState(false)
    const { control, register, handleSubmit, formState: { errors, isValid } } = useForm({
        resolver: yupResolver(schema), mode: "onChange"
    })

    const onSubmit = data => console.log(data);

    return (
        <AuthLayout
            title="Getting started"
            subtitle="Create an account to continue"
        >
            <View
                style={{
                    flex: 1,
                    marginTop: SIZES.padding 
                }}

            >
                {/* Form Inputs  */}
                <Controller
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <FormInput
                            label="Full name"
                            placeholder='Full name'
                            autoCapitalize="none"
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            errorMsg={errors.firstName?.message}
                            autoCorrect={true}
                            containerStyle={{
                                marginTop: SIZES.radius
                            }}
                        />
                    )}
                    name="fullName"
                    defaultValue=""
                />
                <Controller
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <FormInput
                            label="Email"
                            autoCompleteType='email'
                            keyboardType='email-address'
                            placeholder='Email address'
                            autoCapitalize="none"
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            errorMsg={errors.email?.message}
                            autoCorrect={false}
                            containerStyle={{
                                marginTop: SIZES.radius
                            }}
                        />
                    )}
                    name="email"
                    defaultValue=""
                />
                <Controller
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <FormInput
                            label="Password"
                            autoCompleteType='password'
                            placeholder='Password'
                            autoCapitalize="none"
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            secureTextEntry={!showPass}
                            autoCorrect={false}
                            errorMsg={errors.password?.message}
                            containerStyle={{
                                marginTop: SIZES.radius
                            }}
                            appendComponent={
                                <TouchableOpacity
                                    style={{
                                        width: 40,
                                        alignItems: 'flex-end',
                                        justifyContent: 'center'
                                    }}
                                    onPress={() => setShowPass(!showPass)}
                                >
                                    <Image
                                        source={showPass ? icons.eye_close : icons.eye}
                                        style={{
                                            height: 20,
                                            width: 20,
                                            tintColor: COLORS.green
                                        }}
                                    />

                                </TouchableOpacity>
                            }
                        />
                    )}
                    name="password"
                    defaultValue=""
                />
                <Controller
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <FormInput
                            label="Confirm password"
                            autoCompleteType='password'
                            placeholder='Confirm password'
                            autoCapitalize="none"
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            secureTextEntry={true}
                            autoCorrect={false}
                            errorMsg={errors.confirmPassword?.message}
                            containerStyle={{
                                marginTop: SIZES.radius
                            }}
                        />
                    )}
                    name="confirmPassword"
                    defaultValue=""
                />

                {/* Sign In */}
                <TextButton
                    label="Register"
                    disabled={!isValid}
                    buttonContainerStyle={{
                        height: 50,
                        alignItems: 'center',
                        marginTop: SIZES.padding,
                        borderRadius: SIZES.radius,
                        backgroundColor: isValid ? COLORS.primary : COLORS.transparentPrimary
                    }}
                    onPress={handleSubmit(onSubmit)}
                />
                {/* Sign Up */}
                <View style={{
                    flexDirection: 'row',
                    marginTop: SIZES.radius,
                    justifyContent: 'center'
                }}>
                    <Text
                        style={{
                            color: COLORS.darkGray,
                            ...FONTS.body3
                        }}
                    >
                        Already have an account ?
                    </Text>

                    <TextButton
                        label='Login'
                        buttonContainerStyle={{
                            marginLeft: 3,
                            backgroundColor: null
                        }}
                        labelStyle={{
                            color: COLORS.blue,
                            ...FONTS.h3
                        }}
                        onPress={() => navigation.goBack()}

                    />
                </View>

            </View>

        </AuthLayout>
    )
}

export default Register;