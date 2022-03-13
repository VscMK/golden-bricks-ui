import { TextField } from "@material-ui/core"

const TextFieldWrapper = () => {

    const configTextField = {
        fullWidth: true,
        variant: 'outlined',
    }

    return (
        <TextField {...configTextField} />
    );
}

export default TextFieldWrapper;