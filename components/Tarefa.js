import React from "react"
import {View,Text,StyleSheet,Button} from "react-native"

const Tarefa = (props)=>{
    return(
        <View style={[ { margin: 10, padding: 10}, styles.item]}>
            <Text>{props.item}</Text>
            <Button title="Apagar" color={"red"} onPress={()=>props.delete(props.item)} />

        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderColor: 'grey',
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: 'whitesmoke'
    }
})
export {Tarefa}