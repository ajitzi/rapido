import * as React from "react";
import {Divider as DividerBase} from "@gluestack-ui/themed";
import DividerType from "./DividerType";

export default function Divider(props: DividerType) {

    return (<DividerBase {...props} />)
}