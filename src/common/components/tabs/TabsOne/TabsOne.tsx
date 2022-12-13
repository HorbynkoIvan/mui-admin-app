import { Tabs as TabsMui, Box, Typography, Grid, Stack } from "@mui/material";

import { Tab, TabPanel } from "./components";
import { useTabs } from "./hooks";

export const TabsOne = () => {
  const { activeTabId, handleChange } = useTabs();

  return (
    <>
      <TabsMui value={activeTabId} onChange={handleChange} indicatorColor="secondary">
        <Tab label={"Contact information"} />
        <Tab label={"Address book"} />
        <Tab label={"Order history"} />
      </TabsMui>

      <TabPanel value={activeTabId} index={0}>
        <Grid container spacing={4} direction="row" justifyContent="space-between">
          <Grid item xs={12} md={8}>
            <Typography>Редагування особистих даних</Typography>
            <Stack direction="row" spacing={4}>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium amet
                consequuntur, explicabo modi numquam tempore! Dicta in iste mollitia nisi.
              </div>

              <div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium amet
                consequuntur, explicabo modi numquam tempore! Dicta in iste mollitia nisi.
              </div>
            </Stack>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography>Редагування особистих даних</Typography>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium amet
              consequuntur, explicabo modi numquam tempore! Dicta in iste mollitia nisi.
            </div>
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
