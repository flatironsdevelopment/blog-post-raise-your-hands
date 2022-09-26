import { Card } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";

type Props = {
  state: string[];
};

const HandsUpList = ({ state }: Props) => {
  return (
    <Card variant="outlined" sx={{ width: "100%", overflow: "hidden" }}>
      <List dense sx={{ width: "100%", overflow: "hidden" }}>
        <ListSubheader>Hands Up</ListSubheader>
        {state.map((name) => {
          return (
            <ListItem key={name} disablePadding>
              <ListItemButton>
                <ListItemAvatar>
                  <Avatar alt={`Avatar ${name}`}>
                    {name.substring(0, 2).toUpperCase()}
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  title={name}
                  primary={
                    <div
                      style={{
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {name}
                    </div>
                  }
                />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Card>
  );
};

export default HandsUpList;
