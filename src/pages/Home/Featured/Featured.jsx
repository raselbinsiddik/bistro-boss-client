import SectionsTitle from "../../../copmonets/SectionTitle/SectionsTitle";
import featuredImg from '../../../assets/home/featured.jpg'
import './Fetaured.css';


const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-10 my-20">
            <SectionsTitle
                subHeading="check it out"
                heading="Featured item"></SectionsTitle>
            <div className="md:flex justify-center bg-slate-500 bg-opacity-60 items-center py-20 pb-20 px-36">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
           
            <div className="md:ml-10">
                <p>Aug 20, 2019</p>
                <p>Where can i get some</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium earum eveniet a odit consequatur obcaecati accusantium perspiciatis expedita repudiandae unde culpa laborum molestias pariatur tempore incidunt voluptatibus, aspernatur porro labore.</p>
                <button className="btn btn-outline border-0 border-b-4 mt-5">Orde Now</button>
            </div>
            </div>
        </div>
    );
};

export default Featured;