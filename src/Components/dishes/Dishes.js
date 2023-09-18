import { View, FlatList, Text, Image } from "react-native";
import { DishesData } from "../../data/DishesData";
import { DishesList } from "./DishesList";
import { styled } from "styled-components";
import { Badge } from '@rneui/themed';
import { useCart } from "../../Hooks/useCart";
const Container = styled(View)`
    align-text:center;
    justify-content:center;
    align-items:center;
    margin-vertical:20px;
`
const InnerContainer = styled(View)`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
`
const Icon = styled(Image)`
    width: 40px;
    height:40px;
    border-radius:100px;
    margin-top:10px;
`
const Heading = styled(Text)`
    font-size:25px;
    font-weight:bold;
    margin-top:10px;
    margin-right:5px;
`
export default function Dishes() {
    const { cartItemQuantity } = useCart();

    return (

        <Container>
            <InnerContainer>
                <Heading >Featured Dishes</Heading>
             
                <View><Icon
                        source={require('../../../assets/cart.jpg')}
                    />
                     {cartItemQuantity!==0 && (<Badge
                        status="primary"
                        value={cartItemQuantity}
                        containerStyle={{ position: 'absolute', top: 4, left: 25 }}
                    />)}
                </View>
            </InnerContainer>

            <FlatList

                data={DishesData}
                renderItem={({ item }) =>
                    <DishesList dish={item} name={item.name} image={item.image} cuisine={item.cuisine} price={item.price} calories={item.calories} isvegetarian={item.isVegetarian} />
                }
                keyExtractor={item => item.id} />

        </Container>

    )

}