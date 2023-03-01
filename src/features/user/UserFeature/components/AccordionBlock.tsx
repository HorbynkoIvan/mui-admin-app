import { Box, Typography } from "@mui/material";

import { typography } from "theme";

import { Accordion, AccordionDetails, AccordionSummary } from "./index";

/* ToDo need move to "feature" AccordionOne */
export const AccordionBlock = () => {
  return (
    <Box sx={{ width: "100%", marginBottom: "35px" }}>
      <Accordion>
        <AccordionSummary>
          <Typography variant="h5" fontWeight={typography.fontWeightRegular}>
            Contact information
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aspernatur, dolor iste
            natus non quam quo reiciendis repellat! Aperiam assumenda consectetur corporis delectus,
            dicta distinctio dolore eligendi error esse hic, illo iure labore magni, maiores maxime
            minus nisi nulla numquam perspiciatis quas quisquam quo quod ullam voluptate voluptatem!
            Debitis, omnis.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary>
          <Typography variant="h5" fontWeight={typography.fontWeightRegular}>
            Address book
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias consectetur cumque
            dolore eius, expedita, facere facilis hic maxime nemo perspiciatis quis, rem tenetur
            ullam. Asperiores autem consectetur consequuntur dolor ducimus eum expedita fugiat, illo
            libero magni necessitatibus non perferendis porro quos ratione repellendus soluta,
            voluptatum? Eveniet impedit laudantium molestias omnis.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary>
          <Typography variant="h5" fontWeight={typography.fontWeightRegular}>
            Order history
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate eaque explicabo
            facilis ut voluptate? Est harum magnam nostrum obcaecati quam repellat repellendus
            repudiandae? Ab distinctio enim fugit illo impedit laboriosam mollitia obcaecati placeat
            repellat soluta. Aperiam eos, ex fuga impedit ipsa laborum magnam, minima molestias
            obcaecati quis, repudiandae saepe voluptate.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};
