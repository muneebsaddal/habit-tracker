import renderer from "react-test-renderer";
import ScoreLineChart from "./ScoreLineChart";

it("renderers correctly", () => {
	const tree = renderer.create(<ScoreLineChart />).toJSON();
	expect(tree).toMatchSnapshot();
});
