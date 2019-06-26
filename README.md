# My 8th Light Code Submission

Welcome to my coding challenge for a shot at the 8th Light Resident Apprenticeship position. This was done using React and TDD with Jest/Enzyme (to the best of my ability).

### Features

* Allows user to input a search term. If the term is not found, a messsage saying the book was not found will show.
* If the book is found, then it will render a list of 40 books.
* Each book will include its cover image, author(s), publisher, and a link with more information about the book.

### Approach

Below are the steps I took for my approach on how to complete this application:
1. Created the foundation of necessary components that I thought were suitable for the application, which are:
* App component
* SearchBar component
* BookList component
* Book component
* API instance
2. Implemented a form with an input element inside the SearchBar element, which passed the search term to the App component through props.
3. App component gets the search term from the callback and makes an API request.
4. API instance returns Promise to the App component.
5. App component resolves the Promise and sets the 'books' state with the book results.
6. The 'books' state is passed into the BookList component, where the book results are mapped into individual Book components and then returned as a list.
7. Each book component will display the required information: the book's author, title, publishing company, as well as a picture of the book.
