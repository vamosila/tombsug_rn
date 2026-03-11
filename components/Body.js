import { StyleSheet, Text, View } from "react-native"
import CustomButton from "./CustomButton"
import Input from "./Input"
import { useState } from "react"
import { calcRadius } from "../calculations/rhombus"

function Body() {
    const [side, setSide] = useState()
    const [angle, setAngle] = useState()
    const [radius, setRadius] = useState()

    function startCalculation() {
        console.log('Számít')
        console.log(side, angle);
        const radius = calcRadius(side, angle)
        console.log("Sugár: ", radius)
        setRadius(radius.toFixed(2))
    }
    
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Body</Text>

            <Input 
                label="Oldal" 
                onChangeText={side => setSide(side)}
            />

            <Input 
                label="Alfa" 
                onChangeText={angle => setAngle(angle)}
            />

            <CustomButton 
                title="Számít"
                onPress={() => startCalculation()}
            />

            <Input 
                label="Sugár" 
                value={radius}
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