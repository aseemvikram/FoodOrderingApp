import { View, Image } from "react-native"
import { styled } from "styled-components";


const Container = styled(View)`
    align-items:center;
    margin:10px;
`
const Images = styled(Image)`
    width: 100%;
    height: 170px;
    border-radius:15px;
`
const OfferBox = () => {
    return (
        <Container>
            <Images

                source={{
                    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLOznmPaJSXZU8j9LUzwZjn_1JrM3v9hoThA&usqp=CAU',
                }}
            />
        </Container>)
}
export { OfferBox };