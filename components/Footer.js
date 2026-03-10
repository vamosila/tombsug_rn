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
    },
    text: {
        textAlign: 'center',
    },
})

export default Footer