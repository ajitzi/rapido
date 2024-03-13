import * as React from "react";
import {FormControlErrorIcon as UIFormControlErrorIcon} from "@gluestack-ui/themed";


type FormControlErrorIconProps = {
}

export default function FormControlErrorIcon(props: React.ComponentProps<typeof UIFormControlErrorIcon> & FormControlErrorIconProps) {

    return (
        <UIFormControlErrorIcon {...props} />
    )
}