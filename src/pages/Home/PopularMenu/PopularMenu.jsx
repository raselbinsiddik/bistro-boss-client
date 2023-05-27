
import SectionsTitle from "../../../copmonets/SectionTitle/SectionsTitle";
import useMenu from "../../../hooks/UseMenu";
import MenuItem from "../../shared/MenuItem/MenuItem";


const PopularMenu = () => {
    
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular');
    
    return (
        <section className="mb-12">
            <SectionsTitle
                subHeading={"food"}
                heading={"Popular Menu"}></SectionsTitle> 
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                {
                    popular.map(item => <MenuItem key={item._id}
                    item={item}></MenuItem>)
                }
            </div>
            <button className="btn btn-outline border-0 border-b-4 mt-5">View Full menu</button>
        </section>
    );
};

export default PopularMenu;