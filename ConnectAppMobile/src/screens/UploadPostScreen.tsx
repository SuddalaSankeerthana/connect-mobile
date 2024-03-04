import React from "react";
import { Text, View } from "react-native";
import { styles } from "../styles/UploadPostScreen.styles";



export const UploadPostScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.uploadText}>Upload</Text>
        </View>
    );
}