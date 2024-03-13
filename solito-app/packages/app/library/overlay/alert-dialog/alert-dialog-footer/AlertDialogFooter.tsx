import * as React from "react";
import {AlertDialogFooter as AlertDialogFooterBase} from "@gluestack-ui/themed";
import AlertDialogFooterType from "./AlertDialogFooterType";

export default function AlertDialogFooter(props: AlertDialogFooterType) {

    return (<AlertDialogFooterBase {...props}>{props.children}</AlertDialogFooterBase>);
}