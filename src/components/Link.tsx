//ADD MISSING ELEMENT TYPES (APPLICATION WIDE) - SETUP UNIQUE RULES PER APP
import React from "react";
import PropTypes from "prop-types";
import { Grid, ToggleButton } from "@mui/material";

const FILTER_COLORS: any = {
	all: "",
	set: "#64DD17",
	vehicle: "#00B8D4",
	wardrobe: "#FF6D00",
	cast: "#2962FF",
	storyboard: "#ffff00",
};
const Link = ({ active, children, setFilter }: any) => (
	// eslint-disable jsx-a11y/anchor-is-valid

	<Grid item xs={2}>
		<ToggleButton
			value={children}
			selected={active}
			style={{ cursor: "pointer" , color: FILTER_COLORS[children]}}
			onClick={() => setFilter()}
		>
			{children}
		</ToggleButton>
	</Grid>
);

Link.propTypes = {
	active: PropTypes.bool.isRequired,
	children: PropTypes.node.isRequired,
	setFilter: PropTypes.func.isRequired,
};

export default Link;
