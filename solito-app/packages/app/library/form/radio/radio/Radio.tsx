import * as React from "react";
import {Radio as RadioBase} from "@gluestack-ui/themed";
import RadioType from "./RadioType";


export default function Radio(props: RadioType) {

    // @ts-ignore
    return <RadioBase {...props}>{props.children}</RadioBase>
}