import { useContext, useEffect, useRef, useState } from "react"
import { GlobalState } from "../../GlobalState"
import { useParams } from "react-router-dom"
import axios from "axios"

import {
  Grid,
  Typography,
  TextField,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Avatar,
  Paper,
  ListItemAvatar,
  makeStyles,
  Button
} from "@material-ui/core";




const useStyles = makeStyles((theme) => ({
    root: {
      height: "100%",
    },
    headerRow: {
      maxHeight: 60,
      zIndex: 5,
    },
    paper: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "100%",
      color: theme.palette.primary.dark,
    },
    messageContainer: {
      height: "100%",
      display: "flex",
      alignContent: "flex-end",
    },
    messagesRow: {
      maxHeight: "calc(100vh - 184px)",
      overflowY: "auto",
    },
    newMessageRow: {
      width: "100%",
      padding: theme.spacing(0, 2, 1),
    },
    messageBubble: {
      padding: 10,
      border: "1px solid white",
      backgroundColor: "white",
      borderRadius: "0 10px 10px 10px",
      boxShadow: "-3px 4px 4px 0px rgba(0,0,0,0.08)",
      marginTop: 8,
      maxWidth: "40em",
    },
    messageBubbleRight: {
      borderRadius: "10px 0 10px 10px",
    },
    inputRow: {
      display: "flex",
      alignItems: "flex-end",
    },
    form: {
      width: "100%",
    },
    avatar: {
      margin: theme.spacing(1, 1.5),
    },
    listItem: {
      display: "flex",
      width: "100%",
    },
    listItemRight: {
      flexDirection: "row-reverse",
    },
  }));




function MessageBuyer() {
   const {id} = useParams()

    const classes = useStyles();
    let chatBottom = useRef(null);

    const state = useContext(GlobalState)
    const [token] = state.token
    const[users] = state.UsersApi.users

  

    const [messages, setMessages] = useState([])
    const[peoples, setPeoples] = useState([])

     useEffect(() => {

      const getMessages = async () => {

        const res = await axios.get(`/message/coversation/query?userId=${id}`, {
          headers: {
            Authorization: `Bearer ${token}`

          }
        })

        setMessages(res.data);


      }

      getMessages()

     }, [id, token])

     

     

  return (
    <Grid container className={classes.root}>
        <Grid item xs={12} className={classes.headerRow}>
        <Paper className={classes.paper} square elevation={2}> 
        <Typography color="inherit" variant="h6">
            something
          </Typography>

        </Paper>

        </Grid>

        <Grid item xs={12}>
            <Grid container className={classes.messageContainer}>
                <Grid item xs={12} className={classes.messagesRow}  >
                    <List>
                        <ListItem  alignItems="flex-start">
                            <ListItemAvatar className={classes.avatar}>
                                <Avatar></Avatar>
                            </ListItemAvatar>
                            <ListItemText />



                        </ListItem>



                    </List>

                    <div ref={chatBottom} />


                </Grid>

                <Grid item xs={12} className={classes.inputRow}>
                    <form  className={classes.form}>
                        <Grid container
                className={classes.newMessageRow}
                alignItems="flex-end"
>

<Grid item xs={11}>
<TextField id="message"  label="Message" variant="outlined" margin="dense" fullWidth />


</Grid>

<Grid item xs={1}>
<IconButton type="submit">
<Button>send</Button>
</IconButton>


</Grid>



                        </Grid>



                    </form>





                </Grid>



            </Grid>



        </Grid>




</Grid>
  );
}

export default MessageBuyer;
