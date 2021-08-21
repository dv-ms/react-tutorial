const Book = (props) => {
  const { title, author, image, price } = props
  // var clickHandle = (link) => {
  //   window.location.href = link
  // }
  return (
    <div className='book'>
      <img src={image} alt={'image for ' + title} />
      <h1>{title}</h1>
      <h4>{author}</h4>
      {props.children}
      <p>$ {price}</p>
      <button
        type='button'
        onClick={() => {
          window.location.href = image
        }}
      >
        Buy
      </button>
    </div>
  )
}

// const Book = ({ title, author, image, price, children }) => {
//   return (
//     <div className='book'>
//       <img src={image} />
//       <h1>{title}</h1>
//       <h4>{author}</h4>
//       {children}
//       <p>$ {price}</p>
//     </div>
//   )
// }

export default Book
