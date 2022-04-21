import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from "recharts";

const ScoreLineChart = ({ data }) => {
	return (
		<ResponsiveContainer width="100%" aspect={4.0 / 2.0}>
			<LineChart
				data={data}
				margin={{
					top: 5,
					right: 30,
					left: 20,
					bottom: 5,
				}}
			>
				<CartesianGrid strokeDasharray="3 3" />
				<XAxis dataKey="name" />
				<YAxis />
				<Tooltip />
				<Legend />

				<Line
					type="monotone"
					dataKey="score"
					stroke="#4249ff"
					strokeWidth={2}
				/>
			</LineChart>
		</ResponsiveContainer>
	);
};

export default ScoreLineChart;
