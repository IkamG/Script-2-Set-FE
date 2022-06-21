import React from 'react'
import PropTypes from 'prop-types'
import ElementItem from './ElementItem'
import Grid from '@mui/material/Grid'

const ElementsList = ({filteredElements, actions }: any) => (
    <Grid container spacing={2} className="element-list">
      {filteredElements.map((el : any) =>
        <ElementItem key={el.id} element={el} {...actions} />
      )}
    </Grid>
)

ElementsList.propTypes = {
  filteredElements: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    elementType: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
    sceneNum: PropTypes.string.isRequired
  }).isRequired).isRequired,
  actions: PropTypes.object.isRequired
}

export default ElementsList