import * as React from "react";
import {ButtonIcon as ButtonIconBase} from "@gluestack-ui/themed";
import ButtonIconType from "./ButtonIconType";


export default function ButtonIcon(props: ButtonIconType) {

    return (<ButtonIconBase {...props} />);
}