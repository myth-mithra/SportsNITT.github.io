// import { Typography } from "@mui/material";
// import * as React from "react";
// import { Container } from "react-bootstrap";
// import "./events.css";

// export default function Events() {
// 	return (
// 		<Container className="container">
// 			<Typography variant="h3" component="div">
// 				Event
// 			</Typography>
// 			<section id="photos">
// 				{itemData.map((item, index) => {
// 					return <img src={item.img} alt={item.title} />;
// 				})}
// 			</section>
// 		</Container>
// 	);
// }
import React from 'react';
import { Button } from 'semantic-ui-react';
import { colors } from '../../utils/colors';

const EVENTS = [
	"Sportsfete '18",
	"Spardha '18",
	"Spardha '19",
	"Sportsfete '19",
];

const EventComponent = ({ eventName, setEventName }) => {
	return (
		<div
			id='menu-container'
			style={{
				display: 'flex',
				flexDirection: 'row',
				scrollBehavior: 'smooth',
				scrollbarWidth: 'none',
				overflowY: 'hidden',
				overflowX: 'scroll',
				marginBottom: '20px',
				alignItems: 'center',
				justifyContent: window.innerWidth > 480 ? 'center' : 'normal',
				scrollSnapAlign: 'center',
				// marginLeft: '10%',
			}}
		>
			{EVENTS.map((ele, i) => (
				<Button
					key={i}
					style={{
						marginRight: '20px',
						backgroundColor: eventName === ele ? colors.secondary : 'white',
						color: 'black',
					}}
					onClick={() => {
						setEventName(ele);
					}}
				>
					{ele}
				</Button>
			))}
		</div>
	);
};

export default EventComponent;