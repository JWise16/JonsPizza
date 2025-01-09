import { StyleSheet, Image, Text, View, FlatList } from 'react-native';
import ProductListItem from "@/Components/ProductListItem"
import products from "../../../../assets/data/products"
import Colors from '@/constants/Colors';

const product = products[0];



export default function TabOneScreen() {
  return (
      <FlatList
      data={products}
      renderItem={({ item }) => <ProductListItem product = {item} />}
      numColumns={2}
      contentContainerStyle={{gap:10, padding:10}}
      columnWrapperStyle={{gap:10}}
      />
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'white',
    borderRadius:20,
    padding: 10,
    overflow: 'hidden',
  }
});
