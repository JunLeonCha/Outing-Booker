import React from 'react';
import { Appbar } from 'react-native-paper';
import { Text, StyleSheet } from 'react-native';
import { MapPin } from "lucide-react-native"

const AppBar = ({ title }: { title?: string }) => {
    return (
        <Appbar.Header style={[Background.Transparent]}>
            <Appbar.Content title={<Text style={{ fontSize: 32 }}>{title}</Text>} />
            <Appbar.Action icon="" onPress={() => { }} />
            <MapPin />
        </Appbar.Header>
    );
};

const Background = StyleSheet.create({
    Transparent: {
        backgroundColor: "transparent"
    }
})



const styles = StyleSheet.create({
    default: {
        fontSize: 32
    }
});


export default AppBar;