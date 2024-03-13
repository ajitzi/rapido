import * as React from "react";
import {FormControlLabel as FormControlLabelBase} from "@gluestack-ui/themed";
import FormControlLabelType from "./FormControlLabelType";


type FormControlLabelProps = {
}

export default function FormControlLabel(props: FormControlLabelType) {

    return <FormControlLabelBase {...props}>{props.children}</FormControlLabelBase>
}