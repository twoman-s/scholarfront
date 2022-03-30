import CourseCard from "./CourseCard";
import styles from "./Homecourse.module.scss";
const HomeCourse = ({ courses }) => {
  return (
    <div className={styles.homeCourseWrapper}>
      <h2>Our Courses</h2>
      <div className={styles.homeCourses}>
        {courses.map((course) => {
          return <CourseCard key={course.id} course={course} />;
        })}
      </div>
    </div>
  );
};

export default HomeCourse;
