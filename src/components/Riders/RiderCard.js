import React from 'react'
import "./Riders.css";
import { makeStyles } from '@material-ui/core/styles';

import {
    Card, 
    CardContent,
    CardMedia,
    Typography
} from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import FolderIcon from '@material-ui/icons/Folder';
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
    title: {
        textAlign: "center"
    }
  });

function RiderCard(props) {
    const icons = [<FolderIcon />,<EmojiEventsIcon/>, <PermContactCalendarIcon/>]
    const data = [props.name +" "+ props.age, props.team, props.wins]
    const listItems = [];
    for (let i = 0; i<data.length;i++){
        listItems.push(
        <List>
            <ListItem>
                <ListItemAvatar>
                    <Avatar>
                        {icons[i]}
                    </Avatar>
                </ListItemAvatar>
                <ListItemText
                    primary={data[i]}
                />
            </ListItem>
        </List>);
    }
    const classes = useStyles();
    return (
        <>
        <li className="cards__item">
            <Card className={classes.root}>
                    <CardMedia
                    className={classes.media}
                    image={props.src}
                    title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography className={classes.title} gutterBottom variant="h5" component="h2">
                            {props.name}
                        </Typography>
                        {listItems}
                    </CardContent>
            </Card>
        </li>
    </>
    )
}

export default RiderCard
