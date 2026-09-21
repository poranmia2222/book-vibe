'use client'
import { BooksContext } from '@/context/BooksContext';
import { BookType } from '@/types/books.type';
import React, { useContext } from 'react';

const WishListButton = ({book}: {book:BookType}) => {

  const { wishList, setWishList } = useContext(BooksContext)
  const handleWishList = () => {
setWishList([...wishList, book])
  }
  return (
    <button
      onClick={() => handleWishList()}
      type="button"
      className="btn h-12 min-h-12 rounded-xl border-0 bg-[#23BE0A] px-7 text-base font-semibold text-white shadow-sm transition-all hover:bg-[#1da509] hover:shadow-md"
    >
      ♡ Wishlist
    </button>
  );
};

export default WishListButton;