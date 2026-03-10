import { StyleSheet, Text, View } from "react-native"

function Header() {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>
                Rombuszba írható kör sugara
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'indigo',
        width: '100%',
        padding: 5,
    },
    text: {
        fontSize: 32,
        color: 'white',
        textAlign: 'center',
    },
})

export default Header
