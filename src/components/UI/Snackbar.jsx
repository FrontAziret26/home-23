import { Snackbar as MuiSnackbar, Alert } from "@mui/material";
import { useSelector } from "react-redux";

export const SnackBarMui = ({ onClose }) => {
  const { open, severity, message } = useSelector((state) => state.snackbar);

  return (
    <div>
      <MuiSnackbar open={open} autoHideDuration={3000} onClose={onClose}>
        <Alert onClose={onClose} severity={severity} sx={{ width: "100%" }}>
          {message}
        </Alert>
      </MuiSnackbar>
    </div>
  );
};
