import React from "react";
import { render, cleanup } from "@testing-library/react";
import App from "./App";

afterEach(cleanup);

it("should take a snapshot", () => {
	const { asFragment } = render(<App />);
	expect(asFragment(<App />)).toMatchSnapshot();
});


// import React from "react";
// import Enzyme, { shallow, render, mount } from "enzyme";
// import toJson from "enzyme-to-json";
// import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

// import App from "./App";

// Enzyme.configure({ adapter: new Adapter() });

// it("renders correctly enzyme", () => {
// 	const wrapper = shallow(<App />);

// 	expect(toJson(wrapper)).toMatchSnapshot();
// });
