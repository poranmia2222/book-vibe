
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Users,
  FileText,
  Star,
} from "lucide-react";

import { BookType } from "@/types/books.type";

interface BookCardProps {
  book: BookType;
}

const BookCard = ({ book }: BookCardProps) => {
  return (
    <div className="group flex flex-col sm:flex-row gap-5 rounded-2xl border border-gray-200 p-4 sm:p-5 transition-all duration-300 hover:border-green-300 hover:shadow-lg">

      {/* Book Image */}
      <div className="flex shrink-0 items-center justify-center rounded-xl bg-gray-100 p-5 sm:w-50">
        <Image
          src={book.image}
          alt={book.bookName}
          width={150}
          height={200}
          className="h-45 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Book Information */}
      <div className="flex min-w-0 flex-1 flex-col">

        {/* Title & Author */}
        <div>
          <h2 className="font-serif text-xl font-bold text-gray-900 sm:text-2xl">
            {book.bookName}
          </h2>

          <p className="mt-2 text-sm text-gray-600">
            By : {book.author}
          </p>
        </div>

        {/* Tags & Metadata */}
        <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-3">

          <span className="text-sm font-semibold text-gray-800">
            Tag
          </span>

          {book.tags.map((tag, index) => (
            <span
              key={`${tag}-${index}`}
              className="rounded-full bg-green-50 px-4 py-1.5 text-sm text-green-600"
            >
              #{tag}
            </span>
          ))}

          <div className="flex items-center gap-2 text-sm text-gray-600">
            <MapPin size={18} />
            <span>{book.yearOfPublishing}</span>
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Users size={18} />
            <span>Publisher: {book.publisher}</span>
          </div>
        </div>

        {/* Pages */}
        <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">
          <FileText size={18} />
          <span>Page {book.totalPages}</span>
        </div>

        <div className="my-4 border-t border-gray-200" />

        {/* Bottom Actions */}
        <div className="mt-auto flex flex-wrap items-center gap-3">

          <span className="rounded-full bg-blue-50 px-5 py-2.5 text-sm text-blue-600">
            Category: {book.category}
          </span>

          <span className="flex items-center gap-1 rounded-full bg-orange-50 px-5 py-2.5 text-sm text-orange-600">
            <Star size={15} fill="currentColor" />
            Rating: {book.rating}
          </span>

          <Link
            href={`/books/${book.bookId}`}
            className="rounded-full bg-green-600 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-green-700"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookCard;