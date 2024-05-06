import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import {Tabs} from 'expo-router';

import Colors from '@/constants/Colors';
import {useColorScheme} from '@/components/useColorScheme';
import {useClientOnlyValue} from '@/components/useClientOnlyValue';

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
    name: React.ComponentProps<typeof FontAwesome>['name'];
    color: string;
}) {
    return <FontAwesome size={28} style={{marginBottom: -3}} {...props} />;
}

export default function TabLayout() {
    const colorScheme = useColorScheme();

    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
                // Disable the static render of the header on web
                // to prevent a hydration error in React Navigation v6.
                headerShown: useClientOnlyValue(false, true),
            }}>
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Test Notifications',
                    tabBarIcon: ({color}) => <TabBarIcon name="bell" color={color}/>,
                }}
            />
            <Tabs.Screen
                name="two"
                options={{
                    title: 'Email',
                    tabBarIcon: ({color}) => <TabBarIcon name="envelope" color={color}/>,
                }}
            />
            <Tabs.Screen
                name="signup"
                options={{
                    title: 'Signup',
                    tabBarIcon: ({color}) => <TabBarIcon name="user-plus" color={color}/>,
                }}
            />
            <Tabs.Screen
                name="location"
                options={{
                    title: 'Location',
                    tabBarIcon: ({color}) => <TabBarIcon name="map-marker" color={color}/>,
                }}
            />
            <Tabs.Screen
                name="locationtwo"
                options={{
                    title: 'Location 2',
                    tabBarIcon: ({color}) => <TabBarIcon name="map-marker" color={color}/>,
                }}
            />
            <Tabs.Screen
                name="notifications"
                options={{
                    title: 'Notifications',
                    tabBarIcon: ({color}) => <TabBarIcon name="bell" color={color}/>,
                }}
            />
            <Tabs.Screen
                name="notificationstwo"
                options={{
                    title: 'Notifications 2',
                    tabBarIcon: ({color}) => <TabBarIcon name="bell" color={color}/>,
                }}
            />
            <Tabs.Screen
                name="privacy"
                options={{
                    title: 'Privacy',
                    tabBarIcon: ({color}) => <TabBarIcon name="lock" color={color}/>,
                }}
            />
        </Tabs>
    );
}
