import * as React from "react";
import {Progress as ProgressBase} from "@gluestack-ui/themed";
import ProgressType from "./ProgressType";


export default function Progress(props: ProgressType) {

    return (<ProgressBase {...props}>{props.children}</ProgressBase>);
}