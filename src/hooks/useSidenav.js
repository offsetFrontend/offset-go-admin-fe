import { useEffect, useState } from "react";
import sidenav from "../utils/api/sidenav";
import toast from "react-hot-toast";

export const useSidenav = () => {
  const [loading, setLoading] = useState(false);
  const [sidenavData, setSidenavData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data } = await sidenav();
        setSidenavData(data);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return { loading, sidenavData };
};
