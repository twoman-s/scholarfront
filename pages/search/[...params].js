import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from "next/link";
import { API_PRODUCTION_URL, API_TEST_URL } from "../../utils/apiurls";

export default function SearchResultPage() {
  const router = useRouter();
  const [searchKeyword, setSearchKeyword] = useState();
  const [isloading, setIsloading] = useState(true);
  const [searchCollegeResults, setSearchCollegeResults] = useState();
  const [searchCourseResults, setSearchCourseResults] = useState();
  const { params = [] } = router.query;
  async function getSearchResults(params) {
    if (params.length > 0) {
      setSearchKeyword(params);
      setSearchCollegeResults();
      setSearchCourseResults();
      const response = await fetch(`${API_PRODUCTION_URL}search/${params[0]}/`);
      const data = await response.json();
      if (data.colleges.length > 0) {
        setSearchCollegeResults(data.colleges);
      }
      if (data.courses.length > 0) {
        setSearchCourseResults(data.courses);
      }
      setIsloading(false);
    }
  }
  useEffect(() => {
    getSearchResults(params);
  }, [params]);
  if (isloading) {
    return <h1>Loading</h1>;
  } else {
    return (
      <div>
        <h2>Search Results for {params[0]}</h2>
        <h3>Colleges</h3>
        {searchCollegeResults ? (
          searchCollegeResults.map((college) => {
            return (
              <Link passHref href={`/colleges/${college.id}`}>
                <a>
                  {college.name}
                  <br />
                </a>
              </Link>
            );
          })
        ) : (
          <p>No colleges found</p>
        )}
        <h3>Courses</h3>
        {searchCourseResults ? (
          searchCourseResults.map((course) => {
            return (
              <Link passHref href={`/courses/${course.id}`}>
                <a>
                  {course.name}
                  <br />
                </a>
              </Link>
            );
          })
        ) : (
          <p>No courses found</p>
        )}
      </div>
    );
  }
}
