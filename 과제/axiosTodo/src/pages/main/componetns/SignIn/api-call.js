import axios from "axios";

export const SignInUser = async (email, password) => {
  try {
    const res = await axios.post(
      "http://localhost:9000/user/login",
      {
        email,
        password,
      },
      { withCredentials: true }
    );
    return res;
  } catch (err) {
    console.log(err);
  }
};
