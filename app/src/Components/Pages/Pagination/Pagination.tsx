import { FC } from 'react';

interface PaginationProps {
  postsPerPage: number;
  totalPosts: number;
  currentPage: number
  setCurrentPage: (page: number) => void;
}

const Pagination: FC<PaginationProps> = ({
  postsPerPage,
  totalPosts,
  setCurrentPage,
  currentPage
}) => {
  
  const pages: number[] = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }

  return (
    <div className='flex gap-8'>
      {pages.map((page, index) => {
        return (
          <button
            className={page == currentPage ? 'focus:bg-red-600 p-2 rounded-[6px] text-white' : "border-[1px] hover:scale-[1.1] transition ease-in-out border-red-600 p-2 rounded-[6px]"}
            onClick={() => setCurrentPage(page)}
            key={index}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;
