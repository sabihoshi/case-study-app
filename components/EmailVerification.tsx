import React, { useEffect, useState } from 'react';
import { Pressable, StyleSheet, TextInput } from 'react-native';
import { YStack } from "tamagui";
import { Text, View } from "@/components/Themed";

const EmailVerification = () => {
    const [verificationEmailSent, setVerificationEmailSent] = useState(false);
    const [email, setEmail] = useState('');
    const [isEmailValid, setIsEmailValid] = useState(true);

    const validateEmail = (email: string) => {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    const handleResendVerificationEmail = () => {
        if (!validateEmail(email)) {
            setIsEmailValid(false);
            return;
        }

        setIsEmailValid(true);
        setVerificationEmailSent(true);

        // Hide the message after 15 seconds
        setTimeout(() => {
            setVerificationEmailSent(false);
        }, 15000);
    }

    const handleEmailChange = (text: string) => {
        setEmail(text);
        setIsEmailValid(true);
        setVerificationEmailSent(false);
    }

    useEffect(() => {
        setVerificationEmailSent(false);
    }, []);

    return (
        <YStack gap="$4" paddingVertical="$4">
            <Text style={styles.label}>Email</Text>
            <View>
                <TextInput
                    style={[styles.text, !isEmailValid && styles.error]}
                    placeholder="email@example.com"
                    onChangeText={handleEmailChange}
                />
            </View>
            {verificationEmailSent && (
                <Text style={styles.verificationEmailSent}>Check your email! We sent you a verification link.</Text>
            )}
            <View>
                <Pressable style={styles.container} onPress={handleResendVerificationEmail}>
                    <Text style={[styles.text, styles.button]}>Resend Verification Email</Text>
                </Pressable>
            </View>
        </YStack>
    );
};

const styles = StyleSheet.create({
    container: {},
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        paddingVertical: 15,
        paddingHorizontal: 20,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        paddingHorizontal: 20,
        color: '#787878'
    },
    button: {
        fontWeight: 'bold',
        borderRadius: 5,
        textAlign: 'center',
    },
    verificationEmailSent: {
        fontSize: 16,
        fontWeight: 'bold',
        paddingHorizontal: 20,
        color: '#00b4e6'
    },
    error: {
        borderColor: 'red',
        borderWidth: 1
    }
});

export default EmailVerification;
