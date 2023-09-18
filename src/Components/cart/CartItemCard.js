import { Ionicons } from "@expo/vector-icons";
import { View, Text, Button, Image } from "react-native"
import { styled } from "styled-components";
import { Counter } from "./Counter";
import { useCart } from "../../Hooks/useCart";
const Container = styled(View)`
    padding:5px;
    border-radius:10px;
    width:350px;
    margin-bottom:20px;
    border: 1px solid black;
    display:flex;
    flex-direction:row;
`
const ButtonContainer = styled(View)`

    margin-left:55px;
    margin-top:10px;
    width:150px;
    display:flex;
    flex-direction:row;
`
const InnerContainer = styled(View)`
    display:flex;
    flex-direction:column;
`
const InnerContainerTwo = styled(View)`
    display:flex;
    flex-direction:row;
    justify-content:center;
    margin-left:15px;
`
const BinContainer = styled.TouchableOpacity`
    margin-left:10px;
    margin-top:12px;
`
const Images = styled(Image)`
    width: 100px;
    height:100px;
    border-radius:10px;
`
const NameText = styled(Text)`
    font-size:20px;
    text-align:center;
    width:250px;
    font-weight:bold;
`

const SubText = styled(Text)`
    font-size:16px;
    text-align: left;
    color:grey;
`

const RightText = styled(Text)`
    font-size:15px;
    text-align: right;
    padding-right:5px;
`


const CartItemCard = ({ quantity, dish, name, image, cuisine, price, calories, isvegetarian }) => {

    const { deleteDishFromCart } = useCart()

    return (
        <Container>
            <Images

                source={{
                    uri: image,
                }}
            />
            <InnerContainer>
                <NameText>{name}</NameText>

                <InnerContainerTwo>
                    <RightText>{isvegetarian ? (<Ionicons name="leaf" size={20} color="green" />) : (<Ionicons name="leaf" size={20} color="red" />)}</RightText>
                    <SubText>&#8226;{cuisine}  &#8226;{calories}Cal  &#8226;{price}&#8377;</SubText>
                </InnerContainerTwo>

                <ButtonContainer>
                    <Counter quantity={quantity} dish={dish}/>
                    <BinContainer onPress={() => deleteDishFromCart(dish)}><Ionicons name="trash-bin" color={"grey"} size={30} /></BinContainer>
                </ButtonContainer >

            </InnerContainer>

        </Container >)
}
export { CartItemCard };
