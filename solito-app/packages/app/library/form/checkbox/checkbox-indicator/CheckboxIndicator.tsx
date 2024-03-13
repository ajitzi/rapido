import * as React from "react";
import {CheckboxIndicator as CheckboxIndicatorBase} from "@gluestack-ui/themed";
import CheckboxIndicatorType from "./CheckboxIndicatorType";


export default function CheckboxIndicator(props: CheckboxIndicatorType) {

    return <CheckboxIndicatorBase {...props}>{props.children}</CheckboxIndicatorBase>;
}