import { FC } from 'react';

interface PaginationProps {
    postsPerPage: number;
    totalPosts: number;
  }

const Pagination: FC<PaginationProps> = ({postsPerPage, totalPosts}) => {

    const pages: number[] = [] 
console.log('postsPerPage>>', postsPerPage);
console.log('totalPosts', totalPosts);


    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pages.push(i)
        console.log('pages>>>', pages);
    }

    return (
        <div>
            {
                pages.map((page, index) => {
                    return <button key={index}>{page}</button>
                })
            }
        </div>
    )
}

export default Pagination