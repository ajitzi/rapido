import * as React from "react";
import {TextareaInput as TextareaInputBase} from "@gluestack-ui/themed";
import TextareaInputType from "./TextareaInputType";


export default function TextareaInput(props: TextareaInputType) {

    return <TextareaInputBase {...props}>{props.children}</TextareaInputBase>
}