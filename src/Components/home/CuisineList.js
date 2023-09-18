import { View, Text, Image } from "react-native"
import { styled } from "styled-components";

const Container = styled(View)`
    padding-left:15px;
    padding-right:15px;
    width:150px;
    align-text:center;
    align-items:center;
    margin-bottom:20px;
`
const Images = styled(Image)`
    width: 120px;
    height: 120px;
    border-radius:100px;
`
const CuisineText = styled(Text)`
    font-size:17px;
    text-align: center;
`
const CuisineList = ({ cuisine, imageUri }) => {
    return (
        <Container>
            <Images

                source={{
                    uri: imageUri,
                }}
            />
            <CuisineText>{cuisine}</CuisineText>
        </Container>)
}
export { CuisineList };