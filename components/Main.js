import React, {useState} from "react";
import {Text, View, TouchableOpacity,FlatList} from 'react-native';
import {gStyle} from './gstyle';


const Main = ({navigation}) => {
    const loadScene = () => {
        ;
    }
    const [news, setNews] = useState(
        [
            {name: 'Google', anons: 'Google!!!', full: 'Google is cool'},
            {name: 'Apple', anons: 'Apple!!!', full: 'Apple is cool'},
            {name: 'FaceBook', anons: 'FaceBook!!!', full: 'FaceBook is cool'}
        ]
    )


    return (
        <View style={gStyle.main}>
            <Text style={gStyle.title}>Main paige</Text>
            <FlatList data={news} renderItem={({item})=>(
                <TouchableOpacity onPress={()=>navigation.navigate('FullInfo',item)}>
                <Text>{item.name}</Text>
                </TouchableOpacity>
                )}/>
        </View>
    );

}

export default Main