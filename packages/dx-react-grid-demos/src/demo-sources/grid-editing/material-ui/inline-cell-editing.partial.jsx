// BLOCK:imports
import {
  OutlinedInput,
  Select,
  MenuItem,
  Typography,
  Checkbox,
  FormControlLabel,
  styled,
  Grid as GridMUI,
} from '@mui/material';
// BLOCK:imports

// BLOCK:body
const PREFIX = 'Demo';
const classes = {
  input: `${PREFIX}-input`,
  label: `${PREFIX}-label`,
  container: `${PREFIX}-container`,
  selector: `${PREFIX}-selector`,
};
const StyledGridMUI = styled(GridMUI)(() => ({
  [`&.${classes.container}`]: {
    maxWidth: '18em',
  },
  [`& .${classes.input}`]: {
    fontSize: '14px',
    width: '90px',
  },
  [`& .${classes.label}`]: {
    fontSize: '14px',
  },
  [`& .${classes.selector}`]: {
    height: '32px',
  },
}));
const StyledFormControlLabel = styled(FormControlLabel)(() => ({
  [`&.${classes.label}`]: {
    fontSize: '14px',
  },
}));

// #FOLD_BLOCK
const StartEditActionSelector = (props) => {
  const { defaultAction, changeAction } = props;
  return (
    <StyledGridMUI
      container
      alignItems="center"
      className={classes.container}
    >
      <Typography
        className={classes.label}
      >
        Start Edit Action:
        &nbsp;
      </Typography>
      <Select
        onChange={e => changeAction(e.target.value)}
        value={defaultAction}
        className={classes.selector}
        input={(
          <OutlinedInput
            classes={{ input: classes.input }}
            margin="dense"
          />
        )}
      >
        <MenuItem value="click">Click</MenuItem>
        <MenuItem value="doubleClick">Double Click</MenuItem>
      </Select>
    </StyledGridMUI>
  );
};

// #FOLD_BLOCK
const SelectTextChecker = (props) => {
  const { isSelectText, changeSelectText } = props;
  return (
    <StyledFormControlLabel
      control={(
        <Checkbox
          checked={isSelectText}
          onChange={e => changeSelectText(e.target.checked)}
          color="primary"
        />
      )}
      classes={{ label: classes.label }}
      label="Select Text On Focus"
    />
  );
};

const EditPropsPanel = props => (
  <Plugin name="EditPropsPanel">
    <Template name="toolbarContent">
      <SelectTextChecker {...props} />
      <TemplatePlaceholder />
      <StartEditActionSelector {...props} />
    </Template>
  </Plugin>
);
// BLOCK:body
