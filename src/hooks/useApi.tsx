import axios from "axios";
import { useCallback } from "react";
import { RobotStructure } from "../types";

interface UseApiStructure {
  getRobots: () => Promise<RobotStructure[]>;
}

const apiUrl = import.meta.env.VITE_APP_API_URL;

const useApi = (): UseApiStructure => {
  const getRobots = useCallback(async () => {
    const { data: robots } = await axios(`${apiUrl}robots`);
    return robots;
  }, []);

  return {
    getRobots,
  };
};

export default useApi;
