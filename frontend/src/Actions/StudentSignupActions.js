import Axios from "axios";

export function studentSignupRequest(userData) {
  return dispatch => {
    return Axios.post("http://18.221.66.220:4001/studentsignup", userData);
  };
}
