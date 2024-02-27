import * as React from "react";
import {FormControl as UIFormControl} from "@gluestack-ui/themed";


type FormControlProps = {
}

export default function FormControl({children, ...props}: React.ComponentProps<typeof UIFormControl> & FormControlProps) {

    return (
        <UIFormControl {...props}>
            {children}
        </UIFormControl>
    )
}