import axios from "axios";

const profileAPI = async (token) => {
  const response = await axios.get(
    `https://dictionarybackendapp-production.up.railway.app/v1/users/${token}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response;
};

export { profileAPI };
