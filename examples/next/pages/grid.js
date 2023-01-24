import React, { useState } from 'react';
import { Paper, Button } from '@mui/material';
import {
  SortingState,
  IntegratedSorting,
} from '@devexpress/dx-react-grid';
import {
  Grid,
  Table,
  TableHeaderRow,
} from '@devexpress/dx-react-grid-material-ui';

import ArrowDownward from '@mui/icons-material/esm/ArrowDownward.js';
import ArrowUpward from '@mui/icons-material/esm/ArrowUpward.js';

import { generateRows } from '../data/generator';

const SortingIcon = ({ direction }) => (
  direction === 'asc'
    ? <ArrowUpward style={{ fontSize: '18px' }} />
    : <ArrowDownward style={{ fontSize: '18px' }} />
);

const SortLabel = ({ onSort, children, direction }) => (
  <Button
    size="small"
    variant="contained"
    onClick={onSort}
  >
    {children}
    {(direction && <SortingIcon direction={direction} />)}
  </Button>
);

function Demo() {
  const [columns] = useState([
    { name: 'name', title: 'Name' },
    { name: 'gender', title: 'Gender' },
    { name: 'city', title: 'City' },
    { name: 'car', title: 'Car' },
  ]);
  const [rows] = useState(generateRows({ length: 8 }));

  return (
    <Paper>
      <Grid rows={rows} columns={columns}>
        <SortingState defaultSorting={[{ columnName: 'city', direction: 'asc' }]} />
        <IntegratedSorting />
        <Table />
        <TableHeaderRow showSortingControls sortLabelComponent={SortLabel} />
      </Grid>
    </Paper>
  );
}

export default Demo;
