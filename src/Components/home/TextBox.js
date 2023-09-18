import { View, Text, } from "react-native"
import { styled } from "styled-components";


const TextWrapper = styled(Text)`
    padding-horizontal: 10px;
    font-size:20px;
    font-weight: bold;
`
const Container = styled(View)`
    align-items:center;
    margin-vertical:15px;
`
const HorizontalLine = styled(View)`
    border-bottom-color:grey;
    border-bottom-width:1px;
    width:85%;
    margin-vertical:1px;
`
const TextBox = ({ text }) => {
    return (
        <Container>
            <HorizontalLine />
            <TextWrapper>
                <Text>{text}</Text>
            </TextWrapper>
            <HorizontalLine />

        </Container>)
}
export { TextBox };