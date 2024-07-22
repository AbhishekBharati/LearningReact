const ItemList = () => {
  // For Arrays
  const items = ['Apple', 'Banana', 'Cherry']
  // We provide a Key Property to each list item. Keys help react identify which items have changed, are added, or are removed.
  // Keys should be unique among siblings. In this simple example, we use the `index` of the array as key.

  // Very important inside return the syntax of arrow function is () => () And Not () => {}
  // Basically if u wanna use () => { } then return the html i.e what html you wanna return.
  // or if we directly write this () => () it means it's directly returning the html as we haven't used {} brackets.

  return (
    <div>
      <ul>
        {items.map((item, index) => {
          return <li key={index}>{item}</li>
        })}
      </ul>
    </div>
  )
}

export default ItemList;
