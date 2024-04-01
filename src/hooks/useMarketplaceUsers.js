import { useEffect, useState } from "react";
import { getMarketplaceUsers } from "../utils/api/getMarketplaceUsers";
import { useNavigate } from "react-router-dom";

const useMarketplaceUsers = (page, limit = 10) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [users, setUsers] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const navigate = useNavigate();
  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const { data, totalPages } = await getMarketplaceUsers(page, limit);
        if (page > totalPages) {
          navigate(`/marketplace-users?page=${totalPages}`);
        }
        const allUsers = data.map((item) => [
          <div className=" capitalize">{item["User Name"]}</div>,
          item._id,
          <div className=" capitalize">{item["User Type"]}</div>,
          item.Status,
        ]);
        setUsers(allUsers);
        setTotalPages(totalPages);
      } catch (error) {
        setError("Something went wrong!!!");
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [page, limit, navigate]);

  return [loading, error, users, totalPages];
};

export default useMarketplaceUsers;
