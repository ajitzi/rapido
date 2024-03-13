import * as React from "react";
import {InputIcon as UIInputIcon} from "@gluestack-ui/themed";


type InputIconProps = {
}

export default function InputIcon(props: React.ComponentProps<typeof UIInputIcon> & InputIconProps) {

    return (
        <UIInputIcon {...props} />
    )
}