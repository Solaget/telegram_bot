import { axiosInstance } from "./axios";

export const sendMessage = (messageObj: any, messageText: string) => {
  return axiosInstance.get("/sendMessage", {
    params: {
      chat_id: messageObj.chat.id,
      text: messageText,
    },
  });
};
