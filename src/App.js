import './App.css'

import { books } from './books'
import Book from './components/book'

// Rules:
// JSX rules
// return single element: div / section / article / fragment
// use camelCase for html attribute
// className instead of class
// close every element
// formatting

function App() {
  return (
    <div className='App'>
      <section className='books-list'>
        <h1>Books</h1>
        {books.map((book, index) => {
          // let a = 1
          // const { title, author, image, price } = book
          return (
            <Book key={index} {...book}>
              {/* Children */}
              <p>Children</p>
            </Book>
          )
        })}
      </section>
    </div>
  )
}
export default App
