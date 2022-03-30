import Link from "next/link";
import Image from "next/image";

import styles from "./Coursecard.module.scss";

const CourseCard = ({ course }) => {
  return (
    <div className={styles.courseCard}>
      <div className={styles.courseImage}>
        <Image src="https://via.placeholder.com/300x150" layout="fill" />
      </div>
      <div className={styles.courseName}>
        <Link passHref href={`/courses/${course.id}`}>
          <a>{course.name}</a>
        </Link>
      </div>
    </div>
  );
};
export default CourseCard;
