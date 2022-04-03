import styles from "./Coursecard.module.scss";

import Link from "next/link";
import Image from "next/image";

const CourseCard = ({ course }) => {
  return (
    <div className={styles.courseCard}>
      <div className={styles.courseImg}>
        <Image
          src="/book.png"
          layout="fill"
          alt={course.name}
          objectFit="contain"
        />
      </div>
      <div className={styles.courseDetail}>
        <Link href={`/courses/${course.id}`} passHref>
          {course.name}
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;
