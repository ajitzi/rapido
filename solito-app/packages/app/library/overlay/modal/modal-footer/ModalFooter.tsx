import * as React from "react";
import {ModalFooter as ModalFooterBase} from "@gluestack-ui/themed";
import ModalFooterType from "./ModalFooterType";

export default function ModalFooter(props: ModalFooterType) {

    return (<ModalFooterBase {...props}>{props.children}</ModalFooterBase>);
}