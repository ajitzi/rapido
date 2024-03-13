import * as React from "react";
import {FormControlLabelText as FormControlLabelTextBase} from "@gluestack-ui/themed";
import FormControlLabelTextType from "./FormControlLabelTextType";


export default function FormControlLabelText(props: FormControlLabelTextType) {

    return <FormControlLabelTextBase {...props}>{props.children}</FormControlLabelTextBase>
}