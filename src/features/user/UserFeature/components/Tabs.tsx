import { Stack, Tabs as TabsMui } from "@mui/material";

import { ButtonLogout, Tab, TabPanel } from "./index";
import { useTabs } from "../hooks";
import { ContactForm } from "./ContactForm";

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
        <ContactForm />
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
