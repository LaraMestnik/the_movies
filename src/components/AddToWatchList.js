import { useCustomContext } from '../custom hooks/useCustomContext';
import { MoviesContext } from '../context/MoviesContext';
import { MdAddBox } from "react-icons/md";
import { AuthContext } from '../context/AuthContext';

const AddToWatchList = ({ movie }) => {
    const { addToWatchList } = useCustomContext(MoviesContext);
    const { user } = useCustomContext(AuthContext);

    return (
        <div className="addtowlist" onClick={() => addToWatchList(movie, user.uid)}>
            <MdAddBox style={{ fontSize: '25px', marginRight: '7px' }} />Watchlist
        </div>
    )
}


export default AddToWatchList;