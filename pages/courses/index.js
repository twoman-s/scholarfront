import Link from "next/link";
import { API_PRODUCTION_URL, API_TEST_URL } from "../../utils/apiurls";

const CoursesList = ({ courses }) => {
  return (
    <>
      <h2>courses</h2>
      {courses.map((course) => {
        return (
          <Link passHref href={`/courses/${course.id}`} key={course.id}>
            <a>{course.name}</a>
          </Link>
        );
      })}
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
