import './styles/Search.css';
import SearchIcon from '@mui/icons-material/Search'
export function Search() {
  return (
    <div className='search'>
      <div className='searchInputs'>
        <input type={'text'} placeholder="this is test..." />
        <div className='searchIcon'>
          <SearchIcon/>
        </div>
      </div>
    </div>

  )
}
export default Search;