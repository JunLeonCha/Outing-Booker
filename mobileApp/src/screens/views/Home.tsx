import React from 'react';
import { View, Text, TextInput } from "react-native"
import AppBar from "../components/AppBar"
import Container from '../components/Container';
import Inputs from './../components/Inputs';

const Home = () => {
    return (
        <Container padding={24}>
            <AppBar title='Accueil' />
            <View>
                <Inputs />
            </View>
        </Container>
    );
};

export default Home;