import Link from "next/link";
import CourseCard from "../../components/CourseCard";

import { API_PRODUCTION_URL, API_TEST_URL } from "../../utils/apiurls";

import styles from "./../../styles/Courses.module.scss";

const CoursesList = ({ courses }) => {
  return (
    <>
      <div className={styles.courseWrapper}>
        <h2>Our Courses</h2>
        <div className={styles.courseList}>
          {courses.map((course, index) => {
            return <CourseCard key={index} course={course} />;
          })}
        </div>
      </div>
    </>
  );
};
export default CoursesList;

export async function getServerSideProps() {
  const response = await fetch(`${API_PRODUCTION_URL}getcourses/`);
  const data = await response.json();
  return {
    props: {
      courses: data,
    },
  };
}
