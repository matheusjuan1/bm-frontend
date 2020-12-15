import React from 'react';
import api from './services/api';

export const UserContext = React.createContext()

export const UserStorage = ({ children }) => {

    const [dados, setDados] = React.useState(null);
    const [login, setLogin] = React.useState(null);
    const [loading, setLoading] = React.useState(false);
    const [erro, setError] = React.useState(null);

    const userLogout = React.useCallback(async function userLogout() {
        setDados(null);
        setLogin(false);
        setError(null);
        setLoading(false);
        window.localStorage.removeItem('token');
    }, [])



    async function userLogin(email, password) {
        try {
            setLoading(true);
            setError(null);
            const res = await api
                .post("/usuario/autenticar", {
                    email: email,
                    senha: password,
                })
            if(res.status !== 200) throw new Error('Email e/ou senha inválido!');
            window.localStorage.setItem('token', res.data.idgestor);
            setDados(res.data);
            setLogin(true);
        } catch (error) {
            console.log(error)
            setError(error.message);
            setLogin(false);
        }finally {
            setLoading(false);
        }

    }

    React.useEffect(() => {
        async function autoLogin() {
            const token = window.localStorage.getItem('token');
            if (token) {
                try {
                    setError(null);
                    setLoading(true);
                    const response = await api.get(`/usuario/${token}`);
                    if (response.status !== 200) throw new Error('Token inválido');
                    setDados(response.data.recordset[0]);
                    setLogin(true);
                } catch (error) {
                    userLogout();
                } finally {
                    setLoading(false);
                }
            } else {
                setLogin(false);
            }
        }
        autoLogin()
    }, [userLogout])

    return (
        <UserContext.Provider value={{ dados, userLogin, userLogout, erro, loading, login }}>
            {children}
        </UserContext.Provider>
    )
}