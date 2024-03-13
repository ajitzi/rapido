import * as React from "react";
import {ModalCloseButton as ModalCloseButtonBase} from "@gluestack-ui/themed";
import ModalCloseButtonType from "./ModalCloseButtonType";

export default function ModalCloseButton(props: ModalCloseButtonType) {

    return (<ModalCloseButtonBase {...props}>{props.children}</ModalCloseButtonBase>);
}