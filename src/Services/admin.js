import api from './axios';

export const login = (admin, password, navigate) => {
    api.post("/admin/login", { admin, password })
    .then( doc => {
        localStorage.setItem('admin', JSON.stringify(doc.data));
        navigate('/');
        console.log(doc)
    } )
    .catch( err => console.log(err) );
}
