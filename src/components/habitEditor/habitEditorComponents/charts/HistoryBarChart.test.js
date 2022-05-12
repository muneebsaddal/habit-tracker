import renderer from "react-test-renderer";
import HistoryBarChart from "./HistoryBarChart";

it("renderers correctly", () => {
	const tree = renderer.create(<HistoryBarChart />).toJSON();
	expect(tree).toMatchSnapshot();
});
