import * as React from 'react';
import PropTypes from 'prop-types';
import { ChevronRight, ExpandMore } from '@mui/icons-material';
import { IconButton } from '@mui/material';

export const Icon = React.memo(({
  expanded,
  className,
  ...restProps
}) => (
  <IconButton
    className={className}
    {...restProps}
  >
    {
      expanded
        ? <ExpandMore />
        : <ChevronRight />
    }
  </IconButton>
));

Icon.propTypes = {
  expanded: PropTypes.bool.isRequired,
  className: PropTypes.string,
};

Icon.defaultProps = {
  className: undefined,
};
