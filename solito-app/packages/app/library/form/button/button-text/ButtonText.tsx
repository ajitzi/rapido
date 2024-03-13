import * as React from "react";
import {ButtonText as ButtonTextBase} from "@gluestack-ui/themed";
import ButtonTextType from "./ButtonTextType";


type ButtonTextProps = {
}

export default function ButtonText({children, ...props}: ButtonTextType) {

    return (<ButtonTextBase {...props}>{children}</ButtonTextBase>);
}