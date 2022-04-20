import { useCustomContext } from '../custom hooks/useCustomContext';
import { MoviesContext } from '../context/MoviesContext';
import { MdAddBox } from "react-icons/md";

const AddToWatchList = ({ movie }) => {
    const { addToWatchList } = useCustomContext(MoviesContext);

    return (
        <div className="addtowlist" onClick={() => addToWatchList(movie)}>
            <MdAddBox style={{ fontSize: '25px', marginRight: '7px' }} />Watchlist
        </div>
    )
}


export default AddToWatchList;