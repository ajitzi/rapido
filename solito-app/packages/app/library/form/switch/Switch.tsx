import * as React from "react";
import {Switch as SwitchBase} from "@gluestack-ui/themed";
import SwitchType from "./SwitchType";

export default function Switch(props: SwitchType) {

    // @ts-ignore
    return <SwitchBase {...props}>{props.children}</SwitchBase>
}