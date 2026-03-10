import { StyleSheet, Text, TextInput, View } from "react-native"


function Input({label, value, onChangeText}) {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>{label}</Text>
            <TextInput 
                style={styles.input}
                value={value}
                onChangeText={onChangeText}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // backgroundColor: 'gold',
    },
    input: {
        borderColor: 'navy',
        borderWidth: 1,
        fontSize: 24,
        margin: 15,
        borderRadius: 5,
        backgroundColor: 'white',
    },
    text: {
        fontSize: 24,
        textAlign: 'center',
    },
})

export default Input
