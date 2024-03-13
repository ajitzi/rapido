import * as React from "react";
import {InputField as InputFieldBase} from "@gluestack-ui/themed";
import InputFieldType from "./InputFieldType";


export default function InputField(props: InputFieldType) {

    // @ts-ignore
    return <InputFieldBase {...props}>{props.children}</InputFieldBase>;
}