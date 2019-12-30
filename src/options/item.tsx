import * as React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {TextField, Theme} from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import {Location, Registration} from "../model";

const {memo} = React;

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    marginBottom: theme.spacing(2),
    "& > div": {
      marginRight: theme.spacing(2),
    },
  },
  deleteButton: {
    position: "absolute",
    bottom: 0,
  },
}));

export default memo(
  (props: {
    registration: Registration;
    onChange: (registration: Registration) => void;
    onDelete: (registration: Registration) => void;
  }) => {
    const classes = useStyles();
    const {registration, onChange, onDelete} = props;

    const onChangeValue = (key: keyof Registration, value: string): void => {
      if (key === "location") {
        onChange({...registration, location: value as Location});
      } else {
        onChange({...registration, [key]: value});
      }
    };

    return (
      <div className={classes.root}>
        <div>
          <TextField
            label="Name"
            placeholder="Taro Yamada"
            value={registration.name}
            onChange={(event) => onChangeValue("name", event.target.value)}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>
        <div>
          <TextField
            label="Email"
            placeholder="taro@supremenewyork.com"
            value={registration.email}
            onChange={(event) => onChangeValue("email", event.target.value)}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>
        <div>
          <TextField
            label="Cellphone"
            placeholder="09011112222"
            value={registration.tel}
            onChange={(event) => onChangeValue("tel", event.target.value)}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>
        <div>
          <InputLabel id="location-label">Location</InputLabel>
          <Select
            labelId="location-label"
            value={registration.location}
            onChange={(event) => onChangeValue("location", event.target.value as string)}
          >
            <MenuItem value="tokyo">Tokyo</MenuItem>
            <MenuItem value="osaka">Osaka</MenuItem>
            <MenuItem value="nagoya">Nagoya</MenuItem>
            <MenuItem value="fukuoka">Fukuoka</MenuItem>
          </Select>
        </div>
        <div style={{position: "relative"}}>
          <Button
            className={classes.deleteButton}
            variant="contained"
            color="secondary"
            onClick={() => onDelete(registration)}
          >
            Delete
          </Button>
        </div>
      </div>
    );
  },
);