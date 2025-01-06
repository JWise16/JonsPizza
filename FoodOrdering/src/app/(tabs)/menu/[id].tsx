import { useLocalSearchParams, Stack } from "expo-router";
import {View, Text, StyleSheet, Image, Pressable} from 'react-native';
import React, {useState} from 'react';

import products from '@/assets/data/products';
import { ScrollViewStyleReset } from "expo-router/html";

const sizes =['S', 'M', 'L', 'XL'];

const ProductDetailsScreen = () => {
    const {id} = useLocalSearchParams();

    const product = products.find((p) => p.id.toString() == id);

    if(!product){
        return <Text>Product not found</Text>
    }

    return(
        <View style ={styles.container}>
            <Stack.Screen options ={{title: 'Details'}}/>
            <Image source={{uri: product.image || '@/assets/images/icon.png'}} style={styles.image}/>
            <Text>Select size</Text>
            
            <Text style={styles.price}>Price: ${product.price}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
container:{
    backgroundColor: 'white',
    flex:1,
    padding:10

},
image: {
    width: '100%',
    aspectRatio:1,

},
price: {
    fontSize:18,
    fontWeight:'bold',

}

})

export default ProductDetailsScreen;