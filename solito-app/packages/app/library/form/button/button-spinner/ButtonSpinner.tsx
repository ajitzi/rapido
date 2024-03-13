import * as React from "react";
import {ButtonSpinner as ButtonSpinnerBase} from "@gluestack-ui/themed";
import ButtonSpinnerType from "./ButtonSpinnerType";


export default function ButtonSpinner(props: ButtonSpinnerType) {

    return (<ButtonSpinnerBase {...props}>{props.children}</ButtonSpinnerBase>);
}