import renderer from "react-test-renderer";
import Home from "../pages/Home";
import { BrowserRouter } from "react-router-dom";

it("Looks for changes in UI", () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
