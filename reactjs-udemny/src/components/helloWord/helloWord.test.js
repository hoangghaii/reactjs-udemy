import React from "react";
import { shallow } from "enzyme";
import HelloWord from "./helloWord";

describe("HelloWord", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<HelloWord />);
    expect(wrapper).toMatchSnapshot();
  });
});
