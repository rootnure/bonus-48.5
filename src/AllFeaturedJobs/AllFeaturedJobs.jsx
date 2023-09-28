import { Helmet } from "react-helmet-async";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";

const AllFeaturedJobs = () => {
    return (
        <div>
            <Helmet>
                <title>Jobs | Career Hub</title>
            </Helmet>
            <FeaturedJobs></FeaturedJobs>
        </div>
    );
};

export default AllFeaturedJobs;