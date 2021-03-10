import React, { useContext } from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { SvgXml } from "react-native-svg";

import logoSVGMarkup from '../assets/icons/logoSVGMarkup';

export default Header = (props) => {

    const SvgImage = () => <SvgXml xml={logoSVGMarkup} />;

    return (
        <TouchableOpacity style={styles.header}>
            <SvgImage style={styles.logo}/>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    header: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        width: 48,
        height: 48
    }
});