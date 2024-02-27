import * as React from "react";
import {AlertIcon as UIAlertIcon} from "@gluestack-ui/themed";


type AlertIconProps = {
}

export default function AlertIcon(props: React.ComponentProps<typeof UIAlertIcon> & AlertIconProps) {

    return (<UIAlertIcon {...props}/>)
}