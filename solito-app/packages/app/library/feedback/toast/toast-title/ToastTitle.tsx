import * as React from "react";
import {ToastTitle as ToastTitleBase} from "@gluestack-ui/themed";
import ToastTitleType from "./ToastTitleType";


export default function ToastTitle(props: ToastTitleType) {

    return (<ToastTitleBase {...props}/>);
}