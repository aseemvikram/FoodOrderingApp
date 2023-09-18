import { Ionicons } from "@expo/vector-icons";
import { View, Text, Button, Image } from "react-native"
import { styled } from "styled-components";
import { useCart } from "../../Hooks/useCart";

const Container = styled(View)`
    padding:5px;
    border-radius:10px;
    width:350px;
    margin-bottom:20px;
    border: 1px solid black;
`
const InnerContainer = styled(View)`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
`
const InnerContainerTwo = styled(View)`
    display:flex;
    flex-direction:row;
    justify-content:flex-start;
`
const Images = styled(Image)`
    width: 340px;
    height:200px;
    border-radius:10px;
`
const NameText = styled(Text)`
    font-size:20px;
    text-align:left;
    padding-left:5px;
    font-weight:bold;
`
const SubText = styled(Text)`
    font-size:16px;
    text-align: left;
    padding-left:5px;
    color:grey
`
const RightText = styled(Text)`
    font-size:15px;
    text-align: right;
    padding-right:5px;
`
const DishesList = ({ dish,name, image, cuisine, price, calories, isvegetarian }) => {

const {addDishesToCart}=useCart()
    return (
        <Container>
            <Images

                source={{
                    uri: image,
                }}
            />
            <InnerContainer> 
                <NameText>{name}</NameText>
                <Ionicons name="heart-outline" size={32} color="red" />
            </InnerContainer>

           <InnerContainerTwo> 
                <RightText>{isvegetarian ? (<Ionicons name="leaf" size={20} color="green" />) : (<Ionicons name="leaf" size={20} color="red" />)}</RightText>
                <SubText>&#8226;{cuisine}  &#8226;{calories}Cal  &#8226;{price}&#8377;</SubText>
            </InnerContainerTwo>
            <Button
                onPress={()=>addDishesToCart(dish)}
                title="ADD NOW"
                color= 'brown'
               
            />  
        </Container>)
}
export { DishesList };
