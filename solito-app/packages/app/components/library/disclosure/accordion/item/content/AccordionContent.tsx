import * as React from "react";
import {AccordionContent as UIAccordionContent} from "@gluestack-ui/themed";

export default function AccordionContent({children, ...props}: React.ComponentProps<typeof UIAccordionContent>) {

    return (
        <UIAccordionContent {...props}>
            {children}
        </UIAccordionContent>
    )
}