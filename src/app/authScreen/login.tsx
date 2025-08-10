import { ImageBackground, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = () => {
        // TODO: Add your login logic (e.g., Appwrite)
        console.log('Login pressed with:', email, password);
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{ flex: 1 }}
        >
            {/* <ImageBackground
                source={require('../../assets/images/background.jpg')}
                style={styles.background}
                resizeMode="cover"
            >
                <View style={styles.overlay}>
                    <View style={styles.card}>
                        <Text style={styles.title}>Login</Text>

                        <TextInput
                            placeholder="Email"
                            value={email}
                            onChangeText={setEmail}
                            style={styles.input}
                            keyboardType="email-address"
                            autoCapitalize="none"
                            placeholderTextColor="#aaa"
                        />

                        <View style={styles.passwordContainer}>
                            <TextInput
                                placeholder="Password"
                                value={password}
                                onChangeText={setPassword}
                                style={styles.passwordInput}
                                secureTextEntry={!showPassword}
                                placeholderTextColor="#aaa"
                            />
                            <TouchableOpacity
                                onPress={() => setShowPassword(!showPassword)}
                                style={styles.eyeIcon}
                            >
                                <Ionicons
                                    name={showPassword ? 'eye' : 'eye-off'}
                                    size={22}
                                    color="#555"
                                />
                            </TouchableOpacity>
                        </View>

                        <TouchableOpacity style={styles.button} onPress={handleLogin}>
                            <Text style={styles.buttonText}>Log In</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground> */}


            <View style={styles.background}>
                <Text style={styles.title}>Welcome Back</Text>
                <Text style={styles.subTitle}>Login to continue</Text>

                <TextInput
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                    style={styles.input}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    placeholderTextColor="#aaa"
                />

                <View style={styles.passwordContainer}>
                    <TextInput
                        placeholder="Password"
                        value={password}
                        onChangeText={setPassword}
                        style={styles.passwordInput}
                        secureTextEntry={!showPassword}
                        placeholderTextColor="#aaa"
                    />
                    <TouchableOpacity
                        onPress={() => setShowPassword(!showPassword)}
                        style={styles.eyeIcon}
                    >
                        <Ionicons
                            name={showPassword ? 'eye' : 'eye-off'}
                            size={22}
                            color="#555"
                        />
                    </TouchableOpacity>

                </View>

                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
            </View>


        </KeyboardAvoidingView>
    )
}

export default Login


const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
        backgroundColor: '#000000',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#FFFFFF',
        textAlign: 'center',
        marginBottom: 12,
    },
    subTitle: {
        fontSize: 16,
        color: '#FFFFFF',
        textAlign: 'center',
        marginBottom: 20,
    },
    input: {
        backgroundColor: '#f0f0f0',
        padding: 12,
        borderRadius: 8,
        fontSize: 16,
        marginBottom: 15,
        color: '#000',
    },
    passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        borderRadius: 8,
        marginBottom: 15,
    },
    passwordInput: {
        flex: 1,
        padding: 12,
        fontSize: 16,
        color: '#000',
    },
    eyeIcon: {
        paddingHorizontal: 12,
    },
    button: {
        backgroundColor: '#0066cc',
        padding: 14,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});