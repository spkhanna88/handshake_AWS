// import React from 'react';
// import { render } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

import React from "react";
import { shallow, mount, render } from "./enzyme";
//import AddEventForm from "./CompanyDashboard/CompEvents/Components/AddEventForm";
import CompanyAddJob from "./CompanyDashboard/CompDashboard/Components/CompanyAddJob";
//Test Case 1:

// describe("Login Test Suite", () => {
//   it("should render the form", () => {
//     const wrapper = shallow(<AddEventForm />);

//     expect(wrapper.find("form.eventform").exists()).toBe(true);
//   });
// });

//Test Case 3:

// describe("Email Test Suite", () => {
//   it("should change the state of the Login component", () => {
//     const wrapper = shallow(<CompanyAddJob />);
//     wrapper.find("#jobtitle").simulate("change", {
//       target: { name: "jobtitle", value: "Software Engineer" }
//     });

//     expect(wrapper.state("jobtitle")).toEqual("Software Engineer");
//   });
// });
