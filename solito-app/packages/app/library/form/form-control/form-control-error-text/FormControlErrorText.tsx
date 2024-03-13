import * as React from "react";
import {FormControlErrorText as FormControlErrorTextBase} from "@gluestack-ui/themed";
import FormControlErrorTextType from "./FormControlErrorTextType";


export default function FormControlErrorText(props: FormControlErrorTextType) {

    return <FormControlErrorTextBase {...props}>{props.children}</FormControlErrorTextBase>
}