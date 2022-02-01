import { Card, CardActions, CardContent, FormControlLabel, FormGroup, Grid, makeStyles, Switch, Typography } from '@material-ui/core';
import { useState } from 'react';

export default function ServerCard(props: any) {
  
  const [status, setStatus] = useState(props.status);
   console.log(props.status,"propssss status")
  
    const id=props.id

    async function changeStatus(newstatus: any){
      console.log(newstatus)
       const response = await fetch("http://localhost:3001/api/server/status",{
        method:"put",
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify({newstatus,id})  
        })
        console.log(response,"aereqrwetwqt33333");
   }

    const useStyles = makeStyles({
        card: {
          minWidth: 275,
          backgroundColor:'#dbd8ac'
        },
        bullet: {
          display: 'inline-block',
          margin: '0 2px',
          transform: 'scale(0.8)',
        },
        title: {
          fontSize: 14,
        },
        pos: {
          marginBottom: 12,
        },
      });
    
        const classes = useStyles();  

    return (
        <Grid item>
        <Card className={classes.card} id={props.id}>
        <CardContent> 
        <Typography variant="h5" component="h2">
              {props.company}
            </Typography>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
              {props.name}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              {props.IP}
            </Typography>
            <Typography variant="body2" component="p" color="textSecondary">
              date:
            </Typography>
            <Typography variant="body2" component="p">
            {props.date}
          </Typography>
          </CardContent>
          <CardActions>
          <FormGroup>
  <FormControlLabel
    control=
          {<Switch
          checked={status}
          onChange={(e=>{
              setStatus(e.target.checked)
              changeStatus(e.target.checked)
              })}
          color="primary"
          inputProps={{ 'aria-label': 'primary checkbox' }}/>}
          label="on"
          />
          </FormGroup>
          </CardActions>
        </Card>  
       </Grid>
    )
}


