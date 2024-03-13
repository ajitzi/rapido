import * as React from "react";
import {InputSlot as UIInputSlot} from "@gluestack-ui/themed";


type InputSlotProps = {
}

export default function InputSlot({children, ...props}: React.ComponentProps<typeof UIInputSlot> & InputSlotProps) {

    return (
        <UIInputSlot {...props}>
            {children}
        </UIInputSlot>
    )
}