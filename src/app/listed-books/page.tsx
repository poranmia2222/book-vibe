"use client";
import ListedBooksCard from '@/component/shared/ListedBooksCard';
import { BooksContext } from '@/context/BooksContext';
import { BookType } from '@/types/books.type';
import { useContext } from 'react';

const ListedBooks = () => {
    const { readBooks, wishList } = useContext(BooksContext)
    return (
        <div className='container mx-auto '>
            <h2 className="my-4 bg-[#13131310] rounded-3xl py-16 font-bold text-4xl text-center">
                Listed Books
            </h2>
            <div className='text-center'>
                <button className='btn btn-success'>Sort</button>
            </div>
            <div>
                {/* name of each tab group should be unique */}
                <div className="tabs tabs-lift">
                    <input type="radio" name="my_tabs_3" className="tab" aria-label={`Read Books (${readBooks.length})`} />
                    <div className="tab-content bg-base-100 border-base-300 p-6 grid grid-cols-1 gap-3">
                        {
                            readBooks.length > 0 ? (readBooks.map((book: BookType) => <ListedBooksCard key={book.bookId} book={book}></ListedBooksCard>)) : <p className="text-center text-lg font-semibold">
                                No read books found
                            </p>
                        }
                    </div>

                    <input type="radio" name="my_tabs_3" className="tab" aria-label={`Wishlist Books (${wishList.length})`} defaultChecked />
                    <div className="tab-content bg-base-100 border-base-300 p-6 grid grid-cols-1 gap-3">
                        {
                            wishList.length > 0 ? (wishList.map((book: BookType) => <ListedBooksCard key={book.bookId} book={book}></ListedBooksCard>)) : (
                                <p className="text-center text-lg font-semibold">
                                    No wishlist books found
                                </p>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListedBooks;