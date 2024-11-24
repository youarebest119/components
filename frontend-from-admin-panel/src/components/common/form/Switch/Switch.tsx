import { InputHTMLAttributes } from "react";
import { clsx } from "../../../../utils/utils";
import Error from "../Error/Error";
import Label from "../Label/Label";
import "./Switch.scss";

type PropTypes = InputHTMLAttributes<HTMLInputElement> & {
    label?: string,
    error?: string,
}

const Switch = ({ name, id, error, className, label, ...rest }: PropTypes) => {
    return (
        <div className={clsx("custom_switch", className)}>
            <div className={clsx("input_in", error && "error_input")}>
                <input
                    type="checkbox"
                    {...rest}
                    name={name}
                    id={name}
                />
                {
                    label && <Label htmlFor={name}>{label}</Label>
                }
            </div>
            {
                error && <Error>{error}</Error>
            }
        </div>
    )
}

export default Switch
