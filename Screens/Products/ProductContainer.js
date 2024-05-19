import { FlatList, StyleSheet, View, Text, Keyboard, Dimensions, ScrollView, TurboModuleRegistry, ActivityIndicator } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import Productlist from './Productlist'
const { width } = Dimensions.get('screen')
const ProductContainer = (props) => {




    const products = [
        { name: "T-shirt", price: 15.99 },
        { name: "Jeans", price: 29.99 },
        { name: "Sneakers", price: 49.99 },
        { name: "Backpack", price: 39.99 },
        { name: "Watch", price: 79.99 }
      ];












    

    



    return (
        <View style={{ flex: 1, width: '100%', backgroundColor: 'white' }}>


            {
                products?.length > 0 ? (
                    <FlatList
                        numColumns={2}
                        data={products}
                        renderItem={({ item }) => <Productlist key={item.id} item={item} navigation={props.navigation} />}
                        keyExtractor={item => item.name}
                    />
                ) : (
                    <View style={styles.nofoundview}>
                        <Text style={styles.text}>No product Found</Text>
                    </View>
                )
            }



        </View >

    )
}

export default ProductContainer

const styles = StyleSheet.create({
    containerStyle: {
        backgroundColor: 'white',
        padding: 8,
        borderBlockColor: 'white',
        marginVertical: 5
    },
    inputContainerStyle: {
        color: 'black',
        paddingHorizontal: 8,
        borderRadius: 30
    },
    inutstyle: {
        color: 'black',
    },
    nofoundview: {
        height: width,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: 'black',
        fontWeight: '800',
        fontSize: 20
    }
})