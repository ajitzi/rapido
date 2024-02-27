import * as React from "react";
import {ToastTitle as UIToastTitle} from "@gluestack-ui/themed";


type ToastTitleProps = {
}

export default function ToastTitle(props: React.ComponentProps<typeof UIToastTitle> & ToastTitleProps) {

    return (<UIToastTitle {...props}/>)
}