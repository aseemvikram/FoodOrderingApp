import { View, Text } from "react-native";
import { styled } from "styled-components";
const Container = styled(View)`
    align-text:center;
    justify-content:center;
    align-items:center;
    margin-vertical:200px;
`
export default function Deals() {
    return (
        <Container><Text>In the Deals Screen</Text></Container>
    )

}