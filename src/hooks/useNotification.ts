import { toast } from "react-toastify";

export const useNotification = () => {
  const notify = (message: string) => toast(message);
  return { notify };
};