
import './App.css';

function FilterableProductTable(){
  return (
    <div className = "container">
      <SearchBar />
      <ProductTable />
    </div>
  )
}

function SearchBar(){
  return (
    <>
      <label htmlFor="search">Search item</label>
      <input type="search" id="search" name="search" placeholder="search"></input>
    </>
    
  )
}

function ProductTable(){
  return (
    <table>
      <tbody>
        <tr>
          <th>
            Name
          </th>
          <th>
            Price
          </th>
        </tr>
        <ProductCategoryRow />
          <ProductRow />
          <ProductRow />
          <ProductRow />
        <ProductCategoryRow />
          <ProductRow />
          <ProductRow />
          <ProductRow />
      </tbody>
    </table>
    
  )
}

function ProductCategoryRow(){
  return (
    <tr>
      <td className = "categoryRow" colSpan = "2">
          category
      </td>
    </tr>
  )
}

function ProductRow(){
  return (
    <tr>
      <td>
        Item
      </td>
      <td>
        Price
      </td>
    </tr>
  )
}

export default FilterableProductTable;
