import * as React from "react";
import {Progress as UIProgress} from "@gluestack-ui/themed";


type ProgressProps = {
}

export default function Progress({children,...props}: React.ComponentProps<typeof UIProgress> & ProgressProps) {

    return (
        <UIProgress {...props}>
            {children}
        </UIProgress>
    )
}