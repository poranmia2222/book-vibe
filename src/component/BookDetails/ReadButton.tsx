"use client";
import { BooksContext } from '@/context/BooksContext';
import { BookType } from '@/types/books.type';
import React, { useContext } from 'react';

const ReadButton = ({ book }: {book:BookType}) => {

    const { readBooks, setReadBooks } = useContext(BooksContext)

    const handleReadBook = () => {
        setReadBooks([...readBooks, book])
    }

    return (
        <button
        onClick={()=>handleReadBook()}
            type="button"
            className="btn h-12 min-h-12 rounded-xl border border-[#13131330] bg-white px-7 text-base font-semibold text-[#131313] transition-all hover:border-[#23BE0A] hover:bg-[#23BE0A]/5"
        >
            Read
        </button>
    );
};

export default ReadButton;