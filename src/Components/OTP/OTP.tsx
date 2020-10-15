import React from "react";
import { makeStyles } from "@material-ui/core/styles";

interface IProps {
  children: React.ReactElement;
}

const useStyle = makeStyles((theme) => ({
  root: {
    maxWidth: 500,
    margin: "50px auto",
    verticalAlign: "middle",
    backgroundColor: "#D4CFCC",
    textAlign: "center",
    borderRadius: 10,
    minHeight: 500,
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
  },
}));
export default function OTP({ children }: IProps) {
  const classes = useStyle();
  return <div className={classes.root}>{children}</div>;
}
