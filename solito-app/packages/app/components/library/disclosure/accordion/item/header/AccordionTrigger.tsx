import * as React from "react";
import {AccordionTrigger as UIAccordionTrigger} from "@gluestack-ui/themed";

export default function AccordionTrigger({children, ...props}: React.ComponentProps<typeof UIAccordionTrigger>) {

    return (
        <UIAccordionTrigger {...props}>
            {children}
        </UIAccordionTrigger>
    )
}