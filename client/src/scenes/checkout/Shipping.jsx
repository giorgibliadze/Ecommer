import React from "react";
import { Box, FormControlLabel, Checkbox, Typography } from "@mui/material";
import AddressForm from "./AddressForm";

const Shipping = ({
  values,
  errors,
  touched,
  handleBlur,
  handleChange,
  setFieldValue,
}) => {
  return (
    <Box m="30px auto">
      {/*BILLING FORM */}
      <Box>
        <Typography sx={{ mb: "15px" }} fontSize="18px">
          Billing Information
        </Typography>
        <AddressForm
          type="billingAddress"
          errors={errors}
          touched={touched}
          handleBlur={handleBlur}
          handleChange={handleChange}
          values={values.billingAddress}
        />
      </Box>
      <Box mb="20px">
        <FormControlLabel
          label="Same for Shipping Address"
          control={
            <Checkbox
              defaultChecked
              value={values.shippingAddress.isSameAddress}
              onChange={() =>
                setFieldValue(
                  "shippingAddress.isSameAddress",
                  !values.shippingAddress.isSameAddress
                )
              }
            />
          }
        />
      </Box>
      {/* SHIPPING FORM */}
      {!values.shippingAddress.isSameAddress && (
        <Box>
          <Typography sx={{ mb: "15px" }} fontSize="18px">
            Shipping Information
          </Typography>
          <AddressForm
            type="shippingAddress"
            errors={errors}
            touched={touched}
            handleBlur={handleBlur}
            handleChange={handleChange}
            values={values.shippingAddress}
          />
        </Box>
      )}
    </Box>
  );
};

export default Shipping;
