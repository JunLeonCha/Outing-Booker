import React from 'react';
import { StyleSheet, TextInput } from 'react-native';
const Inputs = () => {
    const [searchValue, setSearchValue] = React.useState("");

    const handleChange = (inputSearch: string) => {
        setSearchValue(inputSearch)
    }

    return (
        <TextInput
            style={styles.input}
            onChangeText={handleChange}
            value={searchValue}
            placeholder="useless placeholder"
        />
    );
};

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 8,
    },
});

export default Inputs;