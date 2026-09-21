'use client'
import React, { createContext, ReactNode, useContext, useState } from 'react';

export const BooksContext = createContext({})

const BooksProvider = ({children} : {children: ReactNode}) => {
    const [readBooks, setReadBooks] = useState([])
    const [wishList, setWishList] = useState([])

    console.log(readBooks, wishList)

    const sharedData = {
        readBooks, setReadBooks,
        wishList, setWishList
    }

    return (
        <BooksContext.Provider value={sharedData}>
            {children}
        </BooksContext.Provider>
    );
};

export default BooksProvider;