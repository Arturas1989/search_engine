
import './App.css';
import { useState, useEffect} from 'react';

function App(){
  return <FilterableProductTable products = {PRODUCTS}/>
}


function FilterableProductTable({products}){
  const [filterText, setFilterText] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);
  return (
    <div className = "container">
      <SearchBar 
        filterText = {filterText} 
        inStockOnly = {inStockOnly} 
        onFilterTextChange = {setFilterText}
        onInStockOnlyChange = {setInStockOnly}
      />
      <ProductTable 
        products = {products} 
        filterText = {filterText} 
        inStockOnly = {inStockOnly}
      />
    </div>
  )
}

function SearchBar({filterText, inStockOnly, onFilterTextChange, onInStockOnlyChange}){
  // The SearchBar component updates filterText and inStockOnly states
  // based on user input and checkbox interaction.
  return (
    <form>
      <input 
        type="text"
        id="search" 
        value = {filterText} 
        placeholder="Search" 
        onChange= {(e) => onFilterTextChange(e.target.value)}/>
      <br/>
      <label>
        <input 
          type="checkbox"
          id="checkbox" 
          checked = {inStockOnly} 
          onChange = {(e) => onInStockOnlyChange(e.target.checked)}/>
          Only show products in stock
      </label>
    </form>
  )
}

// The filterProducts function filters products based on the user's criteria.
// It filters by name and stock availability.
function filterProducts(products, filterText, inStockOnly){
  console.log(filterText)
  if(!filterText) return products;
  const filterTextLower = filterText.toLowerCase();
  return products.filter(function(row){
    if(inStockOnly && !row.stocked) return false;
    for(const key in row){
      if(typeof row[key] == 'string'){
        if(row[key].toLowerCase().indexOf(filterTextLower) !== -1) return true;
      }
      
    }
    return false;
  });
}

function ProductTable({products, filterText, inStockOnly}){

  const [filteredProducts, setFilteredProducts] = useState([]);

  // The debounce technique delays the execution of filterProducts function
  // until the user has finished typing.
  useEffect(() => {
    const debounceFilter = setTimeout(function(){
      const filtered = filterProducts(products, filterText, inStockOnly);
      setFilteredProducts(filtered);
    },300)

    // The arrow function ensures cleanup when the component unmounts
    // or when dependencies change, preventing multiple scheduled executions.
    return () => clearTimeout(debounceFilter);
  }, [filterText, inStockOnly, products]) // dependency array, which specifies values the effect depends on.
  //when any of the values listed in dependency array change, the effect will re-run.
  
  let rows = [];
  let lastCategory = null
  
  // Constructing components to display filteredProducts.
  filteredProducts.forEach((product) => {
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
