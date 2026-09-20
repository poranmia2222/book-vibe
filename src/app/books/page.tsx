import React from 'react';
import { BookType } from '@/types/books.type';
import BookCard from '@/component/shared/BookCard';

const getBooks = async () => {
    const res = await fetch('http://localhost:3000//booksData.json')
    const data = await res.json()
    return data
}

const Books = async () => {
    const books:BookType[] = await getBooks()
    // console.log(books)
    return (
        <section>
            <div className='container mx-auto my-10'>
                <h2 className='text-center text-4xl font-bold'>Books</h2>
                <div className='grid grid-cols-3 gap-4 my-8'>
                    {
                        books.map(book => <BookCard key={book.bookId} book={book}></BookCard>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Books;