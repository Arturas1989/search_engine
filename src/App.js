
import './App.css';

function App(){
  return <FilterableProductTable products = {PRODUCTS}/>
}

function FilterableProductTable({products}){
  return (
    <div className = "container">
      <SearchBar />
      <ProductTable products = {products} />
    </div>
  )
}

function SearchBar(){
  return (
    <form>
      <input type="text" id="search" name="search" placeholder="Search" /><br/>
      <label>
        <input type="checkbox" />
        Only show products in stock
      </label>
    </form>
  )
}

function ProductTable({products}){
  let rows = [];
  let lastCategory = null

  products.forEach((product) => {
    if(product.category !== lastCategory){
      rows.push(
        <ProductCategoryRow key = {product.category} category = {product.category}  />
      )
    }
    rows.push(
      <ProductRow key = {product.name} name = {product.name} price = {product.price} />
    )
    lastCategory = product.category;
  })
  return (
    <table>
      <thead>
        <tr>
          <th>
            Name
          </th>
          <th>
            Price
          </th>
        </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </table>
    
  )
}

function ProductCategoryRow({category}){
  return (
    <tr>
      <td className = "categoryRow" colSpan = "2">
          {category}
      </td>
    </tr>
  )
}

function ProductRow({name, price}){
  return (
    <tr>
      <td>
        {name}
      </td>
      <td>
        {price}
      </td>
    </tr>
  )
}

const PRODUCTS = [
  {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
  {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
  {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
  {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
  {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
  {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
];

export default App;
