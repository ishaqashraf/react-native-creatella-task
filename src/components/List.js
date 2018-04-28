import React, { Component } from 'react';
import { Text, View, ActivityIndicator, TouchableOpacity, FlatList, Image, Dimensions } from 'react-native';
import FetchList from './api/getList.js';
import DropDown from './dropdown.js';

const localhost = '192.168.0.106:3000'
const Data = new FetchList();

class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            loading: true,
            loader: false,
            sort: '',
            page: 1,
            limit: 20,
            Date: null,
            modulusCount: 0,
            random: -1
        };
        this.getValue = this.getValue.bind(this);
        this.renderItem = this.renderItem.bind(this)
    }

    componentWillMount() {
        this.fetchData();
    }

    fetchData() {
        const { sort, page, limit, random } = this.state;
        Data.getProducts(localhost, sort, page, limit)
            .then(res => res.json())
            .then(result => {
                if (result.length > 0) {
                    result.push({ "id": Math.random().toString(), "type": 'ad', "face": "undifined", "uri": "http://" + localhost + "/ads/?r=" + random })
                    this.setState({
                        data: page === 1 ? result : [...this.state.data, ...result],
                        loading: false,
                        loader: true,
                        random: this.state.random + 1
                    })
                } else {
                    this.setState({ loader: false })
                }

            });
    }

    getDate(date) {
        //find full dates 
        var publish = new Date(date);
        var fullDate = publish.toDateString();
        var today = new Date();
        var one_day = 1000 * 60 * 60 * 24;

        // Convert both dates to milliseconds
        var date1_ms = publish.getTime();
        var date2_ms = today.getTime();

        // Calculate the difference in milliseconds
        var difference_ms = date2_ms - date1_ms;

        // Convert back to days and return
        var days = Math.round(difference_ms / one_day);
        if (days > 7) {
            var FinalDate = fullDate
        } else {
            var FinalDate = days + " days ago";
        }
        return FinalDate;
    }


    async handleLoadMore() {
        await this.setState({ page: this.state.page + 1 });
        await this.fetchData()
    }

    async getValue(value) {
        await this.setState({ sort: value, loading: true, page: 1 });
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

    renderItem = (item) => {
        if (item.type) {
            return (
                <View style={styles.mainContainer}>
                    <View style={styles.cardContainer}>
                        <View style={styles.adsContainer}>
                            <Image
                                style={{ width: '100%', flex: 1 }}
                                source={{ uri: item.uri }}
                            />
                        </View>
                    </View>
                </View>
            );
        } else {
            const Date = this.getDate(item.date)
            const Dollar = ((item.price / 100).toFixed(2));
            return (
                <View style={styles.mainContainer}>
                    <View style={styles.cardContainer}>
                        <View style={styles.faceContainer}>
                            <Text style={{ color: '#000', fontSize: item.size, fontWeight: 'bold' }} numberOfLines={1}>{item.face}</Text>
                        </View>
                        <View style={styles.dataContainer}>
                            <Text>{item.size + " pixels"}</Text>
                            <Text style={{ color: 'blue' }}>{"$ " + Dollar}</Text>
                            <Text style={{ textAlign: 'center' }}>{Date}</Text>
                        </View>
                        <TouchableOpacity style={styles.btnContainer}>
                            <Text style={styles.btn}>BUY NOW</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            );
        }
    }

    renderList() {
        if (this.state.loading)
            return <View style={styles.loading}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>;
        return (
            <FlatList
                data={this.state.data}
                renderItem={({ item }) => this.renderItem(item)}
                keyExtractor={item => item.id}
                ListFooterComponent={this.renderFooter.bind(this)}
                onEndReached={this.handleLoadMore.bind(this)}
                onEndReachedThreshold={0.5}
            />);
    }

    render() {
        return (
            <View style={{ borderTopWidth: 0, borderBottomWidth: 0, flex: 1 }}>
                <DropDown
                    value="Select Filter"
                    onSubmit={this.getValue}
                />
                {this.renderList()}
            </View>
        );
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
        flex: 1,
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
    }

};

export default ProductList;
