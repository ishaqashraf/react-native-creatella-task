import React, { Component } from 'react';
import { Text, View, ActivityIndicator, TouchableOpacity, FlatList, Image, Dimensions, ListView } from 'react-native';
import FetchList from './api/getList.js';
import DropDown from './dropdown.js';
import Accordion from 'react-native-accordion';
import { Icon } from 'native-base';
import { ProgressDialog } from 'react-native-simple-dialogs';

const localhost = '192.168.0.110:3000'
const Data = new FetchList();

class ProductList extends Component {
    constructor(props) {
        super(props);
        this.accordionRefs = [];
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            data: [],
            loading: true,
            loader: false,
            sort: '',
            page: 1,
            limit: 2500,
            Date: null,
            modulusCount: 0,
            random: -1,
            dataSource: ds,
            progressVisible: true
        };
        // this.renderItem = this.renderItem.bind(this)
    }

    componentWillMount() {
        this.fetchData();
    }

    fetchData() {
        const { sort, page, limit, random } = this.state;
        Data.getProducts(page, limit)
            .then(res => res.json())
            .then(result => {
                if (result.body.length > 0) {
                    this.setState({
                        dataSource: page === 1 ? this.state.dataSource.cloneWithRows(result.body) : [...this.state.dataSource,...result.body],
                        data: page === 1 ? result.body : [...this.state.data, ...result.body],
                        loading: false,
                        loader: true,
                        progressVisible: false
                    })
                } else {
                    this.setState({ loader: false })
                }

            });
    }

    async handleLoadMore() {
        await this.setState({ page: this.state.page + 1 });
        await this.fetchData()
    }

    renderFooter() {
        if (this.state.loader) {
            return (
                <View
                    style={{
                        paddingVertical: 20,
                        borderTopWidth: 1,
                        borderColor: "#CED0CE"
                    }}
                >
                    <ActivityIndicator
                        color="#0000ff"
                        animating={true}
                        size="large"
                    />
                </View>
            );
        } else {
            return <Text style={styles.footerText}>~ end of catalogue ~</Text>
        }

    }

    // _renderHeader(section,index,isActive) {
    //     return (
    //       <View style={styles.header}>
    //         <Text style={styles.headerText}>{section.name}</Text>
    //         {!isActive && <Icon name="add" style={styles.iconStyle} />}
    //         {isActive &&    <Icon name="remove" style={styles.iconStyle} />}   
    //       </View>
    //     );
    //   }

    //   _renderContent(section) {
    //     return (
    //       <View style={styles.content}>
    //       <View style={{flexDirection:'row',justifyContent:'flex-start',padding:5}}>
    //         <View style={{flexDirection:'row'}}>
    //         <Text style={[styles.contentHeadingText,{marginLeft:3}]}>Location:</Text>
    //         <Text style={styles.contentText}> {section.location}</Text>   
    //         </View>
    //         <View style={{flexDirection:'row'}}>
    //         <Text style={styles.contentHeadingText}>Status:</Text>
    //         <Text style={styles.contentText}> {section.status}</Text>   
    //         </View>
    //         <View style={{flexDirection:'row'}}>
    //         <Text style={styles.contentHeadingText}>Barcode:</Text>
    //         <Text style={styles.contentText}> {section.bar_code}</Text>   
    //         </View>
    //       </View>   
    //       </View>
    //     );
    //   }
    _renderRow(item, a, i) {
        return (
            <Accordion
                easing="easeOutCubic"
                ref={(ref) => this.accordionRefs[parseInt(i)] = ref}
                header={({ isOpen }) => this._renderHeader(isOpen, item)}
                content={this._renderContent(item)}
                onPress={() => this.onPressSection(parseInt(i), this.accordionRefs)}
            />
        );
    }

    _renderHeader(isOpen, item) {
        return (
            <View style={styles.header}>
                <Text style={styles.headerText}>{item.name}</Text>
                {!isOpen && <Icon name="add" style={styles.iconStyle} />}
                {isOpen && <Icon name="remove" style={styles.iconStyle} />}
            </View>
        );
    }

    _renderContent(item) {
        return (
            <View style={styles.content}>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-start', padding: 5 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={[styles.contentHeadingText, { marginLeft: 3 }]}>Location:</Text>
                        <Text style={styles.contentText}> {item.location}</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.contentHeadingText}>Status:</Text>
                        <Text style={styles.contentText}> {item.status}</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.contentHeadingText}>Barcode:</Text>
                        <Text style={styles.contentText}> {item.bar_code}</Text>
                    </View>
                </View>
            </View>
        );
    }

    onPressSection(rowID, accordionRefs) {
        this.setState({ progressVisible: true })
        //Toggle other accordions except of the one clicked
        for (let i = 0; i < accordionRefs.length; i++) {
            if (i != rowID && accordionRefs[i] != null) {
                accordionRefs[i].close();
                this.setState({progressVisible:false})
            }
        }
    }

    render() {
        return (
            <View style={styles.mainContainer}>
                <ProgressDialog
                    visible={this.state.progressVisible}
                    message="Please, wait..."
                />

                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(item, a, i) => this._renderRow(item, a, i)}
                    // renderFooter={this.renderFooter.bind(this)}
                    // onEndReached={this.handleLoadMore.bind(this)}
                />
            </View>
        );
        // return (
        //     <FlatList
        //         data={this.state.data}
        //         renderItem={({ item }) => this.renderItem(item)}
        //         keyExtractor={item => ''+item.id}
        //         ListFooterComponent={this.renderFooter.bind(this)}
        //         onEndReached={this.handleLoadMore.bind(this)}
        //         onEndReachedThreshold={0.1}
        //     />);
    }
}

const styles = {
    mainContainer: {
        flex: 1
    },
    cardContainer: {
        borderWidth: 0.5,
        borderColor: '#d6d7da',
        margin: 15
    },
    loading: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    faceContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: 'yellow',
        alignSelf: 'center',
        width: '40%',
        height: 125,
        borderRadius: 100
    },
    adsContainer: {
        margin: 5,
        height: 125
    },
    dataContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10
    },
    btnContainer: {
        backgroundColor: '#01579B',
        paddingVertical: 10,
        margin: 10

    },
    btn: {
        textAlign: 'center',
        color: '#fff',
        fontWeight: 'bold'
    },
    footerText: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10
    },
    header: {
        backgroundColor: '#346794',
        paddingLeft: 10,
        paddingRight: 10,
        marginTop: 2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 35
    },
    headerText: {
        fontSize: 12,
        //   fontWeight: '400',
        color: '#fff',
        // fontFamily: font1
    },
    iconStyle: {
        fontSize: 14,
        color: '#fff'
    },
    content: {
        backgroundColor: '#254967'
    },
    contentHeadingText: {
        fontSize: 11,
        color: '#4482b5',
        marginLeft: 10,
        // fontFamily: font1
        // marginTop:5
    },
    contentText: {
        color: '#fff',
        fontSize: 10.5,
        // fontFamily: font
        // marginTop:5
    }

};

export default ProductList;
