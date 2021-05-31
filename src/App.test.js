import { shallow } from "enzyme";
import App from "./App";

it("renders without crushing", () => {
  const component = shallow(<App />);
  const wrapper = component.find(`[data-test='home']`);
  expect(wrapper.length).toBe(1);
});
