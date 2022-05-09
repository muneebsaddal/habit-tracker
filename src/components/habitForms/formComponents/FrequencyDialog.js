import React from "react";
import styled from "styled-components";
import {
	FormControlLabel,
	Radio,
	TextField,
	Typography,
	RadioGroup,
} from "@material-ui/core";

const FrequencyDialog = (props) => {
	return (
		<FreqDialogContainer>
			<RadioGroup>
				<FormControlLabel
					control={
						<Radio
							name="frequency"
							value="Everyday"
							label="everyday"
							onChange={props.freqChange}
						/>
					}
					label="Everyday"
				/>

				<FormControlLabel
					control={
						<Radio
							name="frequency"
							value={"Every _ days"}
							label="everyday 3 days"
							onChange={props.freqChange}
						/>
					}
					label={
						<div style={{ display: "flex" }}>
							<Typography>Every&nbsp;&nbsp;&nbsp;</Typography>
							<TextField
								id="everyday_3_days"
								type="number"
								size="small"
								InputProps={{
									style: {
										width: "40px",
									},
									inputProps: {
										max: 99,
										min: 2,
									},
								}}
								defaultValue="3"
								onChange={props.tempFreqValue}
							/>
							<Typography>&nbsp;&nbsp;&nbsp;days</Typography>
						</div>
					}
				/>
				<FormControlLabel
					control={
						<Radio
							name="frequency"
							value="_ times per week"
							label="3 times per week"
							onChange={props.freqChange}
						/>
					}
					label={
						<div style={{ display: "flex" }}>
							<TextField
								type="number"
								id="3_times_per_week"
								size="small"
								InputProps={{
									style: {
										width: "40px",
									},
									inputProps: {
										max: 6,
										min: 2,
									},
								}}
								defaultValue="3"
								onChange={props.tempFreqValue}
							/>
							<Typography> times per week</Typography>
						</div>
					}
				/>
				<FormControlLabel
					control={
						<Radio
							name="frequency"
							value="_ times per month"
							label="10 times per month"
							onChange={props.freqChange}
						/>
					}
					label={
						<div style={{ display: "flex" }}>
							<TextField
								type="number"
								id="10_times_per_month"
								size="small"
								InputProps={{
									style: {
										width: "40px",
									},
									inputProps: {
										max: 30,
										min: 2,
									},
								}}
								defaultValue="10"
								onChange={props.tempFreqValue}
							/>
							<Typography> times per month</Typography>
						</div>
					}
				/>
			</RadioGroup>
			{/* <InputContainer>
				<input
					type="radio"
					name="frequency"
					value="Everyday"
					onChange={props.freqChange}
					defaultChecked
				/>
			<label htmlFor="everyday">Every day</label>
			</InputContainer>
			<InputContainer>
				<input
					type="radio"
					name="frequency"
					value="Every 3 days"
					onChange={props.freqChange}
				/>
				<label htmlFor="every_days">Every 3 days</label>
			</InputContainer>
			<InputContainer>
				<input
					type="radio"
					name="frequency"
					value="3 times per week"
					onChange={props.freqChange}
				/>
				<label htmlFor="times_per_week">3 times per week</label>
			</InputContainer>
			<InputContainer>
				<input
					type="radio"
					name="frequency"
					value="10 times per month"
					onChange={props.freqChange}
				/>
				<label htmlFor="times_per_month">10 times per month</label>
			</InputContainer> */}
			<SubmitButton onClick={props.requestClose} type="button">
				SAVE
			</SubmitButton>
		</FreqDialogContainer>
	);
};

const FreqDialogContainer = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 50%;
	min-width: 350px;
	max-width: 500px;
	height: 250px;
	background: white;
	box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.5);
	border-radius: 5px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	font-family: "Inter";
	font-size: 20px;
	padding: 40px 30px 30px 30px;
`;

const SubmitButton = styled.button`
	margin-left: auto;
	width: 100px;
	font-family: "Karla";
	font-size: 20px;
	color: black;
	padding: 10px 0px;
	background: none;
	border: 2px solid #b4b4b4;
	border-radius: 5px;
	cursor: pointer;
`;

export default FrequencyDialog;
