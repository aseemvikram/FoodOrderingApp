import React from "react";
import styled from "styled-components";
import { useCart } from "../../Hooks/useCart";

const Container = styled.View`
flex-direction:row;
align-items:center;
`

const Button = styled.TouchableOpacity`
background-color :brown;
padding:10px 15px;
border-radius:5px;
margin:5px;
`
const ButtonText = styled.Text`
color:#fff;
font-size:18px;
`
const Text = styled.Text`
font-size:18px;
margin: 0px 10px;
`
const Counter = ({ quantity, dish }) => {

    const {updateCartItemQuantity}=useCart();
    return (

        <Container>
            <Button onPress={()=>updateCartItemQuantity(dish,quantity-1)}>
                <ButtonText>-</ButtonText>
            </Button>
            <Text>{quantity}</Text>
            <Button onPress={()=>updateCartItemQuantity(dish,quantity+1)}>
                <ButtonText>+</ButtonText>
            </Button>



        </Container>
    )

};
export { Counter };