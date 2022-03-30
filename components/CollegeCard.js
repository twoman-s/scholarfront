import Link from "next/link";
import Image from "next/image";

import styles from "./Collegecard.module.scss";

const CollegeCard = ({ college }) => {
  return (
    <div className={styles.courseCard}>
      <div className={styles.courseImage}>
        <Image
          src={
            college.college_image
              ? college.college_image
              : "https://via.placeholder.com/300x150"
          }
          layout="fill"
        />
      </div>
      <div className={styles.courseName}>
        <h4>{college.name}</h4>
        {college.courses.slice(0, 3).map((course) => {
          return <p key={course.id}>{course.name}</p>;
        })}
      </div>
      <Link passHref href={`/colleges/${college.id}`}>
        <a>View Details</a>
      </Link>
    </div>
  );
};
export default CollegeCard;
