import { FlatList } from "react-native";
import PropertyListingCard from "./common/PropertyListingCard";
import { properties } from "@/constants/data";

export default function PropertyListing() {
  return (
    <FlatList
      data={properties}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <PropertyListingCard item={item} />}
    />
  );
}
