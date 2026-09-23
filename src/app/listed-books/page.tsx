"use client";
import ListedBooksCard from '@/component/shared/ListedBooksCard';
import { BooksContext } from '@/context/BooksContext';
import { BookType } from '@/types/books.type';
import { useContext, useState } from 'react';

const ListedBooks = () => {
    const { readBooks, wishList } = useContext(BooksContext)

    const [sortBy, setSortBy] = useState<"rating" | "pages" | "year">("rating")
    console.log(sortBy)

    const sortBook = (books: BookType[]):BookType[] => {
        const sortedBooks = [...books];
        if(sortBy === "rating"){
            sortedBooks.sort((a, b)=> a.rating - b.rating)
        }
        if(sortBy === "pages"){
            sortedBooks.sort((a, b)=> a.totalPages - b.totalPages)
        }
        if(sortBy === "year"){
            sortedBooks.sort((a, b)=> a.yearOfPublishing - b.yearOfPublishing)
        }
        return sortedBooks
    }

    const sortReadBooks = sortBook(readBooks);
    // const sortWishListBooks = ;

    return (
        <div className='container mx-auto '>
            <h2 className="my-4 bg-[#13131310] rounded-3xl py-16 font-bold text-4xl text-center">
                Listed Books
            </h2>
            <div className='text-center'>
                <select
                    onClick={(e) => setSortBy(e.target.value as "rating" | "pages" | "year")}
                    className="p-2 bg-[#23BE0A] text-white font-semibold " >

                    <option disabled={true}>Sort By</option>
                    <option value={"rating"}>Rating</option>
                    <option value={"pages"}>Number of pages</option>
                    <option value={"year"}>Publisher year</option>
                </select>
            </div>
            <div>
                {/* name of each tab group should be unique */}
                <div className="tabs tabs-lift">
                    <input type="radio" name="my_tabs_3" className="tab" aria-label={`Read Books (${readBooks.length})`} />
                    <div className="tab-content bg-base-100 border-base-300 p-6 grid grid-cols-1 gap-3">
                        {
                            sortReadBooks.length > 0 ? (sortReadBooks.map((book: BookType) => <ListedBooksCard key={book.bookId} book={book}></ListedBooksCard>)) : <p className="text-center text-lg font-semibold">
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