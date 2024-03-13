import * as React from "react";
import {FormControl as FormControlBase} from "@gluestack-ui/themed";
import FormControlType from "./FormControlType";


export default function FormControl(props: FormControlType) {

    // @ts-ignore
    return <FormControlBase {...props}>{props.children}</FormControlBase>
}