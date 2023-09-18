import { View, Image, Button, FlatList, Text } from "react-native";
import { styled } from "styled-components";
import { TextBox } from "../home/TextBox";
import { cartAtom } from "../../atoms";
import { useAtomValue } from "jotai";
import { CartItemCard } from "./CartItemCard";
import { ScrollView } from "react-native";
import { useCart } from "../../Hooks/useCart";
const Container = styled(View)`
    align-text:center;
    justify-content:center;
    align-items:center;
    margin-vertical:20px;
    margin-bottom:50px;
`
const CartContainer = styled(View)`
    margin-bottom:50px;
`
const Images = styled(Image)`
    width: 340px;
    height:340px;
    border-radius:10px;
    margin-top:70px;
`
const THeading = styled(Text)`
    font-size:17px;
    font-weight:bold;
    border-bottom-color:grey;
    border-bottom-width:1px;
`
const InnerHeading = styled(Text)`
    font-size:15px;
    display:flex;
    margin-left:10px;
    margin-right:10px;
`
const InnerContainer = styled(View)`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
`
export default function CartScreen({ navigation }) {
    const cartItems = useAtomValue(cartAtom);
    const {subtotal,total,tax,shipping}=useCart()

    return (
        <View>
            {cartItems.length < 1 ? (
                <Container>

                    <Images
                        source={require('../../../assets/preview.png')}
                    />
                    <TextBox text={"Cart Is Empty...!!"} />

                    <Button
                        onPress={() => navigation.navigate('Dishes')}
                        title="ADD NOW"
                        color="#841584"
                    />


                </Container>

            ) : (
                <ScrollView showsVerticalScrollIndicator={false}>
                    <CartContainer>
                        <Container>
                            <TextBox text={"CART ITEMS"} />
                            {cartItems.map((item) => (<CartItemCard key={item.dish.id} quantity={item.quantity} dish={item.dish} name={item.dish.name} image={item.dish.image} cuisine={item.dish.cuisine} price={item.dish.price} calories={item.dish.calories} isvegetarian={item.dish.isVegetarian} />
                            ))}
                        </Container>

                        <THeading>BILL SUMMARY: </THeading>
                        <InnerContainer>
                            <InnerHeading>Subtotal</InnerHeading>
                            <InnerHeading>&#8377;{subtotal.toFixed(2)}</InnerHeading>
                        </InnerContainer>
                        <InnerContainer>
                            <InnerHeading>GST</InnerHeading>
                            <InnerHeading>&#8377;{tax.toFixed(2)}</InnerHeading>
                        </InnerContainer>
                        <InnerContainer>
                            <InnerHeading>Shipping Charges</InnerHeading>
                            <InnerHeading>&#8377;{shipping.toFixed(2)}</InnerHeading>
                        </InnerContainer>
                        <InnerContainer>
                            <InnerHeading>TOTAL</InnerHeading>
                            <InnerHeading>&#8377;{total.toFixed(2)}</InnerHeading>
                        </InnerContainer>
                        <Button
                            title="checkout"
                            color="grey"
                        />
                    </CartContainer>
                </ScrollView>
            )}
        </View>
    )

}