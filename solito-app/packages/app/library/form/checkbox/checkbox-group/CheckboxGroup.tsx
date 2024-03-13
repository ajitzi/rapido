import * as React from "react";
import {CheckboxGroup as CheckboxGroupBase} from "@gluestack-ui/themed";
import CheckboxGroupType from "./CheckboxGroupType";


export default function CheckboxGroup(props: CheckboxGroupType) {

    // @ts-ignore
    return <CheckboxGroupBase {...props}>{props.children}</CheckboxGroupBase>;
}