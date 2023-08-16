import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
configure({ adapter: new Adapter() });
import WithLogging from "./WithLogging";
// Create a mock for console.log
const consoleLogMock = jest.spyOn(console, "log").mockImplementation(() => {});

// Test pure HTML element wrapped with WithLogging
test("console.log called on mount and unmount with Component when wrapped element is pure html", () => {
  const WrappedComponent = WithLogging(() => <p>Test</p>);
  const wrapper = shallow(<WrappedComponent />);
  expect(consoleLogMock).toHaveBeenCalledWith(
    "Component Component is mounted on componentDidMount()"
  );
  wrapper.unmount();
  expect(consoleLogMock).toHaveBeenCalledWith(
    "Component Component is going to unmount on componentWillUnmount()"
  );
});

// Test Login component wrapped with WithLogging
test("console.log called on mount and unmount with the name of the component when wrapped element is Login component", () => {
  const Login = () => <p>Login component</p>;
  Login.displayName = "Login";
  const WrappedComponent = WithLogging(Login);
  const wrapper = shallow(<WrappedComponent />);
  expect(consoleLogMock).toHaveBeenCalledWith(
    "Component Login is mounted on componentDidMount()"
  );
  wrapper.unmount();
  expect(consoleLogMock).toHaveBeenCalledWith(
    "Component Login is going to unmount on componentWillUnmount()"
  );
});

// Restore the original console.log after the tests
afterAll(() => {
  consoleLogMock.mockRestore();
});
