import React, { Fragment } from "react";
import { Column } from "components";
import { connect } from "react-redux";
import columnsActions from 'actions/columns'
import cardsActions from 'actions/cards'

const Columns = ({ items, addColumn,  addCard, removeColumn }) => (
  <Fragment>
    {items.map((item, index) => (
      <Column 
      key={index} 
      columnIndex={index}
      {...item} 
      onAddColumn={addColumn} 
      onAddCard={addCard}
      onRemove={removeColumn}
       />
    ))}
    <Column  onAddColumn={addColumn} onAddCard={addCard}/>
  </Fragment>
);

export default connect(({ columns }) => ({ items: columns }),
      {...columnsActions, ...cardsActions}
)(Columns);
