import { FC } from 'react';

interface PaginationProps {
  postsPerPage: number;
  totalPosts: number;
  setCurrentPage: (page: number) => void;
}

const Pagination: FC<PaginationProps> = ({
  postsPerPage,
  totalPosts,
  setCurrentPage,
}) => {
  const pages: number[] = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }

  return (
    <div className='flex gap-6'>
      {pages.map((page, index) => {
        return (
          <button
            className="flex-col gap-6"
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
