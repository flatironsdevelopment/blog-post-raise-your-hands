import CloseIcon from "@mui/icons-material/Close";
import ListIcon from "@mui/icons-material/List";
import PanToolIcon from "@mui/icons-material/PanTool";
import { Fab, Tooltip } from "@mui/material";
import Box from "@mui/material/Box";
import { useCallback, useEffect, useRef, useState } from "react";
import { getCurrentState, setCurrentState } from "./firebase";
import FormDialog from "./FormDialog";
import HandsUpList from "./HandsUpList";

function App() {
  const nameRef = useRef<string>("");
  const [isHandsUp, setIsHandsUp] = useState(false);
  const [showHandsUpList, setShowHandsUpList] = useState(false);
  const [showFormDialog, setShowFormDialog] = useState(false);
  const [handsUpList, setHandsUpList] = useState<string[]>([]);

  const toggleMyHand = useCallback(() => {
    if (!nameRef.current) {
      setShowFormDialog(true);
      return;
    }
    const newIsHandsUp = !isHandsUp;

    const newState = newIsHandsUp
      ? [...handsUpList, nameRef.current]
      : handsUpList.filter((n) => n !== nameRef.current);

    setCurrentState(newState);
    setIsHandsUp(newIsHandsUp);
  }, [isHandsUp, handsUpList]);

  const setNameAndRaiseHand = useCallback(
    (name: string) => {
      setShowFormDialog(false);
      nameRef.current = name;
      toggleMyHand();
    },
    [toggleMyHand]
  );

  useEffect(() => {
    getCurrentState((state) => setHandsUpList(state));
  }, []);

  return (
    <Box position="fixed" bottom={100} right={100} zIndex={99999}>
      <Tooltip title="Raise your hand">
        <Fab
          color="primary"
          aria-label="Raise your hand"
          style={{ marginRight: 10 }}
          onClick={() => toggleMyHand()}
        >
          {isHandsUp ? <CloseIcon /> : <PanToolIcon />}
        </Fab>
      </Tooltip>
      <Fab
        color="primary"
        aria-label="Hands Up"
        onClick={() => setShowHandsUpList(!showHandsUpList)}
      >
        <ListIcon />
      </Fab>
      <Box
        position="absolute"
        bottom={100}
        right={0}
        width={300}
        display={showHandsUpList ? "block" : "none"}
      >
        <HandsUpList state={handsUpList} />
      </Box>
      <FormDialog
        isOpen={showFormDialog}
        onClose={() => setShowFormDialog(false)}
        onRaiseMyHand={(name) => setNameAndRaiseHand(name)}
      />
    </Box>
  );
}

export default App;
