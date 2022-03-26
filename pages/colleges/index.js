import Link from "next/link";

import { API_PRODUCTION_URL, API_TEST_URL } from "../../utils/apiurls";

const CollegesList = ({ colleges }) => {
  return (
    <>
      <h2>Colleges</h2>
      {colleges.map((college) => {
        return (
          <>
            <Link href={`colleges/${college.id}`}>
              <a>{college.name}</a>
            </Link>
            <br />
          </>
        );
      })}
    </>
  );
};
export default CollegesList;

export async function getServerSideProps() {
  const response = await fetch(`${API_PRODUCTION_URL}getcolleges/`);
  const data = await response.json();
  return {
    props: {
      colleges: data,
    },
  };
}
