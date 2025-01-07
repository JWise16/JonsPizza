import { useLocalSearchParams, Stack } from "expo-router";
import {View, Text, StyleSheet, Image, Pressable} from 'react-native';
import React, {useState} from 'react';

import products from '@/assets/data/products';



const sizes =['S', 'M', 'L', 'XL'];

const ProductDetailsScreen = () => {
    const {id} = useLocalSearchParams();

    const [selectedSize, setSelectedSize] = useState('M');

    const product = products.find((p) => p.id.toString() == id);

    if(!product){
        return <Text>Product not found</Text>
    }

    return(
        <View style ={styles.container}>
            <Stack.Screen options ={{title: 'Details'}}/>
            <Image source={{uri: product.image || '@/assets/images/icon.png'}} style={styles.image}/>
            <Text>Select size</Text>

            <View style={styles.sizes}>
                {sizes.map((size) =>(
                    <Pressable onPress = {() => {setSelectedSize(size)}} style={[styles.size, {backgroundColor: selectedSize == size ? 'gainsboro' : 'white'}]} key={size}>
                        <Text style={[styles.sizeText, {color: selectedSize == size? 'black': 'grey'}]}>{size}</Text>
                    </Pressable>
                ))} 
            </View>

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

},
sizes:{
    flexDirection:'row',
    justifyContent:'space-around',
    marginVertical:10
},
size:{
    backgroundColor:'gainsboro',
    width:50,
    aspectRatio:1,
    borderRadius:25,
    alignItems:'center',
    justifyContent:'center'
},
sizeText:{
    fontSize:20,
    fontWeight:'500',

}

})

export default ProductDetailsScreen;