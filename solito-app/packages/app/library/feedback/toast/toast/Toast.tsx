import * as React from "react";
import {Toast as ToastBase} from "@gluestack-ui/themed";
import ToastType from "./ToastType";


export default function Toast(props: ToastType) {

    return (<ToastBase {...props}>{props.children}</ToastBase>);
}