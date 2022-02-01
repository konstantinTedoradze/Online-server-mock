import {
  Button,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Grid,
} from "@material-ui/core";
import { useEffect, useState } from "react";
import ServerCard from "../serverCard/ServerCard";


export default function ServerList(): JSX.Element {
  const [servers, setServers] = useState<any[]>([]);
  const [checkedbox, setCheckedbox] = useState(false);

  const getServers = () => {
    fetch("http://localhost:3001/api/servers")
      .then((data) => data.json())
      .then((res) => setServers(res));
  };

  useEffect(() => {
    getServers();
  }, []);

  function orderbydate() {
    fetch("http://localhost:3001/api/server/bydate")
      .then((data) => data.json())
      .then((res) => setServers(res));
  }

  function orderbystatus() {
    if (!checkedbox) {
      fetch("http://localhost:3001/api/server/bystatus")
        .then((data) => data.json())
        .then((res) => setServers(res));
    }
    //  else {
    //   getServers();
    // }
  }

  return (
    <Container>
      <Grid container justify="center" alignItems="center">
        <Grid item xs={3}>
          <FormControl
            component="fieldset"
            style={{ color: "rgb(211, 63, 88)" }}
          >
            <FormLabel component="legend"></FormLabel>
            <FormGroup aria-label="position" row>
              <FormControlLabel
                value="start"
                control={
                  <Checkbox
                    checked={checkedbox}
                    onChange={(e) => {
                      setCheckedbox(e.target.checked);
                      orderbystatus();
                    }}
                    value="primary"
                    inputProps={{ "aria-label": "primary checkbox" }}
                    style={{ margin: 0 }}
                  />
                }
                label="online servers"
                labelPlacement="start"
              />
            </FormGroup>
          </FormControl>
        </Grid>
        <Grid item xs={3}>
          <Button onClick={orderbydate} variant="contained" color="secondary">
            Latest created servers
          </Button>
        </Grid>

        <Grid item xs={12}>
          <Grid container spacing={4} justify="center" alignItems="center">
            {servers.map((server: any, index: number) => (
              <ServerCard
                key={index}
                id={server.id}
                name={server.name}
                IP={server.IP}
                company={server.company}
                date={server.date_time}
                status={server.status}
              />
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
