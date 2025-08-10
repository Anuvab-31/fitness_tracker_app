import React, { FC, ReactNode } from 'react';
import { Platform, SafeAreaView, StatusBar, StyleSheet, View, ViewStyle } from 'react-native';

interface AppSafeViewProps {
    children: ReactNode,
    style?: ViewStyle
}

const AppSafeView: FC<AppSafeViewProps> = ({ children, style }) => {
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={[styles.container, style]}>{children}</View>
        </SafeAreaView>
    )
}

export default AppSafeView

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: "red",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight || 0 : 0
    },
    container: { flex: 1 }
})