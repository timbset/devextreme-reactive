import * as React from 'react';
import { styled, IconButton } from '@mui/material';
import PropTypes from 'prop-types';
import classNames from 'clsx';
import { Delete as DeleteIcon } from '@mui/icons-material';

const PREFIX = 'DeleteButton';

export const classes = {
  button: `${PREFIX}-button`,
};

const StyledIconButton = styled(IconButton)(({ theme: { spacing } }) => ({
  [`&.${classes.button}`]: {
    marginRight: spacing(0.5),
  },
}));

export const DeleteButton = React.memo(({
  onExecute, className, ...restProps
}) => (
  <StyledIconButton
    className={classNames(classes.button, className)}
    onClick={onExecute}
    {...restProps}
    size="large"
  >
    <DeleteIcon />
  </StyledIconButton>
));

DeleteButton.propTypes = {
  className: PropTypes.string,
  onExecute: PropTypes.func.isRequired,
};

DeleteButton.defaultProps = {
  className: undefined,
};
