function Book(props) {
  const { Title, Image, Author, getBook, id, index } = props
  function handleClick() {
    getBook(id)
  }

  return (
    <div className="book">
      <span className="number">{`# ${index + 1}`}</span>
      <img alt={Title} src={Image} />
      <h2>{Title}</h2>
      <h5>{Author}</h5>
      <button className="btn" type="button" onClick={handleClick}>
        GetBook
      </button>
    </div>
  )
}
export default Book
