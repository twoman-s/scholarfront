import Image from "next/image";

import styles from "./Details.module.scss";

const CourseDetail = ({ course }) => {
  return (
    <div className={styles.detailsWrapper}>
      <div className={styles.details}>
        <div className={styles.detailsBanner}>
          <div className={styles.imgWrapper}>
            <Image
              src="/coursebanner.jpg"
              alt="banner"
              layout="fill"
              priority
            />
          </div>
          <div className={styles.detailsHead}>
            <h2>{course.name}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
