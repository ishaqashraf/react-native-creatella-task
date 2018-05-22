import React,{Component} from 'react';


class FetchList{
    getProducts(page,limit){
        return fetch(`http://dev.appmaisters.com/sscmms-web/api/listEquipment?location_id=0&limit=${limit}&page=${page}&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjE4NCwiaXNzIjoiaHR0cDovL2Rldi5hcHBtYWlzdGVycy5jb20vc3NjbW1zLXdlYi9hcGkvbG9naW4iLCJpYXQiOjE1MjYyMDQ5NzEsImV4cCI6MTUyODgzMjk3MSwibmJmIjoxNTI2MjA0OTcxLCJqdGkiOiJuRExSMjBmOTNiYWZZRzUxIn0.Mo0P3qFOTAX0LAzHhUPY-_5sMhg3bH59KvDSp_rNNHs`,{
            method:'GET',
            headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            }
        })
    }
    
}


export default FetchList;