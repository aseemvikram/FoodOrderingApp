import { View, Text,Image } from "react-native"
import { styled } from "styled-components";

const Container = styled(View)`
    padding-left:15px;
    padding-right:15px;
    width:120px;
    align-text:center;
    align-items:center;
    margin-left:15px;
    padding:5px;
    border: 2px solid black;
    border-radius:10px;
    margin-bottom:20px;
`
const Images = styled(Image)`
    width: 100px;
    height: 120px;
    border-radius:10px;
    
`
const ExploreText = styled(Text)`
    font-size:17px;
    text-align: center;
`

const SubText = styled(Text)`
    font-size:10px;
    text-align: center;
    color:#841999;
`
const ExploreList = ({ text, imageUrl, subText }) => {
    return (
        <Container>
            <Images

                source={{
                    uri: imageUrl,
                }}
            />
            <ExploreText>{text}</ExploreText>
            <SubText>{subText}</SubText>
        </Container>)
}
export { ExploreList };