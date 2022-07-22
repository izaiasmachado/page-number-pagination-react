import React from 'react'
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';


const paginate = (currentPage, lastPage, clickEvent) => {
    // https://gist.github.com/kottenator/9d936eb3e4e3c3e02598
    const delta = 2
    const range = []
      
    const startNum = Math.max(2, (currentPage - delta))
    const endNum = Math.min((lastPage - 1), (currentPage + delta))

    for (let i = startNum; i <= endNum; i++) {
        range.push(i)
    }
  
    if ((currentPage - delta) > 2) {
        range.unshift('...')
    }
  
    if ((currentPage + delta) < (lastPage - 1)) {
        range.push('...')
    }
  
    range.unshift(1)
    if (lastPage !== 1) range.push(lastPage)
  
    const pages = range.map((i, index) => (
        <PaginationItem
                 key={index}
                 active={i === currentPage}
                 onClick={() => clickEvent(i)}
                 disabled={i === '...'}
             >
             <PaginationLink>
                 {i}
             </PaginationLink>
         </PaginationItem>
        )
     )

    return pages
}

function PaginationComponent(props) {
    const { current, last, gotoPage } = props

    return (
        <Pagination aria-label="Page navigation example">
            <PaginationItem disabled={current === 1}>
                <PaginationLink 
                    previous
                    onClick={() => gotoPage(current - 1)}
                />
            </PaginationItem>

            {paginate(current, last, gotoPage)}

            <PaginationItem disabled={current === last}>
                <PaginationLink 
                    next
                    onClick={() =>  gotoPage(current + 1)}
                />
            </PaginationItem>
        </Pagination>
    )
}


export default PaginationComponent