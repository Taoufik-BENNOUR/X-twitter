import { SearchRounded } from "@mui/icons-material"

const Search = () => {
  return (
    <div className="flex items-center bg-inputGray py-2 rounded-full p-4">
        <SearchRounded/>
        <input type="text" placeholder="seach" className="bg-transparent outline-none" />
    </div>
  )
}

export default Search