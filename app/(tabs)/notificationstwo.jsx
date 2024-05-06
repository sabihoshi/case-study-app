import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import icons from "../../constants/icons";

const LocationPermissionScreen = () => {
    const openSettings = async () => {
        // Open the location settings in the device

    }

    const skipLocationPermission = async () => {

    };

    return (
        <View className="p-12 space-y-4 flex-auto">

            <View className="flex-1 space-y-12 justify-center items-center">
                <View className="h-32 w-32 rounded-full justify-center items-center bg-slate-400">
                    <Image source={icons.notifications}/>
                </View>

                <View className="space-y-4">
                    <Text className="text-center font-outfitbold text-4xl ">Turn on notifications</Text>
                    <Text className="text-center font-outfitnormal text-sm">
                        Don’t miss when you receive a match or a message from your potential dates!
                    </Text>
                </View>
            </View>

            <View className="h-20 space-y-4 justify-end">
                <TouchableOpacity className="bg-cyan-900 p-4 rounded-full w-full" onPress={openSettings}>
                    <Text className="text-base text-slate-100 text-center font-outfitbold">Open settings</Text>
                </TouchableOpacity>

                <TouchableOpacity className="bg-slate-300 p-4 rounded-full w-full" onPress={skipLocationPermission}>
                    <Text className="text-base text-gray-700 text-center font-outfitbold">Remind me later</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default LocationPermissionScreen;
