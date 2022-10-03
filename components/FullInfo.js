import React from "react";
import {Button, Text, View} from 'react-native';
import {gStyle} from './gstyle';


const FullInfo = ({route}) => {
    // const loadScene=()=>{
    // }

    return (
        <View style={gStyle.main}>
            <Text style={gStyle.title}>{route.params.anons}</Text>
            <Text>{route.params.full}</Text>
        </View>
    );

}

export default FullInfo