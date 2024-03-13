import * as React from "react";
import {Textarea as TextareaBase} from "@gluestack-ui/themed";
import TextareaType from "./TextareaType";


export default function Textarea(props: TextareaType) {

    // @ts-ignore
    return <TextareaBase {...props}>{props.children}</TextareaBase>
}