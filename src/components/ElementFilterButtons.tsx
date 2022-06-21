import React from 'react';
import PropTypes from 'prop-types';
import {
	SHOW_ALL,
	SHOW_CAST,
	SHOW_LOCATION,
	SHOW_STORYBOARD,
	SHOW_VEHICLE,
	SHOW_WARDROBE,
} from '../constants/ElementFilters';
import FilterButtons from '../containers/FilterButtons';
import Grid from '@mui/material/Grid';

const FILTER_TITLES : any = {
	[SHOW_ALL]: 'all',
	[SHOW_LOCATION]: 'location',
	[SHOW_VEHICLE]: 'vehicle',
	[SHOW_WARDROBE]: 'wardrobe',
	[SHOW_CAST]: 'cast',
	[SHOW_STORYBOARD]: 'storyboard',
};
const ElementFilterButtons = (props: any) => {
	return (
		<Grid container spacing={2} className='filters'>
			{Object.keys(FILTER_TITLES).map(filter => 
				<FilterButtons filter={filter}>{FILTER_TITLES[filter]}</FilterButtons>
			)}
		</Grid>
	);
};
export default ElementFilterButtons;
