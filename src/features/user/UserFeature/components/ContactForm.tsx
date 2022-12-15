import { useState } from "react";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";

import { typography } from "theme";
import { TextFieldOne, PhoneInput, Datepicker } from "common";
import { useContactForm } from "../hooks/useContactForm";

export const ContactForm = () => {
  const { values, errors, touched, handleChange, handleBlur, handleSubmit } = useContactForm();
  const [value, setValue] = useState<Date | null>(new Date());

  return (
    <Box component="form" noValidate autoComplete="off" onSubmit={handleSubmit}>
      <Grid container spacing={2} direction="row" justifyContent="space-between">
        <Grid item xs={12} md={8}>
          <Typography variant="h5" fontWeight={typography.fontWeightRegular}>
            Редагування особистих даних
          </Typography>
          <Stack direction="row" spacing={2}>
            <Stack direction="column" flexGrow={1}>
              <TextFieldOne
                label="FirstName"
                placeholder="FirstName"
                name="firstName"
                onBlur={handleBlur}
                value={values.firstName}
                onChange={handleChange}
                error={touched.firstName && Boolean(errors.firstName)}
                helperText={touched.firstName && errors.firstName}
              />
              <TextFieldOne
                label="LastName"
                placeholder="LastName"
                name="lastName"
                onBlur={handleBlur}
                value={values.lastName}
                onChange={handleChange}
                error={touched.lastName && Boolean(errors.lastName)}
                helperText={touched.lastName && errors.lastName}
              />
              <Datepicker
                value={value}
                onChange={handleChange}
                name="date"
                renderInput={(params) => (
                  <TextFieldOne
                    {...params}
                    sx={{
                      background: "#E9ECEE",
                      ".MuiInputBase-input": { borderColor: "transparent" },
                    }}
                    fullWidth
                    label="Дата"
                    error={touched.date && Boolean(errors.date)}
                    helperText={touched.date && errors.date}
                  />
                )}
                views={["day"]}
                inputFormat="yyyy-MM-dd"
              />
            </Stack>
            <Stack direction="column" spacing={2} flexGrow={1}>
              {/* //2*/}
              <PhoneInput
                name="phone"
                label="Phone"
                value={values.phone}
                onChange={handleChange}
                autoComplete="off"
                customInput={TextFieldOne}
                fullWidth
                error={touched.phone && Boolean(errors.phone)}
                helperText={touched.phone && errors.phone}
              />
              <TextFieldOne
                label="E-mail"
                placeholder="E-mail"
                name="email"
                onBlur={handleBlur}
                value={values.email}
                onChange={handleChange}
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email}
              />
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
            <TextFieldOne
              label="Enter password *"
              placeholder="Enter password"
              name="password"
              onBlur={handleBlur}
              value={values.password}
              onChange={handleChange}
              error={touched.password && Boolean(errors.password)}
              helperText={touched.password && errors.password}
            />
            <TextFieldOne
              label="Password Confirmation *"
              placeholder="Password Confirmation"
              name="password2"
              onBlur={handleBlur}
              value={values.password2}
              onChange={handleChange}
              error={touched.password2 && Boolean(errors.password2)}
              helperText={touched.password2 && errors.password2}
            />
            <TextFieldOne
              label="Password Confirmation *"
              placeholder="Password Confirmation"
              name="confirmPassword"
              onBlur={handleBlur}
              value={values.confirmPassword}
              onChange={handleChange}
              error={touched.confirmPassword && Boolean(errors.confirmPassword)}
              helperText={touched.confirmPassword && errors.confirmPassword}
            />
            <Button color="success">Save</Button>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};
