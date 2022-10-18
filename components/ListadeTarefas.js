import React, { useState } from "react"
import { View, Text, Button, ScrollView, StyleSheet, TextInput } from "react-native"
import { Tarefa } from "./Tarefa";

const ListadeTarefas = () => {
    const [title, setTitle] = useState("Minha lista de tarefas");
    const [text, setText] = useState();
    const [list, setList] = useState(["Olá Mundo"]);

    // ADD ITEM METHOD
    const addItem = () => {
        const updatedList = list;
        updatedList.push(text);
        setList(updatedList);
        setText("");
    };

    //DELETE ITEM

   const handleDeleteItem = (index)=>{
    const updatedList = list.filter((tarefas)=>tarefas!==index)
    setList(updatedList)
   }

    return (
        <View style={{ width: "80%", marginBottom: 60 }}>
            <Text style={[styles.align, styles.font]}>{title}</Text>

            <ScrollView>
                {list.map((item, index) => (
                    <Tarefa key={index} item={item} index={index} delete={handleDeleteItem}  />
                ))}
            </ScrollView>
            <View>
                <TextInput
                    style={styles.input}
                    value={text}
                    onChangeText={(text) => setText(text)}
                />
                <Button title="Add item" onPress={addItem} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    align: {
        alignSelf: "center",
    },
    font: {
        fontSize: 20,
        fontWeight: "bold",
    },
    input: {
     
        borderRadius: 5,
        borderWidth: 1,
        marginBottom: 10,
        marginTop:10,
        padding: 10,
    },
});

export { ListadeTarefas }