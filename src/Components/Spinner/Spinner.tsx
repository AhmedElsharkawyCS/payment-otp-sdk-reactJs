import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

interface IProps {
  size?: number;
}
export default function Spinner({ size }: IProps) {
  return <CircularProgress size={size || 20} />;
}
