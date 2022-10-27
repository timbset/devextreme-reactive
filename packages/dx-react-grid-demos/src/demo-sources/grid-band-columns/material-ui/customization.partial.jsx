// BLOCK:imports
import { Equalizer, People, PieChart } from '@mui/icons-material';
// BLOCK:imports

// BLOCK:body
const iconStyles = {
  mb: 0.5,
  ml: 1,
  verticalAlign: 'middle',
};

const BandCell = ({
  children, tableRow, tableColumn, column, classes, ...restProps
}) => {
  let icon = null;
  if (column.title === 'Population') icon = <People sx={iconStyles} />;
  if (column.title === 'Nominal GDP') icon = <Equalizer sx={iconStyles} />;
  if (column.title === 'By Sector') icon = <PieChart sx={iconStyles} />;
  return (
    <TableBandHeader.Cell
      {...restProps}
      column={column}
    >
      <strong>
        {children}
        {icon}
      </strong>
    </TableBandHeader.Cell>
  );
};

const HeaderCell = ({ classes, className, ...restProps }) => (
  <TableHeaderRow.Cell
    {...restProps}
    className={className}
    sx={{ color: 'secondary.light' }}
  />
);
// BLOCK:body
