import * as React from "react";
import {Accordion as UIAccordion} from "@gluestack-ui/themed";

export default function Accordion({children, ...props}: React.ComponentProps<typeof UIAccordion>) {

    return (
        <UIAccordion {...props}>
            {children}
        </UIAccordion>
    )
}