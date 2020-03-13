import Axios from "axios";

function viewProfileAction(userData) {
  return dispatch => {
    console.log(userData.email);
    return Axios.post("http://18.221.66.220:4001/getStudentBasicDetail", {
      email: userData.email
    });
  };
}

export default viewProfileAction;
