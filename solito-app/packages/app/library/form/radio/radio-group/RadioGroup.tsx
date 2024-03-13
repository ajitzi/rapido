import * as React from "react";
import {RadioGroup as RadioGroupBase} from "@gluestack-ui/themed";
import RadioGroupType from "./RadioGroupType";


export default function RadioGroup(props: RadioGroupType) {

    // @ts-ignore
    return <RadioGroupBase {...props}>{props.children}</RadioGroupBase>
}