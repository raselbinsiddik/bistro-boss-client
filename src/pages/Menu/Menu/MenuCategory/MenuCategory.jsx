import { Link } from "react-router-dom";
import Cover from "../../../shared/Cover/Cover";
import MenuItem from "../../../shared/MenuItem/MenuItem";


const MenuCategory = ({items, title, img}) => {
    return (
        <div className="pt-8">
            {title &&
                <Cover img={img} title={title}></Cover>
            }
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 my-8">
                {
                    items.map(item => <MenuItem key={item._id}
                        item={item}></MenuItem>)
                }
               
            </div>
            <Link to={`/order/${title}`}> <button className="btn btn-outline border-0 border-b-4 mt-4">Orde Now</button></Link>
        </div>
    );
};

export default MenuCategory;