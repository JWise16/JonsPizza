import { StyleSheet, Image, Text, View } from 'react-native';
import ProductListItem from "@/Components/ProductListItem"
import products from "../../../assets/data/products"
import Colors from '@/constants/Colors';

const product = products[0];



export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <ProductListItem product = {products[0]}/>
      <ProductListItem product = {products[1]}/>
    </View>
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
