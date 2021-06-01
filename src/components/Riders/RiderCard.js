import React from 'react'
import "./Riders.css";
import { makeStyles } from '@material-ui/core/styles';

import {
    Card, 
    CardContent,
    CardMedia,
    Typography,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText
} from '@material-ui/core';
import{
    EmojiEvents,
    PermContactCalendar,
    Group
}
from '@material-ui/icons';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
    title: {
        textAlign: "center"
    },
    icon: {
        color: "rgb(220,20,60)",
    }
  });

function RiderCard(props) {
    const classes = useStyles();
    const icons = [<PermContactCalendar className={classes.icon}/>,<Group className={classes.icon}/>, <EmojiEvents className={classes.icon}/> ]
    const data = [props.name +" "+ props.age, props.team, props.wins]
    const listItems = [];
    for (let i = 0; i<data.length;i++){
        listItems.push(
        <List>
            <ListItem>
                <ListItemAvatar>
                    {icons[i]}
                </ListItemAvatar>
                <ListItemText
                    primary={data[i]}
                />
            </ListItem>
        </List>);
    }
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
