import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import icons from "../../constants/icons";

const LocationPermissionScreen = () => {
    const onAccept = async () => {
        // Open the location settings in the device

    }

    const skipLocationPermission = async () => {

    };

    return (
        <View className="p-12 space-y-4 flex-auto">

            <View className="flex-1 space-y-12 justify-center items-center">
                <View className="h-32 w-32 rounded-full justify-center items-center bg-slate-400">
                    <Image source={icons.location} className=""/>
                </View>

                <View className="space-y-4">
                    <Text className="text-center font-outfitbold text-4xl ">We value your privacy</Text>
                    <Text className="text-center font-outfitnormal text-sm">
                        We use tools to measure the audience of our app, personalize ads, enhance Ratio’s own marketing
                        operations, and enable social features. These tools do not track you across apps and websites
                    </Text>
                </View>
            </View>

            <View className="h-20 space-y-4 justify-end">
                <TouchableOpacity className="bg-cyan-900 p-4 rounded-full w-full" onPress={onAccept}>
                    <Text className="text-base text-slate-100 text-center font-outfitbold">Accept</Text>
                </TouchableOpacity>

                <TouchableOpacity className="bg-slate-300 p-4 rounded-full w-full" onPress={skipLocationPermission}>
                    <Text className="text-base text-gray-700 text-center font-outfitbold">Customize</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default LocationPermissionScreen;
