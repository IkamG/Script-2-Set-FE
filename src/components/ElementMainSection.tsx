import React from "react";
import PropTypes from "prop-types";
import ElementsList from "./ElementsList";
import ElementFilterButtons from "./ElementFilterButtons";
import Grid from "@mui/material/Grid";
import VisibleElements from "../containers/VisableElements";

const ElementMainSection = (props: any) => {
    return(
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <ElementFilterButtons/>
            </Grid>
            <Grid item xs={12}>
                <VisibleElements/>
            </Grid>
        </Grid>
    )
}
export default ElementMainSection;