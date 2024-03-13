import * as React from "react";
import {RadioLabel as RadioLabelBase} from "@gluestack-ui/themed";
import RadioLabelType from "./RadioLabelType";


export default function RadioLabel(props: RadioLabelType) {

    return <RadioLabelBase {...props}>{props.children}</RadioLabelBase>
}