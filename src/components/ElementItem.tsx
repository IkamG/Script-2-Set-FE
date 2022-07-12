import React, { Component } from "react";
import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { Delete, Edit, LocationOn, ShoppingCart } from "@mui/icons-material";
import classnames from "classnames";
import  Grid from "@mui/material/Grid";
// import TodoTextInput from './TodoTextInput'

export default class ElementItem extends Component<any, any> {
	static propTypes = {
		element: PropTypes.object.isRequired,
		editElement: PropTypes.func.isRequired,
		deleteElement: PropTypes.func.isRequired,
		shopElement: PropTypes.func.isRequired,
	};
	state: any = {
		editing: false,
		elementType: "",
	};
	handleSave = (id: any, text: any) => {
		if (text.length === 0) {
			this.props.deleteElement(id);
		} else {
			this.props.editElement(id, text);
		}
		this.setState({ editing: false });
	};
	locationTrue = this.state.elementType === "set" ? true : false;//deprecated here for an example
	render() {
		const { element, editElement, deleteElement, shopElement } = this.props;
		let el;
		el = (
			<Card sx={{ minWidth: 2 }}>
				<CardContent>
					<Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
						Scene {element.sceneNum}
					</Typography>
					<Typography variant="h5" component="div">
						{element.text}
					</Typography>
					<Typography sx={{ mb: 1.5 }} color="text.secondary">
						{element.elementType}
					</Typography>
				</CardContent>
				<CardActions>
					<IconButton aria-label="edit element" component="span" onClick={() => editElement(element.id,element.text)}>
						<Edit />
					</IconButton>
					{this.locationTrue ? (
						//deprecated here for an example
						<IconButton aria-label="location element" component="span"> 
							<LocationOn />
						</IconButton>
					) : null}
					<IconButton aria-label="shop element" component="span" onClick={() => shopElement(element.id,element.text)}>
						<ShoppingCart />
					</IconButton>
					<IconButton aria-label="delete element" component="span" onClick={() => deleteElement(element.id)}>
						<Delete />
					</IconButton>
				</CardActions>
			</Card>
		);

		return (<Grid className={classnames({
			elementType: element.elementType,
			editing: this.state.editing
		  })} item xs={12} lg={6}>{el}</Grid>);
	}
}
