import ReactSelect, { Props } from "react-select";
import { clsx } from "../../../../utils/utils";
import Error from "../Error/Error";
import Label from "../Label/Label";
import "./Select.scss";

type PropTypes = Props & {
    label?: string,
    error?: string,
}

const Select = ({ name, id, error, className, label, ...rest }: PropTypes) => {
    return (
        <div className={clsx("custom_select", className)}>
            {
                label && <Label htmlFor={name}>{label}</Label>
            }
            <ReactSelect
                {...rest}
                classNamePrefix="select"
                className="select_in"
            />
            {
                error && <Error>{error}</Error>
            }
        </div>
    )
}

export default Select
