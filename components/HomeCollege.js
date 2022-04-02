import CollegeCard from "./CollegeCard";

import Carousel from "react-elastic-carousel";

import styles from "./Homecollege.module.scss";
const HomeCollege = ({ colleges }) => {
  var collegeList = [];
  let c = [];
  colleges.map((college) => {
    // if (c.includes(college.id)) return;
    collegeList.push(college);
    c.push(college.id);
  });
  const breakPoints = [
    { width: 1, itemsToShow: 1, itemsToScroll: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
    { width: 850, itemsToShow: 3 },
    // { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
    { width: 1450, itemsToShow: 4 },
    { width: 1750, itemsToShow: 5 },
  ];
  return (
    <div className={styles.homeCollegeWrapper}>
      <h2>Our Courses</h2>
      <Carousel
        itemsToScroll={2}
        itemsToShow={4}
        breakPoints={breakPoints}
        itemPadding={[20, 20]}
      >
        {collegeList.map((college, index) => {
          return (
            <CollegeCard
              key={index}
              college={college}
              style={{ margin: "0 16px" }}
            />
          );
        })}
      </Carousel>
    </div>
  );
};

export default HomeCollege;
