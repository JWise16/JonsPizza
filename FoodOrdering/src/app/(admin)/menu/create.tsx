import {View, Text, StyleSheet, TextInput, Image, Alert} from 'react-native';
import Button from '@/components/Button';
import { useState } from 'react';
import Colors from '@/constants/Colors';
import * as ImagePicker from 'expo-image-picker';
import { Stack, useLocalSearchParams } from 'expo-router';

const CreateProductScreen = () => {
    const [image, setImage] = useState<string | null>(null);
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [error, setError] = useState('');

    const {id} = useLocalSearchParams();
    const isUpdating = !!id;
    const defaultImage = 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png';

    const validateInput = () => {
        setError('');
        if(!name) {
            setError('Name is required');
            return false;
        }
        if(!price) {
            setError('Price is required');
            return false;
        }
        if(isNaN(Number(price))) {
            setError('Price must be a number');
            return false;
        }
        return true;
    }

    const resetFields = () => { 
        setName('');
        setPrice('');
    }

    const onCreate = () => {
        if(!validateInput()) {
            return;
        }
        console.warn('creating product', {name, price, image});
        resetFields();
    };

    const onUpdateCreate = () => {
        if(!validateInput()) {
            return;
        }
        console.warn('updating product', {name, price, image});
        resetFields();
    }

    const onSubmit = () => {
        if(isUpdating) {
            onUpdateCreate();
        } else {
            onCreate();
        }
    };

    const onDelete = () => {
        console.warn('deleting product');
    }

    const confirmDelete = () => {
        // test on mobile
        Alert.alert('Delete', 'Are you sure you want to delete this product?', [    
            {text: 'Cancel', style: 'cancel'},
            {text: 'Delete', onPress: onDelete, style: 'destructive'},
        ]);
    }

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
    
        console.log(result);
    
        if (!result.canceled) {
          setImage(result.assets[0].uri);
        }
      };

    return (
        <View style={styles.container}>
            <Stack.Screen options={{title: isUpdating ? 'Update Product' : 'Create Product'}}/>

            <Image source={{uri:image || defaultImage}} style={styles.image}/>
            <Text onPress={pickImage} style={styles.textButton}>Upload Image</Text>

            <Text style={styles.label}>Name</Text>
            <TextInput placeholder="Name" value={name} onChangeText={setName} style={styles.input}/>

            <Text style={styles.label}>Price ($)</Text>
            <TextInput placeholder="9.99" value={price} onChangeText={setPrice} style={styles.input} keyboardType="numeric" />

            <Text style={{color:'red',}}>{error}</Text>
            <Button onPress={onSubmit} text={isUpdating ? 'Update' : 'Create'} />
            {isUpdating && <Text onPress={confirmDelete} style={styles.textButton}>Delete</Text>}
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        padding:10
    },
    label:{
        color:'gray',
        fontSize:16,
    },
    input:{
        backgroundColor:'white',
        padding:10,
        borderRadius:5,
        marginTop:5,
        marginBottom:20
    },
    image:{
        width:'50%',
        aspectRatio:1,
        alignSelf:'center',
    },
    textButton:{
        color:Colors.light.tint,
        textAlign:'center',
        fontWeight:'bold',
        marginVertical:10,
    }
})

export default CreateProductScreen;