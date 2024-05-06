import {StyleSheet} from 'react-native';
import PushNotificationSettings from "@/components/PushNotificationSettings";
import React from "react";
import {View} from "@/components/Themed";

export default function TabOneScreen() {
    return (
        <View style={styles.container}>
            <PushNotificationSettings/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    separator: {
        paddingHorizontal: 20,
        marginVertical: 9,
        height: 1
    },
});
