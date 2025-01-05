
import { StyleSheet, Image, Text, View } from 'react-native';
import Colors from '@/constants/Colors';
import {Product} from '../types';

type ProductListItemProps = {
    product: Product;
};

const ProductListItem = ( {product}: ProductListItemProps) => {
 return (
    <View style={styles.container}>
      <Image
        source= {{uri: product.image || 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png'}}
        style= {styles.image}
        resizeMode="contain"
      />
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>${product.price.toFixed(2)}</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    backgroundColor:'white',
    borderRadius:20,
    padding: 10,
    overflow: 'hidden',
  },
  title: {
    fontWeight: '600',
    fontSize: 10,
    marginVertical: 10,
  },
  image: {
    width: '100%',
    aspectRatio:1,
    alignSelf: 'center',
  },
  price:{
    color: Colors.light.tint,
    fontWeight: 'bold',
    marginTop: 'auto',
  }
});

export default ProductListItem;