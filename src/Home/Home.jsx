import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import CategoryList from "../CategoryList/CategoryList";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";
import SimpleMap from "../GoogleMap/GoogleMap";

const Home = () => {
    return (
        <section>
            <Helmet>
                <title>Home | Career Hub</title>
            </Helmet>
            <Banner></Banner>
            <CategoryList></CategoryList>
            <FeaturedJobs></FeaturedJobs>
            <SimpleMap></SimpleMap>
        </section>
    );
};

export default Home;