import { useEffect, useState } from "react";
import { fetchProjects } from "../utils/api/fetchProjects";
import Badge from "../components/atoms/Badge";

const useAllProjects = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const data = await fetchProjects();
        const transformedData = data.map((item) => [
          item.project_name,
          item._id,
          item.project_type,
          <Badge varient={item.verification_status}>
            <div className="flex justify-center items-center w-36 text-xs h-5 ">
              {item.verification_status}
            </div>
          </Badge>,
          <div className="text-sm font-medium text-blue-800 capitalize">
            {item.registry_name}
          </div>,
        ]);
        setProjects(transformedData);
      } catch (error) {
        setError('Something went wrong!!!');
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  return [loading, error, projects];
};

export default useAllProjects;
