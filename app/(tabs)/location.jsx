import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import icons from "../../constants/icons";

const LocationPermissionScreen = () => {
    const openRequestPermissionPage = async () => {
        // Open the locationtwo.jsx tab
    };

    return (
        <View className="p-12 space-y-4 flex-auto">

            <View className="flex-1 space-y-12 justify-center items-center">
                <View className="h-32 w-32 rounded-full justify-center items-center bg-slate-400">
                    <Image source={icons.location}/>
                </View>

                <View className="space-y-4">
                    <Text className="text-center font-outfitbold text-4xl ">Turn on location</Text>
                    <Text className="text-center font-outfitnormal text-sm">
                        Sharing your location allows us to help you improve your experience and meet potential matches!
                    </Text>
                </View>
            </View>

            <View className="h-20 space-y-4 justify-end">
                <TouchableOpacity className="bg-slate-300 p-4 rounded-full w-full" onPress={openRequestPermissionPage}>
                    <Text className="text-base text-slate-500 text-center font-outfitbold">Allow</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default LocationPermissionScreen;
