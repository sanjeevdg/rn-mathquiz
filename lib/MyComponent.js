import { jsx as _jsx } from "react/jsx-runtime";
import { View, Text, StyleSheet } from "react-native";
const MyComponent = ({ title }) => {
    return (_jsx(View, { style: styles.container, children: _jsx(Text, { style: styles.text, children: title }) }));
};
const styles = StyleSheet.create({
    container: {
        padding: 12,
        backgroundColor: "#eee",
        borderRadius: 8
    },
    text: {
        fontSize: 18,
        color: "#333"
    }
});
export default MyComponent;
