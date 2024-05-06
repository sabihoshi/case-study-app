import React, {useState} from 'react';
import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import icons from "../../constants/icons";

const SignupForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [dob, setDob] = useState('');
    const [selectedGender, setSelectedGender] = useState(null);
    const [city, setCity] = useState('');

    const [errors, setErrors] = useState({});

    const validateForm = () => {
        let isValid = true;
        let newErrors = {};

        if (name.trim() === '') {
            newErrors.name = 'Please enter your first name';
            isValid = false;
        }
        if (email.trim() === '') {
            newErrors.email = 'Please enter your email address';
            isValid = false;
        } else if (!email.includes('@')) {
            newErrors.email = 'Please enter a valid email address';
            isValid = false;
        }
        if (dob.trim() === '') {
            newErrors.dob = 'Please enter your date of birth';
            isValid = false;
        }
        if (!selectedGender) {
            newErrors.gender = 'Please select gender';
            isValid = false;
        }
        if (city.trim() === '') {
            newErrors.city = 'Please enter your home city';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = () => {
        if (validateForm()) {
            // Submit data or further processing
            console.log('Form submitted');
        }
    };

    return (
        <View className="p-12 h-full space-y-4">
            <Text className="text-3xl font-outfitbold">Hi, Welcome!</Text>

            <View className="space-y-4 flex-grow font-outfitnormal">
                <Text className="text-lg font-outfitsemibold">First Name</Text>
                <TextInput
                    placeholder="Your name"
                    className={` border-b pb-2 mb-2 pl-3 border-gray-300`}
                    value={name}
                    onChangeText={setName}
                />
                {errors.name && <Text className="text-red-500 text-sm mb-2">{errors.name}</Text>}

                <Text className="text-lg font-outfitsemibold mb-2">Email address</Text>
                <TextInput
                    placeholder="Your email"
                    className={`border-b pb-2 mb-2 pl-3 border-gray-300`}
                    keyboardType="email-address"
                    value={email}
                    onChangeText={setEmail}
                />
                {errors.email && <Text className="text-red-500 text-sm mb-2">{errors.email}</Text>}

                <Text className="font-outfitsemibold mb-2">Date of Birth</Text>
                <View className="flex-row border-b pb-2 mb-2 pl-3 justify-between border-gray-30">
                    <TextInput
                        placeholder="Month/Day/Year"
                        className=""
                        value={dob}
                        onChangeText={setDob}
                    />
                    <TouchableOpacity>
                        <Image source={icons.calendar} className="m-1 "/>
                    </TouchableOpacity>
                </View>

                {errors.dob && <Text className="text-red-500 text-sm mb-2">{errors.dob}</Text>}

                <Text className="font-outfitsemibold mb-2">Gender</Text>
                <View className="flex-row mb-4">
                    <TouchableOpacity
                        className={
                            `flex-1 mr-2 p-3 justify-center items-center rounded-lg border
                            ${errors.gender ? 'border-red-500' :
                                selectedGender === 'Male'
                                    ? 'bg-blue-300 border-blue-500'
                                    : 'bg-transparent border-gray-300'}`
                        }

                        onPress={() => setSelectedGender('Male')}
                    >
                        <Text>♂️ Male</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        className={
                            `flex-1 ml-2 p-3 justify-center items-center rounded-lg border
                            ${errors.gender ? 'border-red-500' :
                                selectedGender === 'Female'
                                    ? 'bg-pink-300 border-pink-500'
                                    : 'bg-transparent border-gray-300'}
                            `
                        }
                        onPress={() => setSelectedGender('Female')}
                    >
                        <Text>♀️ Female</Text>
                    </TouchableOpacity>
                </View>
                {errors.gender && <Text className="text-red-500 text-sm mb-2">{errors.gender}</Text>}

                <Text className="font-outfitsemibold mb-2">Where do you live</Text>
                <TextInput
                    placeholder="Your home city"
                    className={`border-b pb-2 pl-3 border-gray-300`}
                    value={city}
                    onChangeText={setCity}
                />
                {errors.city && <Text className="text-red-500 text-sm mb-2">{errors.city}</Text>}
            </View>

            <TouchableOpacity className="bg-slate-300 p-3 rounded-full" onPress={handleSubmit}>
                <Text className="text-base text-slate-500 text-center font-outfitbold">Next</Text>
            </TouchableOpacity>
        </View>
    );
};

export default SignupForm;
