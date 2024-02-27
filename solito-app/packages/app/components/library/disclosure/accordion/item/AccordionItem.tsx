import * as React from "react";
import {AccordionItem as UIAccordionItem} from "@gluestack-ui/themed";

export default function AccordionItem({children, ...props}: React.ComponentProps<typeof UIAccordionItem>) {

    return (
        <UIAccordionItem {...props}>
            {children}
        </UIAccordionItem>
    )
}