import * as React from "react";
import {Spinner as SpinnerBase} from "@gluestack-ui/themed";
import SpinnerType from "./SpinnerType";


export default function Spinner({...props}: SpinnerType) {

    return (<SpinnerBase {...props} />)
}