import { BookType } from '@/types/books.type';
import Image from 'next/image';
import React from 'react';

interface BookTypeProps {
    book: BookType
}

const BookCard = ({ book }: BookTypeProps) => {
    return (
        <div className="border border-[#13131320] p-4 rounded-3xl hover:shadow-lg transition-shadow duration-300">
            {/* Book Image */}
            <div className="bg-[#F3F3F3] rounded-2xl flex justify-center items-center p-8 h-64">
                <Image
                    className="w-auto h-full object-contain rounded-md"
                    src={book.image}
                    width={160}
                    height={220}
                    alt={book.bookName}
                />
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 my-5">
                {book.tags.map((tag) => (
                    <span
                        key={tag}
                        className="bg-[#23BE0A10] text-[#23BE0A] px-3 py-1.5 rounded-lg font-semibold text-sm"
                    >
                        {tag}
                    </span>
                ))}
            </div>

            {/* Book Information */}
            <div>
                <h2 className="text-2xl font-bold line-clamp-1">
                    {book.bookName}
                </h2>

                <p className="text-gray-500 mt-2">
                    By: {book.publisher}
                </p>
            </div>

            {/* Divider */}
            <div className="divider divid-dashed"></div>

            {/* Bottom Information */}
            <div className="flex justify-between items-center font-semibold text-gray-600">
                <p>{book.category}</p>

                <div className="flex items-center gap-1">
                    <span>⭐</span>
                    <span>{book.rating}</span>
                </div>
            </div>
        </div>
    );
};

export default BookCard;