import React from "react";
import { Button } from "@material-ui/core";
import { useFormikContext } from "formik";

const ButtonWrapper = ({children, otherProps}) => {

    const { submitForm } = useFormikContext();

    const handleSubmit = () => {
        submitForm();
    };

    const configButton = {
        variant: 'contailned',
        color: 'primary',
        fullWidth: true,
        onclick: handleSubmit,
    }

    return (
        <Button
            {...configButton}
        />
    );

    export default ButtonWrapper;
}