import * as React from "react";
import {Button as ButtonBase} from "@gluestack-ui/themed";
import ButtonType from "app/library/form/button/button/ButtonType";


type ButtonProps = {
}

export default function Button(props: ButtonType) {

    // @ts-ignore
    return <ButtonBase {...props}>{props.children}</ButtonBase>;
}