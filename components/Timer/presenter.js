import React, {Component} from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import Button from "../Button";

class Timer extends Component{

    componentWillRecieveProps(nexrProps){
        const currentProps= this.props;
        if(!currentProps.isPlaying && nexrProps.isPlaying){
            
        }
    }

    render(){
        const {
            isPlaying,
            elapsedTime,
            timeDuration,
            startTimer,
            restartTimer,
            addSecond
        } = this.props;
        return(
            <View style={style.container}>
                <StatusBar barStyle={"light-content"} />
                <View style={style.upper}>
                    <Text style={style.time}>25 : 00</Text>
                </View>
                <View style={style.lower}>
                    {!isPlaying && {
                        <Button onPress={startTimer} iconName="play-circle-o" />
                    }}
                    {isPlaying && {
                        <Button onPress={restartTimer} iconName="stop-circle-o" />
                    }}
                </View>
            </View>
        )
    }
}

const style = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor:"gray"
    },
    upper : {
        flex : 2,
        justifyContent: "center",
        alignItems: "center"
    },
    lower : {
        flex : 1,
        justifyContent: "center",
        alignItems: "center"
    },
    time : {
        fontSize:120,
        color:"white",
        fontWeight: "100"
    }
});

export default Timer;