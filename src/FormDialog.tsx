import { useState } from "react";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";

type FormDialogProps = {
  isOpen: boolean;
  onClose: () => void;
  onRaiseMyHand: (name: string) => void;
};

const FormDialog = ({ isOpen, onClose, onRaiseMyHand }: FormDialogProps) => {
  const [name, setName] = useState<string>("");

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>Name</DialogTitle>
      <DialogContent>
        <DialogContentText>Please enter your name here.</DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          required
          label="Name"
          type="text"
          fullWidth
          variant="standard"
          onChange={(event) => setName(event.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button disabled={!name} onClick={() => onRaiseMyHand(name)}>
          Raise my hand
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default FormDialog;
