import {View, Text, Platform, StyleSheet, FlatList} from 'react-native';
import {StatusBar} from 'expo-status-bar';
import {useCart} from '@/providers/CartProvider';
import CartListItem from '@/components/CartListItem';

const CartScreen = () => {
    const {items} = useCart();

    return(
        <View style={styles.container}>
            <FlatList
                data={items}
                renderItem={({item}) => <CartListItem cartItem={item}/>}
                contentContainerStyle={{padding: 10, gap: 10}}
            />
            <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:10,
        backgroundColor: 'white'
    },
    text: {
        fontSize: 16,
        marginTop: 10
    }
})

export default CartScreen;