import { Ionicons } from "@expo/vector-icons";
import { View, TextInput, TouchableOpacity } from "react-native"
import { styled } from "styled-components";


const Container = styled(View)`
    align-items:center;
    flex-direction:row;
    background-color: #f0f0f0;
    padding:2px;
    border-radius:8px;
    border: 2px solid black;
    margin-vertical:10px;
`;

const Input = styled(TextInput)`
    flex:1;
    margin-right:8px;
    padding:8px;
    font-size:16px;
`;

const SearchButton = styled(TouchableOpacity)`
    background-color:#841584;
    border-radius:8px;
    padding:8px;
`
const SearchBar = () => {
    return (
        <Container>
            <Input
                placeholder="Search..."
            />
            <SearchButton>
                <Ionicons name="search" size={24} color="white" />
            </SearchButton>
        </Container>)
}
export { SearchBar };