
import { FC } from 'react';
import { createContext, useContext, useState } from 'react';
import { FirebaseContext } from '../firebase';
import { IUser, IUserContext } from './types';

export const UserContext = createContext<IUserContext>({} as IUserContext)

export const UserProvider: FC = ({ children }) => {
    const { firebase } = useContext(FirebaseContext)
    const logout = async () => {
        await firebase.auth().signOut()
        window.location.reload()
    }

    const [user, setUser] = useState({} as IUser)


    return (
        <UserContext.Provider value={{ user, setUser, logout }}>
                {children}
            </UserContext.Provider>
    );
}