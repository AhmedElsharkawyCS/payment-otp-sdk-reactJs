import React from "react";
import { makeStyles } from "@material-ui/core/styles";

interface IProps {
  seconds: number;
}
const useStyles = makeStyles({
  root: {
    width: "100%",
    textAlign: "end",
  },
  time: {
    paddingRight: 20,
    fontSize: 20,
    color: "#2F7EF7",
  },
});

export default function Timer({ seconds }: IProps) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <p className={classes.time}>{`00:${seconds}`}</p>
    </div>
  );
}
