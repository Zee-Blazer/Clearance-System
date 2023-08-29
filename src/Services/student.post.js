import api from './axios';

export const sendEmail = (subject, text) => {
    api.post('/student/send-email', { subject, text })
    .then( doc => console.log(doc) )
    .catch( err => console.log(err) );
}

export const sendPhone = (msg) => {
    api.post('/student/send-sms', { msg })
    .then( doc => console.log(doc) )
    .catch( err => console.log(err) );
}

export const addDetails = (matric, email, phone) => {
    api.post('/student/additional')
    .then( doc => console.log(doc) )
    .catch( err => console.log(err) );
}
