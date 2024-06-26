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
        <View className="space-y-2 mx-6">
            <View className="flex-row justify-between items-center w-full px-2.5 my-1.5">
                <Text className="text-lg font-bold">All Notifications</Text>
                <Switch
                    trackColor={{false: '#ededed', true: '#00b4e6'}}
                    onValueChange={handleAllNotificationsToggle}
                    value={notifications.allNotifications}
                />
            </View>
            <View className="px-5 my-2.5 h-px bg-gray-200 dark:bg-white opacity-10"/>
            {(Object.keys(notifications) as Array<keyof NotificationsState>)
                .filter(key => key !== 'allNotifications')
                .map((key) => (
                    <View key={key} className="w-full">
                        <View className="flex-row justify-between items-center w-full px-2.5 my-1.5">
                            <Text className="text-lg font-bold">{notificationLabels[key]}</Text>
                            <Switch
                                trackColor={{false: '#25a5d0', true: '#25a5d0'}}
                                onValueChange={() => handleSingleNotificationToggle(key)}
                                value={notifications[key]}
                            />
                        </View>
                        <View className="px-5 my-2.5 h-px bg-gray-200 dark:bg-white opacity-10"/>
                    </View>
                ))}
        </View>
    );
};

export default NotificationSwitches;
