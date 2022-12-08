import { Grid, Box } from "@mui/material";
import { CalendarFeature } from "features";

export const Calendar = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} lg={9}>
        <CalendarFeature />
      </Grid>
      <Grid item xs={12} lg={3}>
        <Box sx={{ backgroundColor: "white" }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium aperiam
          aspernatur atque blanditiis deleniti dignissimos dolores earum, est et harum hic id
          laudantium minus modi natus nesciunt nihil obcaecati odio quaerat quas quidem repudiandae,
          sint suscipit tempore temporibus voluptatem voluptatum. Ab alias amet aperiam dicta,
          dolore doloremque dolorum eos illo ipsam iusto, modi possimus quaerat rerum sed totam ut
          vel. Ad amet assumenda aut blanditiis consectetur deserunt distinctio dolorem eius, esse
          ex excepturi expedita illo incidunt ipsa natus nulla numquam, obcaecati officiis omnis
          praesentium, quia similique ut voluptatem voluptates voluptatum? Ad autem, blanditiis
          dicta distinctio doloribus earum eveniet id ipsum molestiae quasi! Accusantium aliquam
          aliquid asperiores aspernatur, beatae blanditiis cum cupiditate dolores ea eveniet facere
          incidunt ipsa ipsam, laboriosam laborum magni maiores nam natus necessitatibus omnis
          pariatur quam quibusdam repudiandae sit tempora velit voluptates. Atque commodi cumque
          cupiditate debitis, distinctio dolorem ex hic
        </Box>
      </Grid>
    </Grid>
  );
};
