import React from "react";
import {View} from 'react-native';
import {gStyle} from './components/gstyle';
import * as Font from 'expo-font';
import {useState} from "react";
import AppLoading from 'expo-app-loading';
import MainStack from'./Navigation';

const fonts = () => Font.loadAsync({
    'mt-bold': require('./fonts/Montserrat-Bold.ttf'),
    'mt-light': require('./fonts/Montserrat-Light.ttf'),
})

const App = () => {

    const [font, setFont] = useState(false);


    if (font) {
        return (
                <MainStack/>
        );
    } else {
        return (
            <AppLoading
                startAsync={fonts}
                onFinish={() => setFont(true)}
                onError={console.warn}/>
        )
    }
};
export default App