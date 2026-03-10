import { StyleSheet, Text, View } from "react-native"
import CustomButton from "./CustomButton"
import Input from "./Input"

function Body() {
    function startCalculation() {
        console.log('Számít')
    }
    
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Body</Text>

            <Input 
                label="Oldal" 
            />

            <Input 
                label="Alfa" 
            />

            <CustomButton 
                title="Számít"
                onPress={() => startCalculation()}
            />

            <Input 
                label="Sugár" 
            />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: 'khaki',
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    text: {
        // textAlign: 'center',
    },
})

export default Body