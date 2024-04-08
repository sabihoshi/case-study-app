import { StyleSheet, Switch } from 'react-native';

import React, { useState } from 'react';
import { Text, View } from '@/components/Themed';

interface NotificationsState {
    allNotifications: boolean;
    newMatches: boolean;
    newMessage: boolean;
    newLikes: boolean;
    announcements: boolean;
}

const NotificationSwitches: React.FC = () => {
    const [notifications, setNotifications] = useState<NotificationsState>({
        allNotifications: false,
        newMatches: false,
        newMessage: false,
        newLikes: false,
        announcements: false
    });

    const notificationLabels: Record<keyof NotificationsState, string> = {
        allNotifications: 'All Notifications',
        newMatches: 'New Matches',
        newMessage: 'New Message',
        newLikes: 'New Likes',
        announcements: 'Announcements\nEvents on Ratio',
    };

    const handleAllNotificationsToggle = () => {
        const newAllNotificationsValue = !notifications.allNotifications;
        setNotifications({
            allNotifications: newAllNotificationsValue,
            newMatches: newAllNotificationsValue,
            newMessage: newAllNotificationsValue,
            newLikes: newAllNotificationsValue,
            announcements: newAllNotificationsValue,
        });
    };

    const handleSingleNotificationToggle = (key: keyof NotificationsState) => {
        const newValue = !notifications[key];
        const updatedNotifications = {...notifications, [key]: newValue};

        // If one of the switches is turned off, turn off 'All Notifications' as well
        if (!newValue) {
            updatedNotifications.allNotifications = false;
        }

        // If all switches are on, turn 'All Notifications' on
        const allOn = Object.keys(updatedNotifications).every(
            (k) => updatedNotifications[k as keyof NotificationsState] || k === 'allNotifications'
        );
        if (allOn) {
            updatedNotifications.allNotifications = true;
        }

        setNotifications(updatedNotifications);
    };

    return (
        <View>
            <View style={styles.switchContainer}>
                <Text style={styles.switchLabel}>All Notifications</Text>
                <Switch
                    trackColor={{false: '#ededed', true: '#00b4e6'}}
                    onValueChange={handleAllNotificationsToggle}
                    value={notifications.allNotifications}
                />
            </View>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)"/>
            {(Object.keys(notifications) as Array<keyof NotificationsState>)
                .filter(key => key !== 'allNotifications')
                .map((key) => (
                    <View key={key} style={{width: '100%'}}>
                        <View style={styles.switchContainer}>
                            <Text style={styles.switchLabel}>{notificationLabels[key]}</Text>
                            <Switch
                                trackColor={{false: '#ededed', true: '#00b4e6'}}
                                onValueChange={() => handleSingleNotificationToggle(key)}
                                value={notifications[key]}/>
                        </View>
                        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)"/>
                    </View>
                ))}
        </View>
    );
};

const styles = StyleSheet.create({
    switchContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: 20,
        marginVertical: 5
    },
    separator: {
        paddingHorizontal: 20,
        marginVertical: 9,
        height: 1
    },
    switchLabel: {
        fontSize: 16,
        fontWeight: 'bold'
    }
});

export default NotificationSwitches;
