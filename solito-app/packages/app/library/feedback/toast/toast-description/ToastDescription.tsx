import * as React from "react";
import {ToastDescription as ToastDescriptionBase} from "@gluestack-ui/themed";
import ToastDescriptionType from "./ToastDescriptionType";


export default function ToastDescription(props: ToastDescriptionType) {

    return (
        <ToastDescriptionBase {...props}>{props.children}</ToastDescriptionBase>
    )
}