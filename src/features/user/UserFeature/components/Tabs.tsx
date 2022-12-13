import { Button, Grid, Stack, Tabs as TabsMui, TextField, Typography } from "@mui/material";

import { typography } from "theme";
import { TextFieldOne } from "common";

import { ButtonLogout, Tab, TabPanel } from "../components";
import { useTabs } from "../hooks";

export const Tabs = () => {
  const { activeTabId, handleChange } = useTabs();

  return (
    <>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        px={1}
        sx={{ borderBottom: "2px solid #CCCCCC" }}>
        <TabsMui value={activeTabId} onChange={handleChange}>
          <Tab label={"Contact information"} />
          <Tab label={"Address book"} />
          <Tab label={"Order history"} />
        </TabsMui>

        <ButtonLogout>Logout</ButtonLogout>
      </Stack>

      <TabPanel value={activeTabId} index={0}>
        <Grid container spacing={2} direction="row" justifyContent="space-between">
          <Grid item xs={12} md={8}>
            <Typography variant="h5" fontWeight={typography.fontWeightRegular}>
              Редагування особистих даних
            </Typography>
            <Stack direction="row" spacing={2}>
              <Stack direction="column" spacing={2} flexGrow={1}>
                {/* 1*/}

                <TextFieldOne />
                <TextField
                  label="ML Features"
                  InputLabelProps={{ shrink: true }}
                  variant="outlined"
                  placeholder="Login/E-mail"
                  sx={{ borderRadius: "8px" }}
                />

                <TextField
                  variant="outlined"
                  placeholder="Login/E-mail"
                  sx={{ borderRadius: "8px" }}
                />
              </Stack>
              <Stack direction="column" spacing={2} flexGrow={1}>
                {/* //2*/}
              </Stack>
            </Stack>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h5" fontWeight={typography.fontWeightRegular}>
              Зміна пароля
            </Typography>

            <Stack spacing={2}>
              {/* 3 */}

              <Button>Оформить заказ</Button>
            </Stack>
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value={activeTabId} index={1}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda deserunt eum expedita
        facilis labore natus quae quo reprehenderit tempora, voluptatibus! Animi doloribus, labore
        numquam sit sunt ut vel vero. Blanditiis corporis ducimus error nesciunt? Ad alias
        cupiditate eveniet facere fuga ipsa iusto necessitatibus, recusandae? Ab corporis delectus
        et ex expedita illo impedit incidunt nemo optio perferendis, velit vero voluptates. Ab
        aperiam at debitis, dolorum ea fugit ipsum magnam nam nemo nobis odit officiis optio, porro
        qui quo quod saepe sed soluta tempore veniam. Asperiores atque consectetur consequatur
        cupiditate explicabo incidunt ipsum maxime minima non omnis, placeat quas, qui repudiandae.
        Laudantium?
      </TabPanel>
      <TabPanel value={activeTabId} index={2}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda deserunt eum expedita
        facilis labore natus quae quo reprehenderit tempora, voluptatibus! Animi doloribus, labore
        numquam sit sunt ut vel vero. Blanditiis corporis ducimus error nesciunt? Ad alias
        cupiditate eveniet facere fuga ipsa iusto necessitatibus, recusandae? Ab corporis delectus
        et ex expedita illo impedit incidunt nemo optio perferendis, velit vero voluptates. Ab
        aperiam at debitis, dolorum ea fugit ipsum magnam nam nemo nobis odit officiis optio, porro
        qui quo quod saepe sed soluta tempore veniam. Asperiores atque consectetur consequatur
        cupiditate explicabo incidunt ipsum maxime minima non omnis, placeat quas, qui repudiandae.
        Laudantium?
      </TabPanel>
    </>
  );
};
