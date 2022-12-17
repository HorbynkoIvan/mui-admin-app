import { Box, Button, Grid, Stack, Typography } from "@mui/material";
// import moment from "moment";
import { typography } from "theme";
import { TextFieldOne, PhoneInput, Datepicker } from "common";
import { useContactForm } from "../hooks/useContactForm";
import { MyFormValues } from "../interfaces";

const dataAPI: MyFormValues = {
  firstName: "Горбинко",
  lastName: "Іван",
  birthDay: "2022-12-22T22:00:00.000Z",
  phoneMobile: "+38 (093) 657 49 36",
  email: "horbynko.i@gmail.com",
  checkbox: true,
  oldPassword: "wefwefwe",
  newPassword: "11111111",
  newPlainPassword: "11111111",
};

export const ContactForm = () => {
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
    setFieldValue,
  } = useContactForm(dataAPI);

  // console.log(moment(new Date(values.birthDay)).format("YYYY-MM-DD"));
  // console.log(touched, errors);

  return (
    <Box component="form" noValidate autoComplete="off" onSubmit={handleSubmit}>
      <Grid container spacing={2} direction="row" justifyContent="space-between">
        <Grid item xs={12} md={8}>
          <Typography variant="h5" fontWeight={typography.fontWeightRegular}>
            Редагування особистих даних
          </Typography>
          <Stack direction="row" spacing={2}>
            <Stack direction="column" spacing={1} flexGrow={1}>
              <TextFieldOne
                label="FirstName"
                placeholder="FirstName"
                name="firstName"
                onBlur={handleBlur}
                value={values.firstName}
                onChange={handleChange}
                error={touched.firstName && Boolean(errors.firstName)}
                helperText={(touched.firstName && <>errors.firstName</>) || " "}
              />
              <TextFieldOne
                label="LastName"
                placeholder="LastName"
                name="lastName"
                onBlur={handleBlur}
                value={values.lastName}
                onChange={handleChange}
                error={touched.lastName && Boolean(errors.lastName)}
                helperText={(touched.lastName && <>errors.lastName</>) || " "}
              />
              <Datepicker
                value={values.birthDay}
                onChange={(value) => setFieldValue("birthDay", value)}
                name="birthDay"
                renderInput={(params) => (
                  <TextFieldOne
                    {...params}
                    sx={{
                      background: "#E9ECEE",
                      ".MuiInputBase-input": { borderColor: "transparent" },
                    }}
                    fullWidth
                    label="Дата"
                    error={touched.birthDay && Boolean(errors.birthDay)}
                    helperText={touched.birthDay && <>errors.birthDay</>}
                  />
                )}
                views={["day"]}
                inputFormat="yyyy-MM-dd"
              />
            </Stack>
            <Stack direction="column" spacing={1} flexGrow={1}>
              {/* //2*/}
              <PhoneInput
                name="phoneMobile"
                label="Phone"
                value={values.phoneMobile}
                onChange={handleChange}
                onBlur={handleBlur}
                autoComplete="off"
                customInput={TextFieldOne}
                fullWidth
                error={touched.phoneMobile && Boolean(errors.phoneMobile)}
                helperText={(touched.phoneMobile && <>{errors.phoneMobile}</>) || " "}
              />
              <TextFieldOne
                label="E-mail"
                placeholder="E-mail"
                name="email"
                onBlur={handleBlur}
                value={values.email}
                onChange={handleChange}
                error={touched.email && Boolean(errors.email)}
                helperText={(touched.email && <>errors.email</>) || " "}
              />
              <TextFieldOne label="Date of birth" placeholder="Date of birth" helperText=" " />
            </Stack>
          </Stack>
        </Grid>

        <Grid item xs={12} md={4}>
          <Typography variant="h5" fontWeight={typography.fontWeightRegular}>
            Зміна пароля
          </Typography>

          <Stack spacing={1}>
            {/* 3 */}
            <TextFieldOne
              label="Old password *"
              placeholder="Old password"
              name="oldPassword"
              onBlur={handleBlur}
              value={values.oldPassword}
              onChange={handleChange}
              error={touched.oldPassword && Boolean(errors.oldPassword)}
              helperText={(touched.oldPassword && <>errors.oldPassword</>) || " "}
            />
            <TextFieldOne
              label="New password"
              placeholder="New password"
              name="newPassword"
              onBlur={handleBlur}
              value={values.newPassword}
              onChange={handleChange}
              error={touched.newPassword && Boolean(errors.newPassword)}
              helperText={(touched.newPassword && <>errors.newPassword</>) || " "}
            />
            <TextFieldOne
              label="New plain password"
              placeholder="New plain password"
              name="newPlainPassword"
              onBlur={handleBlur}
              value={values.newPlainPassword}
              onChange={handleChange}
              error={touched.newPlainPassword && Boolean(errors.newPlainPassword)}
              helperText={(touched.newPlainPassword && <>errors.newPlainPassword</>) || " "}
            />
            <Button color="success" disabled={isSubmitting} onClick={() => handleSubmit()}>
              Save
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};
