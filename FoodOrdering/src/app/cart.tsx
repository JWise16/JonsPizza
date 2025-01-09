import {View, Text, Platform, StyleSheet, FlatList} from 'react-native';
import {StatusBar} from 'expo-status-bar';
import {useCart} from '@/providers/CartProvider';
import CartListItem from '@/components/CartListItem';
import Button from '@/components/Button';

const CartScreen = () => {
    const {items, total} = useCart();

    return(
        <View style={styles.container}>
            <FlatList
                data={items}
                renderItem={({item}) => <CartListItem cartItem={item}/>}
                contentContainerStyle={{padding: 10, gap: 10}}
            />

            <Text style={styles.total}>Total: ${total}</Text>

            <Button text="Checkout"/>
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
    },
    total: {
        fontSize: 20,
        marginTop: 20,
        fontWeight: '500',
        textAlign: 'center'
    }
})

export default CartScreen;