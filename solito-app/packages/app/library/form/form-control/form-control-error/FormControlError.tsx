import * as React from "react";
import {FormControlError as FormControlErrorBase} from "@gluestack-ui/themed";
import FormControlErrorType from "./FormControlErrorType";


export default function FormControlError(props: FormControlErrorType) {

    return <FormControlErrorBase {...props}>{props.children}</FormControlErrorBase>
}