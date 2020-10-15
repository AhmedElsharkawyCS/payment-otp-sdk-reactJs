import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
interface IProps {
  children: React.ReactElement;
}
const useStyles = makeStyles({
  root: {
    minWidth: 275,
    borderRadius: 10,
  },
  action: {
    backgroundColor: "#D3E2F4",
  },
});
export default function CustomCard({ children }: IProps) {
  const classes = useStyles();
  return <Card className={classes.root}>{children}</Card>;
}
