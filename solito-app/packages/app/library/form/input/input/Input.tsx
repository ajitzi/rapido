import * as React from "react";
import {Input as InputBase} from "@gluestack-ui/themed";
import InputType from "./InputType";


export default function Input(props: InputType) {

    // @ts-ignore
    return <InputBase {...props}>{props.children}</InputBase>
}