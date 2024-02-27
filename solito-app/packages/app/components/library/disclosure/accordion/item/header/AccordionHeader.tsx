import * as React from "react";
import {AccordionHeader as UIAccordionHeader} from "@gluestack-ui/themed";

export default function AccordionHeader({children, ...props}: React.ComponentProps<typeof UIAccordionHeader>) {

    return (
        <UIAccordionHeader {...props}>
            {children}
        </UIAccordionHeader>
    )
}