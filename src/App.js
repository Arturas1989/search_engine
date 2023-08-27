
import './App.css';

function FilterableProductTable(){
  return (
    <>
      <SearchBar />
      <ProductTable />
    </>
  )
}

function SearchBar(){
  return (
    <>
      <label for="search">Search item</label><br></br>
      <input type="search" id="search" name="search" placeholder="search"></input>
    </>
    
  )
}

function ProductTable(){
  return (
    <>
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
    </>
  )
}

function ProductCategoryRow(){
  return (
    <tr>
      <td colSpan = "2">
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
