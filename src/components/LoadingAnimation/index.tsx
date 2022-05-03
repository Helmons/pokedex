import React from "react";
import { View } from "react-native";
import LottieView from 'lottie-react-native';

import loadingAnimation from '../../assets/animations/loading.json'

import { styles } from "./styles";


export function LoadingAnimation() {
    return (
        <View style={styles.container}>
            <LottieView
                style={{ width: 80, height: 110 }}
                source={require('../../assets/animations/loading.json')}
                resizeMode='cover'
                autoPlay
                loop={true}
            />
        </View>
    )
}