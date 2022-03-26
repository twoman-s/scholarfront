import CourseDetail from "../../components/CourseDetail";

import { API_PRODUCTION_URL, API_TEST_URL } from "../../utils/apiurls";

const CourseDetails = ({ courses }) => {
  return <CourseDetail course={courses} />;
};

export default CourseDetails;

export async function getServerSideProps(context) {
  const { params } = context;
  const { courseId } = params;
  const response = await fetch(`${API_PRODUCTION_URL}getcourses/${courseId}`);
  const data = await response.json();

  return {
    props: {
      courses: data,
    },
  };
}
