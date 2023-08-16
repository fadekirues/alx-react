import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
configure({ adapter: new Adapter() });
import Footer from "./Footer";

describe("Footer Component", () => {
  it("should render without crashing", () => {
    shallow(<Footer />);
  });

  it('should render the text "Copyright"', () => {
    const wrapper = shallow(<Footer />);
    const text = wrapper.text();
    expect(text).toContain("Copyright");
  });
});
