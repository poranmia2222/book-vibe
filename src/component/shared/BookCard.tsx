
'use client';

import { BookType } from '@/types/books.type';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

interface BookTypeProps {
  book: BookType;
}

const BookCard = ({ book }: BookTypeProps) => {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-3xl border border-base-300 bg-base-100 p-4 transition-all duration-300 hover:-translate-y-2 hover:border-primary/30 hover:shadow-xl">

      {/* Book Cover */}
      <div className="relative flex h-64 items-center justify-center overflow-hidden rounded-2xl bg-base-200 p-6">

        <Image
          src={book.image}
          width={180}
          height={240}
          alt={book.bookName}
          className="h-full w-auto rounded-md object-contain shadow-md transition-transform duration-500 group-hover:scale-105"
        />

        {/* Favorite Button */}
        <button
          type="button"
          onClick={() => setIsFavorite(!isFavorite)}
          aria-label={
            isFavorite
              ? 'Remove from favorites'
              : 'Add to favorites'
          }
          aria-pressed={isFavorite}
          className="absolute right-3 top-3 flex size-10 items-center justify-center rounded-full bg-base-100/90 text-xl shadow-sm backdrop-blur transition-all hover:scale-110 active:scale-95"
        >
          <span className={isFavorite ? 'text-error' : 'text-base-content/60'}>
            {isFavorite ? '♥' : '♡'}
          </span>
        </button>

        {/* Rating Badge */}
        <div className="absolute bottom-3 right-3 flex items-center gap-1 rounded-full bg-base-100/90 px-3 py-1.5 text-sm font-semibold shadow-sm backdrop-blur">
          <span className="text-amber-500">★</span>
          <span>{book.rating}</span>
        </div>
      </div>

      {/* Tags */}
      <div className="my-4 flex flex-wrap gap-2">
        {book.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-success/10 px-3 py-1 text-xs font-semibold text-success transition-colors hover:bg-success/20"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Book Information */}
      <div className="flex-1">
        <h2
          title={book.bookName}
          className="line-clamp-2 text-xl font-bold leading-snug transition-colors group-hover:text-primary"
        >
          {book.bookName}
        </h2>

        <p className="mt-2 text-sm text-base-content/60">
          Published by{' '}
          <span className="font-medium text-base-content/80">
            {book.publisher}
          </span>
        </p>
      </div>

      {/* Divider */}
      <div className="my-4 border-t border-dashed border-base-300" />

      {/* Category & Rating */}
      <div className="mb-4 flex items-center justify-between gap-3 text-sm">
        <span className="rounded-lg bg-base-200 px-3 py-1.5 font-medium text-base-content/70">
          {book.category}
        </span>

        <span className="text-base-content/50">
          Reader rating
        </span>
      </div>

      {/* View Details Button */}
      <Link
        href={`/books/${book.bookId}`}
        className="btn btn-primary w-full rounded-xl transition-all duration-300 group-hover:shadow-md"
      >
        View Details
        <span className="transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      </Link>
    </div>
  );
};

export default BookCard;