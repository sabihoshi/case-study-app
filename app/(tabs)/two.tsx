import { StyleSheet } from 'react-native';
import EmailVerification from "@/components/EmailVerification";

export default function TabTwoScreen() {

    return (
        <EmailVerification/>
    );
}

const styles = StyleSheet.create({

    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
});
