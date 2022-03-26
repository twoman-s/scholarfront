import CollegeDetail from "../../components/CollegeDetail";

import { API_PRODUCTION_URL, API_TEST_URL } from "../../utils/apiurls";
var API_URL = "";

const CollegeDetails = ({ college }) => {
  return <CollegeDetail college={college} />;
};

export default CollegeDetails;

export async function getServerSideProps(context) {
  const { params } = context;
  const { collegeId } = params;
  const response = await fetch(`${API_PRODUCTION_URL}getcolleges/${collegeId}`);
  const data = await response.json();
  return {
    props: {
      college: data,
    },
  };
}
