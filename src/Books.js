import logo from './logo.svg'
import './Books.css'
import api from './services/api'
import { useState, useEffect } from 'react'
import PaginationComponent from './components/PaginationComponent'

function Books() {
    const [state, setState] = useState({})
    const [books, setBooks] = useState({})

    useEffect(() => {
        setData('/books/')
    }, [])

    async function setData(url) {
        if (url === null) return
        const response = await api.get(url)
        const { results, count } = response.data

        state.pagination = {
            current: state?.pagination?.current ?? 1,
            last: Math.ceil(count / 2)
        }
        
        setState(state)
        setBooks(results)
    }

    function handleGotoPage(page) {
        state.pagination.current = page
        setData(`/books/?page=${page}`)
    }
    
    return (
        <div id="book-list-container">
            <h2>Books</h2>
            {
                (books.length > 0) ?
                    <>
                        <div id="book-shelf-container">
                                {
                                    books.map(book => (

                                        <>
                                            <div key={book.id_book}>
                                                <p>{book.title}</p>
                                            </div>
                                        </>
                                    ))
                                }
                        </div>
                        
                        <PaginationComponent
                            {...state.pagination}
                            gotoPage={handleGotoPage}
                        />

                    </>
                    : <p>No here yet</p>
            }
        </div>
    )
}

export default Books