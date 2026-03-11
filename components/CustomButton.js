/*
* File: CustomButton.js
* Author: Vámosi László Ádám
* Copyright: 2026, Vámosi László Ádám
* Group: Szoft II-N
* Date: 2026-03-11
* Github: https://github.com/vamosilaszloadam/
* Licenc: MIT
*/

import { StyleSheet, Text, TouchableOpacity } from "react-native"

function CustomButton({title, onPress}) {
    return (
        <TouchableOpacity
            style={styles.button}
            onPress={onPress}
        >
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'lightblue',
        // width: '100%',
        padding: 5,
        borderRadius: 10,
        margin: 15,
        boxShadow: '5px 5px 5px navy'
    },
    text: {
        fontSize: 24,
        textAlign: 'center',
    },
})

export default CustomButton
