import { View, FlatList,} from "react-native";
import Data from "../../data/Data";
import ExploreData from "../../data/ExploreData";
import { CuisineList } from "./CuisineList";
import { TextBox } from "./TextBox";
import { OfferBox } from "./OfferBox";
import { ScrollView } from "react-native-gesture-handler";
import { SearchBar } from "./SearchBar";
import { ExploreList } from "./ExploreList";

export default function Home() {
    return (
        <ScrollView>
            <View>
                <SearchBar />
                <OfferBox />
                <TextBox text={"Cuisine's"} />

                <FlatList
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    data={Data}
                    renderItem={({ item }) =>
                        <CuisineList cuisine={item.cuisine} imageUri={item.cuisineImageUri} />
                    }
                    keyExtractor={item => item.id}
                />

                <TextBox text={"Explore"} />

                <FlatList
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    data={ExploreData}
                    renderItem={({ item }) =>
                        <ExploreList text={item.name} subText={item.subText} imageUrl={item.imageurl} />
                    }
                    keyExtractor={item => item.id}
                />


                <TextBox text={"Your's Favorite"} />

                <FlatList
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    data={Data[0].dishes}
                    renderItem={({ item }) =>
                        <CuisineList cuisine={item.name} imageUri={item.imageUri} />
                    }
                    keyExtractor={item => item.id}
                />
             
            </View>
        </ScrollView>
    )

}