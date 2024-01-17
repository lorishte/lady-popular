import { USER_ASSETS } from "../../data/user-assets";
import AssetTile from "../ui/AssetTile";
import Header from "./header/Header";

const RightBoard = () => {

    return (
        <div className='right-board'>
            <h2>Win dollars, emeralds and unique rewards!</h2>

            <div className='right-board__assets'>
                {USER_ASSETS.map(item =>
                    <AssetTile key={item} asset={item}/>)}
            </div>

            <div className='right-board__footer'>
                <button className='btn btn--primary'>
                    <span>View Outfit</span>
                </button>
            </div>
        </div>
    )
}

export default RightBoard