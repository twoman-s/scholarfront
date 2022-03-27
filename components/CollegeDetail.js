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
      </div>
    </div>
  );
};

{
  /* <div>
      <h3>{college.name}</h3>
      <p>{college.place}</p>
      <p>{college.address}</p>
      <p>{college.phone}</p>
      <p>{college.email}</p>
      <h2>Courses Available</h2>
      <ul>
        {college.courses.map((course) => {
          return (
            <li>
              <p>Name : {course.name}</p>
              <p>Duration :{course.semesters} semesters</p>
              <p>Fees :{course.fees.toString()} Rs</p>
            </li>
          );
        })}
      </ul>
      <hr />
    </div> */
}

export default CollegeDetail;
