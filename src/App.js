
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
    <form>
      <input type="text" id="search" name="search" placeholder="Search" /><br/>
      <label>
        <input type="checkbox" />
        Only show products in stock
      </label>
    </form>
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
