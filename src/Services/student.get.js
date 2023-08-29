import api from './axios';

export const getUndergraduate = (type, setData) => {
    if(type == "verified"){
        api.get('/student/all-under-verified')
        .then( doc => setData(doc.data) )
        .catch( err => console.log(err) );
    }
    else{
        api.get('/student/all-under-unverified')
        .then( doc => setData(doc.data) )
        .catch( err => console.log(err) );
    }
}

export const getPostgraduate = (type, setData) => {
    if(type == "verified"){
        api.get('/student/all-post-verified')
        .then( doc => setData(doc.data) )
        .catch( err => console.log(err) );
    }
    else{
        api.get('/student/all-post-unverified')
        .then( doc => setData(doc.data) )
        .catch( err => console.log(err) );
    }
}
