import axios from "axios";
import { useCallback } from "react";
import { RobotStructure } from "../types";

interface UseApiStructure {
  getRobots: () => Promise<RobotStructure[]>;
}

const apiUrl = import.meta.env.VITE_APP_API_URL;

const useApi = (): UseApiStructure => {
  const getRobots = useCallback(async (): Promise<RobotStructure[]> => {
    const { data } = await axios.get(`${apiUrl}robots`);
    return data.robots;
  }, []);

  return {
    getRobots,
  };
};

export default useApi;
