import React,{Component} from 'react';


class FetchList{
    getProducts(localhost,sort,page,limit){
        return fetch(`http://${localhost}/products?_sort=${sort}&_page=${page}&_limit=${limit}`,{
            method:'GET',
            headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            }
        })
    }
    
}


export default FetchList;