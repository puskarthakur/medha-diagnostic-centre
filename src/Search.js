import './styles/Search.css';
import SearchIcon from '@mui/icons-material/Search'
// import Button from '@mui/material/Button';
export function Search() {
  return (
    <div className='search'>
      <div className='searchInputs'>
        <input type={'text'} placeholder="this is test..." />
        <div className='searchIcon'>
         <button className='search-icon-btn'><SearchIcon/></button>
        </div>
      </div>
    </div>

  )
}
export default Search;