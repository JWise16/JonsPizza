import { useLocalSearchParams, Stack, useRouter } from "expo-router";
import {View, Text, StyleSheet, Image, Pressable, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {Link} from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';
import Colors from '@/constants/Colors';

import Button from '@/Components/Button';
import products from '@/assets/data/products';

import {useCart} from '@/providers/CartProvider';
import { PizzaSize } from "@/types";


const sizes: PizzaSize[] =['S', 'M', 'L', 'XL'];

const ProductDetailsScreen = () => {
    const router = useRouter();
    const {addItem} = useCart();
    const {id} = useLocalSearchParams();

    const [selectedSize, setSelectedSize] = useState<PizzaSize>('M');

    const product = products.find((p) => p.id.toString() == id);

    if(!product){
        return <Text>Product not found</Text>
    }

    const addToCart = () => {
        if (!product) return;
        addItem(product, selectedSize);
        router.push('/cart');
    }

    return(
        
        <ScrollView style ={styles.container}>
            <Stack.Screen options={{
                title: 'Menu', headerRight: () => (
                    <Link href={`/(admin)/menu/create/?id=${id}`} asChild>
                        <Pressable>
                            {({ pressed }) => (
                                <FontAwesome
                                    name="pencil"
                                    size={25}
                                    color={Colors.light.tint}
                                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                                />
                            )}
                        </Pressable>
                    </Link>
                )
            }} />

            <Stack.Screen options ={{title: product.name}}/>
            <Image source={{uri: product.image || '@/assets/images/icon.png'}} style={styles.image}/>
            
            <Text style={styles.title}>{product.name}</Text>
            <Text style={styles.price}>Price: ${product.price}</Text>
        </ScrollView>
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
},
title:{
    fontSize:20,
    fontWeight:'bold',
    marginTop:'auto'
}

})

export default ProductDetailsScreen;