import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure, mount } from "enzyme";
import { AppContext } from "../App/AppContext"; // Adjust the path to the context module accordingly
import Footer from "./Footer";

configure({ adapter: new Adapter() });

describe("Footer Component", () => {
  it("should render without crashing", () => {
    shallow(<Footer />);
  });

  it('should render the text "Copyright"', () => {
    const wrapper = shallow(<Footer />);
    const text = wrapper.text();
    expect(text).toContain("Copyright");
  });

  it("should not display the 'Contact us' link when the user is logged out within the context", () => {
    const wrapper = mount(
      <AppContext.Provider value={{ user: { isLoggedIn: false, email: "" } }}>
        <Footer />
      </AppContext.Provider>
    );
    const contactLink = wrapper.find("a[href='/contact']");
    expect(contactLink.exists()).toBe(false);
  });

  it("should display the 'Contact us' link when the user is logged in within the context", () => {
    const wrapper = mount(
      <AppContext.Provider
        value={{ user: { isLoggedIn: true, email: "test@example.com" } }}
      >
        <Footer />
      </AppContext.Provider>
    );
    const contactLink = wrapper.find("a[href='/contact']");
    expect(contactLink.exists()).toBe(true);
    expect(contactLink.text()).toEqual("Contact us");
  });
});
