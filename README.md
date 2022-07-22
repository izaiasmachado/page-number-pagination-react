# Pagination React
Fetches data from a Django REST API and shows data given a default [Page Number Pagination](https://www.django-rest-framework.org/api-guide/pagination/#pagenumberpagination).

## Final Result
Using React Strap and the help of a [gist](https://gist.github.com/kottenator/9d936eb3e4e3c3e02598) I implemented something of a [Google Pagination](https://developers.google.com/search/docs/advanced/ecommerce/pagination-and-incremental-page-loading).

![image](https://user-images.githubusercontent.com/47287096/180448615-9241fe8c-cb4d-4b23-aab8-978fcc2da5c5.png)

## Page Number Pagination JSON Format
A common pattern in pagination is the following, with the total number of records and the link for the next and previous page.
```json
// GET http://localhost:8000/books/?page=1
{
    "count": 12,
    "next": "http://localhost:8000/books/?page=4",
    "previous": "http://localhost:8000/books/?page=2",
    "results": [
        {
            "id_book": 5,
            "title": "Livro 5",
            "author": "Autor 5",
            "release_year": 2005,
            "pages": 105
        },
        {
            "id_book": 6,
            "title": "Livro 6",
            "author": "Autor 6",
            "release_year": 2006,
            "pages": 106
        }
    ]
}
```

## Pagination Component Usage
Even though it is given the previous and the next route, for this component, you just need to give the current page number, last page number and a function that triggers the fetch of a given page. 
```js
<PaginationComponent
  current={state.page.current}
  last={state.pagination.last}
  gotoPage={handleGotoPage}
/>
```
