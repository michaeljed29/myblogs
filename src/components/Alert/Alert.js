import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { removeAlert } from "../../actions/utilAction";
import Fade from "@material-ui/core/Fade";

const Alert = () => {
  const dispatch = useDispatch();
  const { alert, isOpenAlert } = useSelector((state) => state.util);

  return (
    <Snackbar
      autoHideDuration={5000}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      open={isOpenAlert}
      onClose={(event, reason) => {
        if (reason === "clickaway") {
          return;
        }
        dispatch(removeAlert());
      }}
      key={"top" + "center"}
      TransitionComponent={Fade}
      TransitionProps={{ exit: false }}
    >
      <MuiAlert
        elevation={6}
        variant="filled"
        severity={alert.type}
        style={{ fontSize: 16 }}
      >
        {alert.msg}
      </MuiAlert>
    </Snackbar>
  );
};

export default Alert;
