import Axios from "axios";

function companyeditsave(userData) {
  return dispatch => {
    console.log(userData.email);
    if (userData.type === "edit")
      return Axios.post("http://18.221.66.220:4001/getStudentCmpDetail", {
        email: userData.email
      });
    else if (userData.type === "save")
      return Axios.post(
        "http://18.221.66.220:4001/saveStudentCmpDetail",
        userData.data
      );
  };
}

export default companyeditsave;
