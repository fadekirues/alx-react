// jest.setup.js
import "@testing-library/jest-dom/extend-expect";
// You can add any additional setup you need for your tests here.
// jest.setup.js
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });
