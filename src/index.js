import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { books } from './books.js'
import Book from './Book.js'

function BookList() {
  const getBook = (id) => {
    const myBook = books.find((book) => book.id === id)
    console.log(myBook)
  }

  return (
    <>
      <h1>Best Sellers</h1>
      <div className="booklist">
        {/* <EventExample /> */}
        {books.map((book, index) => {
          return (
            <Book {...book} key={book.id} getBook={getBook} index={index} />
          )
        })}
      </div>
    </>
  )
}

// function EventExample() {
//   function handleClick() {
//     alert('clicked')
//   }
//   function handleFormInput(e) {
//     console.log(e.target)
//     console.log(e.target.name)
//     console.log(e.target.value)
//     console.log('handle form input')
//   }
//   function handleSumit(e) {
//     e.preventDefault()
//     console.log('submission')
//   }
//   return (
//     <>
//       <h1>Events</h1>
//       <form onSubmit={handleSumit}>
//         <input
//           type="text"
//           name="example"
//           onChange={handleFormInput}
//           style={{ margin: '1rem 0' }}
//         />
//         <button>Submit</button>
//         <button onClick={handleClick} type="button">
//           Click
//         </button>
//       </form>
//     </>
//   )
// }

// function Book() {
//   return (
//     <div className="book">
//       <Image />
//       <Title />
//       <Author />
//     </div>
//   )
// }
//
// function Image() {
//   return (
//     <img
//       alt="A Day of Fallen Night"
//       //src="https://d1b14unh5d6w7g.cloudfront.net/1526619768.01.S001.LXXXXXXX.jpg?Expires=1679557887&Signature=B~~Bc~qG3cgumGt0zM0hOPCq-vwLP8nX0gP~eAxnG9y4CP~xpvvBT7c77VfhnFs99VOCMOHThdwKRgxNsHdm7MboeuX5rc6tENOD8pX4-mBb1j058HePpWK7UlotrZsg3BcIULEf6raFdrLZQRq3WH24cCeY~lRQnnvIIjSaDpk_&Key-Pair-Id=APKAIUO27P366FGALUMQ"
//       src="./image/img1.webp"
//     />
//   )
// }
// function Title() {
//   return <h2>A Day of Fallen Night</h2>
// }
// function Author() {
//   const inlineHeadingStyles = {
//     color: '#617d98',
//     fontSize: '0.75rem',
//     marginTop: '0.5rem',
//   }
//   return <h5 style={inlineHeadingStyles}>Samantha Shannon</h5>
// }

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<BookList />)
