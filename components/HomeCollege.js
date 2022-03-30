import CollegeCard from "./CollegeCard";
import styles from "./Homecollege.module.scss";
const HomeCollege = ({ colleges }) => {
  var collegeList = [];
  let c = [];
  colleges.map((college) => {
    if (c.includes(college.id)) return;
    // let id = college.id;
    // let name = college.name;
    // let col = [];
    // college.courses.map((course) => {
    //   if (course.name.toLowerCase().includes("mba")) {
    //     col.push({
    //       id,
    //       name,
    //       course: course.name,
    //     });
    //   }
    // });
    // collegeList = collegeList.concat(col.slice(0, 2));
    collegeList.push(college);
    c.push(college.id);
  });
  return (
    <div className={styles.homeCollegeWrapper}>
      <h2>Our Courses</h2>
      <div className={styles.homeColleges}>
        {collegeList.map((college, index) => {
          return <CollegeCard key={index} college={college} />;
        })}
      </div>
    </div>
  );
};

export default HomeCollege;
