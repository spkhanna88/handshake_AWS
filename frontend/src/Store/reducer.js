const initialCompanyFormState = {
  companyname: "",
  email: "",
  password: "",
  location: ""
};

const reducer = (state = initialCompanyFormState, action) => {
  if (action.type === "COMPANYNAMECHANGE") {
    return {
      companyname: state.companyname
      //   email: this.value,
      //   password: this.value,
      //   location: this.value
    };
  }
  return state;
};

export default reducer;
