import React from 'react';
import { Appbar } from 'react-native-paper';
import { Text, StyleSheet } from 'react-native';
import { transparent } from 'react-native-paper/lib/typescript/src/styles/themes/v2/colors';

const AppBar = ({ title }: { title?: string }) => {
    return (
        <Appbar.Header style={[Background.Transparent]}>
            <Appbar.Content title={<Text style={{ fontSize: 32 }}>{title}</Text>} />
            <Appbar.Action icon="calendar" onPress={() => { }} />
            <Appbar.Action icon="magnify" onPress={() => { }} />
        </Appbar.Header>
    );
};

const Background = StyleSheet.create({
    Transparent: {
        backgroundColor: transparent
    }
})



const styles = StyleSheet.create({
    default: {
        fontSize: 32
    }
});


export default AppBar;