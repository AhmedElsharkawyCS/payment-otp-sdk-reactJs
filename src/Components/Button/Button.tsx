import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Spinner from "../Spinner/Spinner";

const useStyle = makeStyles((theme) => ({
  root: {
    borderRadius: 20,
    marginLeft: 10,
    width: "90%",
    position: "absolute",
    bottom: 10,
    left: "2%",
  },
}));

interface IProps {
  label: string;
  onClick?(): void;
  color?: string;
  variant?: "contained" | "outlined" | "text";
  endIcon?: React.ReactElement;
  startIcon?: React.ReactElement;
  disabled?: boolean;
  loading?: boolean;
}
export default function CustomButton({ label, color, onClick, variant, disabled, endIcon, loading, startIcon }: IProps) {
  const classes = useStyle();
  return (
    <Button
      className={classes.root}
      disabled={disabled || loading}
      variant={variant || "contained"}
      color={"primary"}
      style={{ backgroundColor: color }}
      onClick={onClick}
      type={"submit"}
      endIcon={endIcon}
      startIcon={startIcon}
    >
      {loading ? <Spinner /> : label || "Submit"}
    </Button>
  );
}
