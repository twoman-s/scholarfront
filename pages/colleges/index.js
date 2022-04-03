import CollegeCard from "../../components/CollegeCard";

import styles from "./../../styles/Colleges.module.scss";

import { API_PRODUCTION_URL, API_TEST_URL } from "../../utils/apiurls";

const CollegesList = ({ colleges }) => {
  return (
    <div className={styles.collegeWrapper}>
      <h2>Colleges</h2>
      <div className={styles.collegeList}>
        {colleges.map((college, index) => {
          return <CollegeCard key={index} college={college} />;
        })}
      </div>
    </div>
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
