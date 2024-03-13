import * as React from "react";
import {CheckboxLabel as CheckboxLabelBase} from "@gluestack-ui/themed";
import CheckboxLabelType from "./CheckboxLabelType";


export default function CheckboxLabel(props: CheckboxLabelType) {

    return <CheckboxLabelBase {...props}>{props.children}</CheckboxLabelBase>;
}