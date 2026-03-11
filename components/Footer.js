import { StyleSheet, Text, View } from "react-native"

function Footer() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Vámosi László Ádám, II-N, 2026-03-10</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'gold',
        width: '100%',
        padding: 10,
    },
    text: {
        textAlign: 'center',
        fontSize: 24,
    },
})

export default Footer