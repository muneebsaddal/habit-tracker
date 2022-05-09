import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from "recharts";

const ScoreLineChart = ({ data }) => {
	return (
		<ResponsiveContainer width="80%" aspect={4.0 / 2.0}>
			<BarChart
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
				<Bar dataKey="score" barSize={20} fill="#4249ff" />
			</BarChart>
		</ResponsiveContainer>
	);
};

export default ScoreLineChart;
