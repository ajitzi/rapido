import * as React from "react";
import {FormControlHelperText as FormControlHelperTextBase} from "@gluestack-ui/themed";
import FormControlHelperTextType from "./FormControlHelperTextType";


type FormControlHelperTextProps = {
}

export default function FormControlHelperText(props: FormControlHelperTextType) {

    return <FormControlHelperTextBase {...props}>{props.children}</FormControlHelperTextBase>
}