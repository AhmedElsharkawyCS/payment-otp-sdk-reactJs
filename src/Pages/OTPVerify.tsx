import Divider from "@material-ui/core/Divider";
import React from "react";
import Card from "../Components/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import OTP from "../Components/OTP";
import Button from "../Components/Button";
import { ListItemSecondaryAction, Button as MButton } from "@material-ui/core";
import VerificationInput from "../Components/VerificationInput/VerificationInput";
import Timer from "../Components/Timer";
import { useTimer } from "react-timer-hook";

const useStyles = makeStyles({
  cardAction: {
    backgroundColor: "#D3E2F4",
  },
  dividerTop: {
    width: 100,
    margin: "15px auto",
    border: "3px solid rgba(0, 0, 0, 0.08)",
    borderRadius: 10,
    height: 0,
  },
  cardContent: {
    paddingTop: 0,
  },
  avatarIcon: {
    width: 60,
    height: 60,
    borderRadius: 20,
  },
  list: {},
  primaryText: { fontSize: "1rem", fontWeight: 400, lineHeight: 1.5, letterSpacing: "0.00938em", color: "rgba(0, 0, 0, 1)" },
  secondaryText: { fontSize: "0.875rem", fontWeight: 400, lineHeight: 1.43, letterSpacing: "0.00107em", color: "rgba(0, 0, 0, 0.54)" },
});

export default function OTPVerify() {
  const [verificationResult, setVerificationResult] = React.useState<any>(null);
  const [otpCode, setOtpCode] = React.useState<any>(null);
  const [timeFinished, setTimeFinished] = React.useState<any>(null);
  const [time] = React.useState<any>(new Date().setSeconds(new Date().getSeconds() + 10));
  const { seconds, restart } = useTimer({ expiryTimestamp: time, onExpire: () => setTimeFinished(true) });
  const handelOnConfirm = () => {
    setVerificationResult("Valid OTP number!");
    setTimeFinished(null);
  };
  const classes = useStyles();
  return (
    <OTP>
      <React.Fragment>
        <Card>
          <React.Fragment>
            <Divider className={classes.dividerTop} />
            <CardContent className={classes.cardContent}>
              <List>
                <ListItem>
                  <ListItemAvatar style={{ minWidth: 70 }}>
                    <Avatar className={classes.avatarIcon} src={require("../Assets/Images/sample-icon.png")}></Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={<p className={classes.secondaryText}>{"PAYMENT FOR"}</p>}
                    secondary={<p className={classes.primaryText}>{"Business Name"}</p>}
                  />
                </ListItem>
                <Divider component='li' />
                <ListItem>
                  <ListItemText primary={"KD1000,000.00"} />
                  <ListItemSecondaryAction>
                    <MButton variant='outlined'>Cancel</MButton>
                  </ListItemSecondaryAction>
                </ListItem>
              </List>
            </CardContent>
            {(verificationResult || timeFinished) && (
              <CardActions className={classes.cardAction}>
                {timeFinished ? (
                  <MButton
                    variant='text'
                    onClick={() => {
                      restart(new Date().setSeconds(new Date().getSeconds() + 10));
                      setVerificationResult(null);
                      setTimeFinished(null);
                    }}
                  >
                    Timer text
                  </MButton>
                ) : (
                  verificationResult
                )}
              </CardActions>
            )}
          </React.Fragment>
        </Card>
        <VerificationInput onChange={(val) => setOtpCode(val)} value={otpCode} length={6} />
        <Timer seconds={seconds} />
        <Button label={"Confirm"} color='#2F7EF7' onClick={handelOnConfirm} />
      </React.Fragment>
    </OTP>
  );
}
