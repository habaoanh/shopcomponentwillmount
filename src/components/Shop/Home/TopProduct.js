import React, { Component } from 'react';
import {
    View, Text, Image, StyleSheet, Dimensions, TouchableOpacity, FlatList
} from 'react-native';

const url = 'http://192.168.0.103/api/images/product/';
//top product da co hinh do duoi file image khong khop giua hinh anh va duoi file load tu api
//chep hinh anh tu image vao ...htdocs\api\images\product
export default class TopProduct extends Component {
    gotoDetail(product) {
        const { navigation } = this.props;
        navigation.navigate('Manhinh_ProductDetail', { product });
    }

    render() {
        const {
            container, titleContainer, title,
            body, productContainer, productImage,
            produceName, producePrice
        } = styles;
        
        return (
            <View style={container}>
                <View style={titleContainer}>
                    <Text style={title}>TOP PRODUCT</Text>
                </View>
                
                <FlatList
                    horizontal={false}
                    numColumns={2}
                    contentContainerStyle={body}
                    data={this.props.topProducts}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <TouchableOpacity 
                        style={productContainer} onPress={() => this.gotoDetail(item)}
                        >
                            <Image 
                            source={{ uri: `${url}${item.images[0]}` }} style={productImage} 
                            />
                            <Text style={produceName}>{item.name.toUpperCase()}</Text>
                            <Text style={producePrice}>{item.price}$</Text>
                        </TouchableOpacity>
                    )}
                    ItemSeparatorComponent={(sectionId, rowId) => {
                        if (rowId % 2 === 1) return <View style={{ width, height: 10 }} />;
                        return null;
                    }}
                />
                
            </View>
        );
    }
}

const { width } = Dimensions.get('window');
const produtWidth = (width - 60) / 2;
const productImageHeight = (produtWidth / 361) * 452;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        margin: 10,
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2
    },
    titleContainer: {
        height: 50,
        justifyContent: 'center',
        paddingLeft: 10
    },
    title: {
        color: '#D3D3CF',
        fontSize: 20
    },
    body: {   
        justifyContent: 'space-around',
        //padding: 10
    },
    productContainer: {
        width: produtWidth,
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        paddingLeft: 10,
        paddingRight: 10
    },
    productImage: {
        width: produtWidth,
        height: productImageHeight
    },
    produceName: {
        marginVertical: 5,
        paddingLeft: 10,
        fontFamily: 'Avenir',
        color: '#D3D3CF',
        fontWeight: '500'
    },
    producePrice: {
        marginBottom: 5,
        paddingLeft: 10,
        fontFamily: 'Avenir',
        color: '#662F90'
    }
});
/*<View style={body}>
                    {this.props.topProducts.map(e => (
                        <TouchableOpacity 
                        style={productContainer} 
                        onPress={() => this.gotoDetail(e)}
                        key={e.id}
                        >
                            <Image source={{ uri: `${url}${e.images[0]}` }} style={productImage} />
                            <Text style={produceName}>{e.name.toUpperCase()}</Text>
                            <Text style={producePrice}>{e.price}$</Text>
                        </TouchableOpacity>
                    ))}
                </View> 
*/
