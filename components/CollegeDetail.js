import Image from "next/image";

import styles from "./Details.module.scss";

const CollegeDetail = ({ college }) => {
  return (
    <div className={styles.detailsWrapper}>
      <div className={styles.details}>
        <div className={styles.detailsBanner}>
          <div className={styles.imgWrapper}>
            <Image
              src="/collegebanner.jpg"
              alt="banner"
              layout="fill"
              priority
            />
          </div>
          <div className={styles.detailsHead}>
            <h2>{college.name}</h2>
          </div>
        </div>
        <div className={styles.detailsContent}>
          Available Courses
          {college.courses.map((course) => {
            return <h1 key={course.id}>{course.name}</h1>;
          })}
        </div>
        <a href={college.fee_brochure} target="_blank" rel="noreferrer">
          Download Fees Brochure
        </a>
      </div>
    </div>
  );
};

export default CollegeDetail;
