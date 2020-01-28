import React from 'react';
import { AsyncStorage, SafeAreaView, StyleSheet, ScrollView, View, Text, Image, TouchableOpacity, FlatList, Dimensions } from 'react-native'
import { ActionSheet, Root } from 'native-base'
const width = Dimensions.get('window').width;
class Images extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fileList: []
        }
    }

    onClickAddImage = () => {
        const BUTTONS = ['Take Photo', 'Choose Photo Library', 'Cancel']
        ActionSheet.show(
            {
                Option: BUTTONS,
                cancelButtonIndex: 2,
                title: 'Select Photo'},
            buttonIndex => {
                switch (buttonIndex) {
                    case 0:
                        break;
                    case 1:
                        break;
                    default:
                        break;

                }
            }
        )

    };



    renderItem = ({ item, index }) => {
        return (
            <View>
                <Image source={item.url} style={styles.itemImage} />

            </View>


        )

    };
    render() {
        let { content } = styles;
        let { fileList } = this.state;
        return (
            <Root>
                <View style={content}>
                    <Text>Sample React Native Add Images</Text>
                    <FlatList
                        data={fileList}
                        renderItem={this.renderItem}
                        keyExtractor={(item, index) => index.toString()}
                    />

                    <TouchableOpacity onPress={this.onClickAddImage} style={styles.buttonAdd}>
                        <Text>Press Add Image</Text>
                    </TouchableOpacity>

                </View>
            </Root>
        );
    }





}
const styles = StyleSheet.create({
    content: {
        flex: 1,
        alignItems: 'center',
        marginTop: 10,
    }
    ,
    buttonAdd: {
        backgroundColor: '#0080ff',
        height: 50,
        width: width - 60,
        alignItems: 'center',
        justifyContent: 'center'
    },
    itemImage: {
        backgroundColor: '#2F455C',
        height: 150,
        width: width - 60,
        borderRadius: 8,
        resizeMode: 'contain'


    }




})
export default Images;