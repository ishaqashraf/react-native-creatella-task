import React, { Component } from 'react';
import { View, Text, Picker,TouchableOpacity } from 'react-native';


class DropDown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0
        };
        this.GetPickerSelectedItemValue = this.GetPickerSelectedItemValue.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    GetPickerSelectedItemValue(itemvalue) {
        this.setState({ value: itemvalue });
        // alert(itemvalue)
    }

    onSubmit(){
        if(this.state.value == 0){
            alert("Please select Value")
        }else{
            this.props.onSubmit(this.state.value)
        }
    }

    render() {
        return (
            <View style={styles.mainContainer}>
                <View style={{flex:1}}>
                    <Picker
                    selectedValue={this.state.value}
                    style={{ width: '100%'}}
                    onValueChange={(itemValue) => this.GetPickerSelectedItemValue(itemValue)}>
                    <Picker.Item label="Select Filter" value="0" />
                    <Picker.Item label="Price" value="price" />
                    <Picker.Item label="Size" value="size" />
                    <Picker.Item label="ID" value="id" />
                    </Picker>
                </View>
                <View style={{flex:1}}>
                <TouchableOpacity onPress={this.onSubmit} style={styles.btnContainer}>
                        <Text style={styles.btn}>Filter</Text>
                </TouchableOpacity>
                </View>
            </View>

        );

    }
}

const styles = {
    mainContainer:{
        width:'93%',
        flexDirection:'row',
        borderWidth: 0.5,
        borderColor: '#d6d7da',
        margin:15,
        backgroundColor:'#F2F3F4'
    },
    
    btnContainer: {
        backgroundColor: '#2ECC71',
        paddingVertical: 10,
        margin:10,
        width:'90%'

    },
    btn: {
        textAlign: 'center',
        color: '#fff',
        fontWeight: 'bold'
    }
};

export default DropDown;
