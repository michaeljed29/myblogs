import React from "react";
import { connect } from "react-redux";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { removeAlert } from "../../actions/utilAction";
import Fade from "@material-ui/core/Fade";

const Alert = ({ alert, isOpenAlert, removeAlert }) => {
  return (
    <Snackbar
      autoHideDuration={5000}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      open={isOpenAlert}
      onClose={(event, reason) => {
        if (reason === "clickaway") {
          return;
        }
        removeAlert();
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

const mapStateToProps = (state) => ({
  isOpenAlert: state.util.isOpenAlert,
  alert: state.util.alert,
});

const mapDispatchToProps = (dispatch) => ({
  removeAlert: () => dispatch(removeAlert()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Alert);
