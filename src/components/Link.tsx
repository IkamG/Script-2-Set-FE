//COLOR BUTTONS, ADD MISSING ELEMENT TYPES (APPLICATION WIDE) - SETUP UNIQUE RULES PER APP
import React from "react";
import PropTypes from "prop-types";
import { Grid, ToggleButton } from "@mui/material";

const Link = ({ active, children, setFilter }: any) => (
	// eslint-disable jsx-a11y/anchor-is-valid
	<Grid item xs={2}>
		<ToggleButton
			value={children}
			selected={active}
			style={{ cursor: "pointer" }}
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
