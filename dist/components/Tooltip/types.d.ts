import { HTMLAttributes } from 'vue';
import { TooltipContentProps } from 'reka-ui';
export interface TooltipProps {
    text?: string;
    hoverDelay?: number;
    placement?: TooltipContentProps['side'];
    arrowClass?: HTMLAttributes['class'];
    disabled?: boolean;
}
