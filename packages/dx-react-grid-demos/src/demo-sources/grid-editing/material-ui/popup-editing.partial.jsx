// BLOCK:imports
import {
  TextField,
  FormGroup,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid as MuiGrid,
} from '@mui/material';
// eslint-disable-next-line
import moment from 'moment';
import { DatePicker, LocalizationProvider } from '@mui/lab';
import AdapterMoment from '@mui/lab/AdapterMoment';
// BLOCK:imports

// BLOCK:dialog
const Popup = ({
  row,
  onChange,
  onApplyChanges,
  onCancelChanges,
  open,
}) => (
  <Dialog open={open} onClose={onCancelChanges} aria-labelledby="form-dialog-title">
    <DialogTitle id="form-dialog-title">Employee Details</DialogTitle>
    <DialogContent>
      <MuiGrid container spacing={3}>
        <MuiGrid item xs={6}>
          <FormGroup>
            <TextField
              margin="normal"
              name="firstName"
              label="First Name"
              value={row.firstName || ''}
              onChange={onChange}
            />
            <TextField
              margin="normal"
              name="prefix"
              label="Title"
              value={row.prefix || ''}
              onChange={onChange}
            />
            <TextField
              margin="normal"
              name="position"
              label="Position"
              value={row.position || ''}
              onChange={onChange}
            />
          </FormGroup>
        </MuiGrid>
        <MuiGrid item xs={6}>
          <FormGroup>
            <TextField
              margin="normal"
              name="lastName"
              label="Last Name"
              value={row.lastName || ''}
              onChange={onChange}
            />
            <LocalizationProvider dateAdapter={AdapterMoment}>
              <DatePicker
                renderInput={props => <TextField margin="normal" {...props} />}
                label="Birth Date"
                value={row.BirthDate}
                onChange={value => onChange({
                  target: { name: 'BirthDate', value },
                })}
                inputFormat="DD/MM/YYYY"
              />
            </LocalizationProvider>
            <TextField
              margin="normal"
              name="phone"
              label="Phone"
              value={row.phone || ''}
              onChange={onChange}
            />
          </FormGroup>
        </MuiGrid>
      </MuiGrid>
    </DialogContent>
    <DialogActions>
      <Button onClick={onCancelChanges} color="secondary">
        Cancel
      </Button>
      <Button onClick={onApplyChanges} color="primary">
        Save
      </Button>
    </DialogActions>
  </Dialog>
);
// BLOCK:dialog
