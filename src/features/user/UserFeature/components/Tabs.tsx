import { Button, Grid, Stack, Tabs as TabsMui, Typography } from "@mui/material";

import { typography } from "theme";
import { TextFieldOne, PhoneInput } from "common";

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

                <TextFieldOne label="FirstName" placeholder="FirstName" helperText=" " />
                <TextFieldOne
                  label="LastName"
                  placeholder="LastName"
                  helperText={"hfdvfjshvbjfdb"}
                />
                <TextFieldOne label="Date of birth" placeholder="Date of birth" helperText=" " />
              </Stack>
              <Stack direction="column" spacing={2} flexGrow={1}>
                {/* //2*/}
                <PhoneInput
                  name="phone"
                  label="Phone"
                  // value={values.phone}
                  // onChange={handleChange}
                  autoComplete="off"
                  customInput={TextFieldOne}
                  fullWidth
                  helperText=" "
                  // error={!!errors.phone}
                />
                <TextFieldOne label="E-mail" placeholder="E-mail" helperText=" " />
                <TextFieldOne label="Date of birth" placeholder="Date of birth" helperText=" " />
              </Stack>
            </Stack>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h5" fontWeight={typography.fontWeightRegular}>
              Зміна пароля
            </Typography>

            <Stack spacing={2}>
              {/* 3 */}
              <TextFieldOne label="Enter password *" placeholder="Enter password" helperText=" " />
              <TextFieldOne
                label="Password Confirmation *"
                placeholder="Password Confirmation"
                helperText=" "
              />
              <TextFieldOne
                label="Password Confirmation *"
                placeholder="Password Confirmation"
                helperText=" "
              />
              <Button color="success">Save</Button>
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
