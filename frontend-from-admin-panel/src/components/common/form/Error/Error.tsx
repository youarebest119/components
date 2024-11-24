import { forwardRef, HTMLAttributes } from "react";
import "./Error.scss";
import { clsx } from "../../../../utils/utils";

type PropTypes = HTMLAttributes<HTMLSpanElement> & {

}

const Error = forwardRef<HTMLSpanElement, PropTypes>(({ children, className, ...rest }, ref) => {
    return (
        <span ref={ref} {...rest} className={clsx("custom_error", className)}>
            {children}
        </span>
    );
});

export default Error;