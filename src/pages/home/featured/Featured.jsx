import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg';
import './Featured.css';

const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-8 my-20 mb-12">
            <SectionTitle
            subHeading='Check It Out'
            heading='Featured Item'
            ></SectionTitle>
            <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-70 pb-20 pt-12 px-36">
            <div>
                <img src={featuredImg} alt="" />
            </div>
            <div className="md:ml-10">
                <p>June 10, 2024</p>
                <p>Where Can I get Some?</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae repudiandae odit eveniet deleniti enim assumenda, quos doloremque, voluptate et illo ullam quo earum animi blanditiis in veritatis distinctio natus mollitia voluptatum dignissimos porro, vero quasi sed? Cupiditate facere neque harum hic, aliquam, ut, fuga sequi quia veritatis debitis impedit unde.</p>
                <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
            </div>
            </div>
        </div>
    );
};

export default Featured;