
import { BookType } from '@/types/books.type';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface IBookDetailsPageProps {
  params: Promise<{
    bookId: string;
  }>;
}

const getBooks = async (): Promise<BookType[]> => {
  const res = await fetch('http://localhost:3000/booksData.json');

  if (!res.ok) {
    throw new Error('Failed to fetch books');
  }

  return res.json();
};

const Page = async ({ params }: IBookDetailsPageProps) => {
  const { bookId } = await params;
  const bookData = await getBooks();

  const book = bookData.find(
    (item) => String(item.bookId) === bookId
  );

  if (!book) notFound();

  const {
    author,
    bookName,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = book;

  return (
    <main className="container mx-auto px-4 py-10 md:py-16">

      {/* Book Details */}
      <section className="grid items-stretch gap-8 lg:grid-cols-2 lg:gap-10">

        {/* Left: Book Cover */}
        <div className="relative flex min-h-[450px] items-center justify-center overflow-hidden rounded-3xl bg-[#F3F3F3] p-8 sm:p-12 lg:min-h-[650px]">

          {/* Background Decoration */}
          <div className="absolute -left-20 -top-20 size-64 rounded-full bg-white/70 blur-3xl" />

          <div className="absolute -bottom-20 -right-20 size-72 rounded-full bg-[#23BE0A]/5 blur-3xl" />

          {/* Book Image */}
          <div className="relative flex h-full w-full items-center justify-center">
            <Image
              src={image}
              alt={bookName}
              width={500}
              height={700}
              priority
              className="h-auto max-h-[600px] w-auto max-w-full rounded-lg object-contain shadow-[0_25px_50px_-15px_rgba(0,0,0,0.25)] transition-transform duration-500 hover:scale-[1.03]"
            />
          </div>

          {/* Rating Badge */}
          <div className="absolute bottom-6 left-6 flex items-center gap-2 rounded-full border border-white/70 bg-white/90 px-4 py-2.5 shadow-sm backdrop-blur-md sm:bottom-8 sm:left-8">
            <span className="text-xl text-amber-500">★</span>
            <span className="font-bold text-gray-900">
              {rating}
            </span>
            <span className="text-sm text-gray-500">
              / 5
            </span>
          </div>
        </div>

        {/* Right: Book Information */}
        <div className="flex flex-col rounded-3xl border border-[#13131315] bg-white p-6 sm:p-8 lg:p-10">

          {/* Category & Rating */}
          <div className="mb-5 flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-[#23BE0A]/10 px-4 py-2 text-sm font-semibold text-[#23BE0A]">
              {category}
            </span>

            <span className="flex items-center gap-1.5 rounded-full bg-amber-50 px-4 py-2 text-sm font-semibold text-amber-600">
              <span>★</span>
              {rating} Rating
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-[#131313] sm:text-4xl lg:text-[42px]">
            {bookName}
          </h1>

          {/* Author */}
          <p className="mt-4 text-base text-gray-500">
            By{' '}
            <span className="font-semibold text-gray-800">
              {author}
            </span>
          </p>

          {/* Divider */}
          <div className="my-6 border-t border-[#13131315]" />

          {/* Book Category */}
          <div className="flex items-center justify-between gap-4 py-1">
            <span className="text-sm text-gray-500">
              Category
            </span>

            <span className="text-right font-medium text-gray-800">
              {category}
            </span>
          </div>

          {/* Review */}
          <div className="mt-6">
            <h2 className="mb-3 text-base font-bold text-[#131313]">
              Book Review
            </h2>

            <p className="text-sm leading-7 text-gray-600 sm:text-base">
              {review}
            </p>
          </div>

          {/* Tags */}
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <span className="text-sm font-bold text-[#131313]">
              Tags:
            </span>

            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-[#23BE0A]/5 px-4 py-2 text-sm font-medium text-[#23BE0A] transition-colors hover:bg-[#23BE0A]/15"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Divider */}
          <div className="my-6 border-t border-[#13131315]" />

          {/* Book Metadata */}
          <div className="space-y-4">

            <div className="flex items-center justify-between gap-4">
              <span className="text-sm text-gray-500">
                Number of Pages:
              </span>
              <span className="text-sm font-semibold text-[#131313]">
                {totalPages}
              </span>
            </div>

            <div className="flex items-center justify-between gap-4">
              <span className="text-sm text-gray-500">
                Publisher:
              </span>
              <span className="text-right text-sm font-semibold text-[#131313]">
                {publisher}
              </span>
            </div>

            <div className="flex items-center justify-between gap-4">
              <span className="text-sm text-gray-500">
                Year of Publishing:
              </span>
              <span className="text-sm font-semibold text-[#131313]">
                {yearOfPublishing}
              </span>
            </div>

            <div className="flex items-center justify-between gap-4">
              <span className="text-sm text-gray-500">
                Rating:
              </span>
              <span className="flex items-center gap-1 text-sm font-semibold text-[#131313]">
                <span className="text-amber-500">★</span>
                {rating}
              </span>
            </div>

          </div>

          {/* Action Buttons */}
          <div className="mt-auto flex flex-wrap gap-3 pt-8">

            <button
              type="button"
              className="btn h-12 min-h-12 rounded-xl border border-[#13131330] bg-white px-7 text-base font-semibold text-[#131313] transition-all hover:border-[#23BE0A] hover:bg-[#23BE0A]/5"
            >
              Read
            </button>

            <button
              type="button"
              className="btn h-12 min-h-12 rounded-xl border-0 bg-[#23BE0A] px-7 text-base font-semibold text-white shadow-sm transition-all hover:bg-[#1da509] hover:shadow-md"
            >
              ♡ Wishlist
            </button>

          </div>

        </div>
      </section>

      {/* Back to Books */}
      <div className="mt-8">
        <Link
          href="/books"
          className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 transition-colors hover:text-[#23BE0A]"
        >
          <span>←</span>
          Back to All Books
        </Link>
      </div>

    </main>
  );
};

export default Page;