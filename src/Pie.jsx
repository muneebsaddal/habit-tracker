import React from "react";

const cleanPercentage = (percentage) => {
	const tooLow = !Number.isFinite(+percentage) || percentage < 0;
	const tooHigh = percentage > 100;
	return tooLow ? 0 : tooHigh ? 100 : +percentage;
};

const Circle = ({ color, pct }) => {
	const r = 12;
	const circ = 2 * Math.PI * r;
	const strokePct = ((100 - pct) * circ) / 100;
	return (
		<circle
			r={r}
			cx={100}
			cy={100}
			fill="transparent"
			stroke={strokePct !== circ ? color : ""} // remove color as 0% sets full circumference
			strokeWidth={"0.3rem"}
			strokeDasharray={circ}
			strokeDashoffset={pct ? strokePct : 0}
			strokeLinecap="line"
		></circle>
	);
};

// const Text = ({ percentage }) => {
//   return (
//     <text
//       x="50%"
//       y="50%"
//       dominantBaseline="central"
//       textAnchor="middle"
//       fontSize={"1.5em"}
//     >
//       {percentage.toFixed(0)}%
//     </text>
//   );
// };

const Pie = ({ percentage, color }) => {
	const pct = cleanPercentage(percentage);
	return (
		<svg width={40} height={40}>
			<g transform={`rotate(-90 ${"25 100"})`}>
				<Circle color="lightgrey" />
				<Circle color={color} pct={pct} />
			</g>
			{/* <Text percentage={pct} /> */}
		</svg>
	);
};

export default Pie;
