export type dataTypes = {
    name: string,
    type: string,
    tags: string[],
    id: string,
    codes: {
        name: string,
        id: string,
        fileName: string,
        typescript?: string,
        typescriptFileName?: string,
        code: string,
    }[],
}

export const folderStructure = [
    {
        name: "src",
        type: "folder",
        children: [
            {
                name: "assets",
                type: "folder",
                children: [
                    {
                        name: "icons",
                        type: "folder",
                        children: [
                            {
                                name: "icons.tsx",
                                type: "file",
                            },
                        ]
                    },
                    {
                        name: "images",
                        type: "folder",
                    },
                    {
                        name: "theme",
                        type: "folder",
                        children: [
                            {
                                name: "_var.scss",
                                type: "file",
                            },
                        ]
                    },
                ]
            },
            {
                name: "components",
                type: "folder",
                children: [
                    {
                        name: "common",
                        type: "folder",
                        children: [
                            {
                                name: "Header",
                                type: "folder",
                                children: [
                                    {
                                        name: "Header.tsx",
                                        type: "file",
                                    },
                                    {
                                        name: "Header.scss",
                                        type: "file",
                                    },
                                ],
                            },
                            {
                                name: "Footer",
                                type: "folder",
                                children: [
                                    {
                                        name: "Footer.tsx",
                                        type: "file",
                                    },
                                    {
                                        name: "Footer.scss",
                                        type: "file",
                                    },
                                ],
                            },
                            {
                                name: "Sidebar",
                                type: "folder",
                                children: [
                                    {
                                        name: "Sidebar.tsx",
                                        type: "file",
                                    },
                                    {
                                        name: "Sidebar.scss",
                                        type: "file",
                                    },
                                ],
                            },
                            {
                                name: "Button",
                                type: "folder",
                                children: [
                                    {
                                        name: "Button.tsx",
                                        type: "file",
                                    },
                                    {
                                        name: "Button.scss",
                                        type: "file",
                                    },
                                ],
                            },
                            {
                                name: "form",
                                type: "folder",
                                children: [
                                    {
                                        name: "Input",
                                        type: "folder",
                                        children: [
                                            {
                                                name: "Input.tsx",
                                                type: "file",
                                            },
                                            {
                                                name: "Input.scss",
                                                type: "file",
                                            },
                                        ],
                                    },
                                    {
                                        name: "Password",
                                        type: "folder",
                                        children: [
                                            {
                                                name: "Password.tsx",
                                                type: "file",
                                            },
                                            {
                                                name: "Password.scss",
                                                type: "file",
                                            },
                                        ],
                                    },
                                    {
                                        name: "Select",
                                        type: "folder",
                                        children: [
                                            {
                                                name: "Select.tsx",
                                                type: "file",
                                            },
                                            {
                                                name: "Select.scss",
                                                type: "file",
                                            },
                                        ],
                                    },
                                    {
                                        name: "Textarea",
                                        type: "folder",
                                        children: [
                                            {
                                                name: "Textarea.tsx",
                                                type: "file",
                                            },
                                            {
                                                name: "Textarea.scss",
                                                type: "file",
                                            },
                                        ],
                                    },
                                    {
                                        name: "Checkbox",
                                        type: "folder",
                                        children: [
                                            {
                                                name: "Checkbox.tsx",
                                                type: "file",
                                            },
                                            {
                                                name: "Checkbox.scss",
                                                type: "file",
                                            },
                                        ],
                                    },
                                    {
                                        name: "Switch",
                                        type: "folder",
                                        children: [
                                            {
                                                name: "Switch.tsx",
                                                type: "file",
                                            },
                                            {
                                                name: "Switch.scss",
                                                type: "file",
                                            },
                                        ],
                                    },
                                ],
                            },
                        ]
                    },
                    {
                        name: "layouts",
                        type: "folder",
                        children: [
                            {
                                name: "Homelayout",
                                type: "folder",
                                children: [
                                    {
                                        name: "Homelayout.tsx",
                                        type: "file",
                                    },
                                    {
                                        name: "Homelayout.scss",
                                        type: "file",
                                    },
                                ],
                            },
                            {
                                name: "Authlayout",
                                type: "folder",
                                children: [
                                    {
                                        name: "Authlayout.tsx",
                                        type: "file",
                                    },
                                    {
                                        name: "Authlayout.scss",
                                        type: "file",
                                    },
                                ],
                            },
                        ]
                    },
                    {
                        name: "pages",
                        type: "folder",
                        children: [
                            {
                                name: "Homepage",
                                type: "folder",
                                children: [
                                    {
                                        name: "Homepage.tsx",
                                        type: "file",
                                    },
                                    {
                                        name: "Homepage.scss",
                                        type: "file",
                                    },
                                ],
                            },
                            {
                                name: "Dashboard",
                                type: "folder",
                                children: [
                                    {
                                        name: "Dashboard.tsx",
                                        type: "file",
                                    },
                                    {
                                        name: "Dashboard.scss",
                                        type: "file",
                                    },
                                    {
                                        name: "DashboardCard",
                                        type: "folder",
                                        children: [
                                            {
                                                name: "DashboardCard.tsx",
                                                type: "file",
                                            },
                                            {
                                                name: "DashboardCard.scss",
                                                type: "file",
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                name: "ErrorPage",
                                type: "folder",
                                children: [
                                    {
                                        name: "ErrorPage.tsx",
                                        type: "file",
                                    },
                                    {
                                        name: "ErrorPage.scss",
                                        type: "file",
                                    },
                                ],
                            },
                            {
                                name: "PageNotFound",
                                type: "folder",
                                children: [
                                    {
                                        name: "PageNotFound.tsx",
                                        type: "file",
                                    },
                                    {
                                        name: "PageNotFound.scss",
                                        type: "file",
                                    },
                                ],
                            },
                        ]
                    },
                ],
            },
            {
                name: "hooks",
                type: "folder",
                children: [
                ],
            },
            {
                name: "utils",
                type: "folder",
                children: [
                    {
                        name: "utils.ts",
                        type: "file",
                    },
                    {
                        name: "constants.ts",
                        type: "file",
                    },
                ],
            },
            {
                name: "App.js",
                type: "file",
            },
            {
                name: "Application.js",
                type: "file",
            },
            {
                name: "index.scss",
                type: "file",
            },
        ],
    },
    {
        name: "public",
        type: "folder",
        children: [
            { name: "index.html", type: "file" },
            { name: "favicon.ico", type: "file" },
        ],
    },
    {
        name: "package.json",
        type: "file",
    },
]

export const data: dataTypes[] = [
    {
        name: "input",
        type: "component",
        tags: ["input", "error", "clsx", "utils", "global", "typescript", "package.json"],
        id: "input-1",
        codes: [
            {
                name: "input-javascript",
                id: "input-javascript",
                fileName: "Input.jsx",
                typescriptFileName: "Input.tsx",
                typescript: `
import { InputHTMLAttributes, ReactNode } from "react";
import { clsx } from "../../../../utils/utils";
import Error from "../Error/Error";
import Label from "../Label/Label";
import "./Input.scss";

type PropTypes = InputHTMLAttributes<HTMLInputElement> & {
    label?: string,
    icon?: ReactNode,
    rightIcon?: ReactNode,
    error?: string,
}

const Input = ({ name, id, icon, error, rightIcon, type, className, label, ...rest }: PropTypes) => {
    return (
        <div className={clsx("custom_input", className)}>
            {
                label && <Label htmlFor={name}>{label}</Label>
            }
            <div className={clsx("input_in", icon && "icon_input", rightIcon && "right_icon_input", error && "error_input")}>
                {
                    icon && <div className="input_icon">{icon}</div>
                }
                <input
                    type={type || "text"}
                    {...rest}
                    name={name}
                    id={name}
                />
                {
                    rightIcon && <div className="right_input_icon">{rightIcon}</div>
                }
            </div>
            {
                error && <Error>{error}</Error>
            }
        </div>
    )
}

export default Input;

                `,
                code: `
import React from "react";
import { clsx } from "../../../../utils/utils";
import Error from "../Error/Error";
import Label from "../Label/Label";
import "./Input.scss";

const Input = ({ name, id, icon, error, rightIcon, type, className, label, ...rest }) => {
    return (
        <div className={clsx("custom_input", className)}>
            {label && <Label htmlFor={name}>{label}</Label>}
            <div className={clsx("input_in", icon && "icon_input", rightIcon && "right_icon_input", error && "error_input")}>
                {icon && <div className="input_icon">{icon}</div>}
                <input
                    type={type || "text"}
                    {...rest}
                    name={name}
                    id={name}
                />
                {rightIcon && <div className="right_input_icon">{rightIcon}</div>}
            </div>
            {error && <Error>{error}</Error>}
        </div>
    );
};

export default Input;

                `,
            },
            {
                name: "input-scss",
                id: "input-scss",
                fileName: "Input.scss",
                code: `
@import "../../../../assets/theme/_var.scss";

.custom_input {
    .input_in {

        input,
        textarea {
            height: 4.6rem;
            border-radius: 0.8rem;
            border: 0.1rem solid $border;
            outline: none;
            font-size: 1.6rem;
            font-weight: 400;
            padding: 0 2.4rem;
            transition: 300ms ease-in-out;
            color: $black;
            width: 100%;

            &:focus {
                border-color: $baseclr;
            }
        }

        textarea {
            min-height: 12rem;
            padding-top: 0.8rem;
            resize: none;
        }

        &.error_input {

            input,
            textarea {
                border-color: $redclr;
            }
        }

        &.icon_input {
            position: relative;

            input {
                padding-left: 4rem;
            }

            .input_icon {
                position: absolute;
                top: 50%;
                left: 0.8rem;
                transform: translateY(-50%);
                color: $black;

                svg {
                    path {
                        fill: $black;
                    }
                }
            }
        }

        &.right_icon_input {
            position: relative;

            input {
                padding-right: 4rem;
            }

            .right_input_icon {
                position: absolute;
                top: 50%;
                right: 0.8rem;
                transform: translateY(-50%);
                color: $black;

                svg {
                    path {
                        fill: $black;
                    }
                }
            }
        }
    }
}
                `
            },
            {
                name: "error-javascript",
                id: "error-javascript",
                fileName: "Error.jsx",
                typescriptFileName: "Error.tsx",
                typescript: `
import { forwardRef, HTMLAttributes } from "react";
import { clsx } from "../../../../utils/utils";
import "./Error.scss";

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
                `,
                code: `
import React, { forwardRef } from "react";
import { clsx } from "../../../../utils/utils";
import "./Error.scss";

const Error = forwardRef(({ children, className, ...rest }, ref) => {
    return (
        <span ref={ref} {...rest} className={clsx("custom_error", className)}>
            {children}
        </span>
    );
});

export default Error;
                `
            },
            {
                name: "error-scss",
                id: "error-scss",
                fileName: "Error.scss",
                code: `
@import "../../../../assets/theme/_var.scss";

.custom_error {
    font-size: 1.3rem;
    font-weight: 400;
    color: $redclr;
    display: flex;
    margin-top: 0.3rem;
    align-items: center;
    line-height: 1.8rem;

    @media (max-width: 767px) {
        font-size: 1.2rem;
        line-height: 2rem;
        margin-bottom: 0.5rem;
    }
}
                `,
            },
            {
                name: "label-javascript",
                id: "label-javascript",
                fileName: "Label.jsx",
                typescriptFileName: "Label.tsx",
                typescript: `
import { forwardRef, LabelHTMLAttributes } from "react";
import { clsx } from "../../../../utils/utils";
import "./Label.scss";

type PropTypes = LabelHTMLAttributes<HTMLLabelElement> & {
    required?: boolean,
};

const Label = forwardRef<HTMLLabelElement, PropTypes>(({ children, required, className, ...rest }, ref) => {
    return (
        <label ref={ref} {...rest} className={clsx("custom_label", className)}>
            {children}
            {required ? <sup>*</sup> : null}
        </label>
    );
});

export default Label;
                `,
                code: `
import { forwardRef } from "react";
import { clsx } from "../../../../utils/utils";
import "./Label.scss";

const Label = forwardRef(({ children, required, className, ...rest }, ref) => {
    return (
        <label ref={ref} {...rest} className={clsx("custom_label", className)}>
            {children}
            {required ? <sup>*</sup> : null}
        </label>
    );
});

export default Label;

                `
            },
            {
                name: "label-scss",
                id: "label-scss",
                fileName: "Label.scss",
                code: `
@import "../../../../assets/theme/_var.scss";

.custom_label {
    font-size: 1.4rem;
    font-weight: 400;
    color: $black;
    display: flex;
    margin-bottom: 0.6rem;
    align-items: center;
    line-height: 1.8rem;

    @media (max-width: 767px) {
        font-size: 1.2rem;
        line-height: 2rem;
        margin-bottom: 0.5rem;
    }

    sup {
        top: -0.4rem;
    }
}
                `
            },
            {
                name: "utils-javascript",
                id: "utils-javascript",
                fileName: "utils.js",
                typescriptFileName: "utils.ts",
                typescript: `
type ClassValue = string | number | boolean | undefined | null;

export function clsx(...args: ClassValue[]): string {
    return args
        .filter(Boolean)
        .map(arg => String(arg))
        .join(' ');
}
                `,
                code: `
export function clsx(...args) {
    return args
        .filter(Boolean)
        .join(' ');
}
                `
            },
            {
                name: "_var-scss",
                id: "_var-scss",
                fileName: "_var.scss",
                code: `
$basefont: "Poppins", sans-serif;

$baseclr: #2292fb;
$black: black;
$white: white;
$redclr: #FF0000;

$border: #ddd;
                `,
            },
            {
                name: "index-scss",
                id: "index-scss",
                fileName: "index.scss",
                code: `
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
@import "./assets/theme/_var.scss";

html {
    font-size: 62.5%;
}

body {
    font-family: $basefont;
}

img,
svg,
canvas,
video,
iframe {
    max-width: 100%;
}

p {
    font-size: 1.6rem;
}

a,
span {
    display: inline-block;
    text-decoration: none;
}

h1,
.h1,
h2,
.h2,
h3,
.h3,
h4,
.h4,
h5,
.h5,
h6,
.h6,
p {
    margin-bottom: 0;
}

ul {
    margin: 0;
    padding: 0;
    list-style: none;
}

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

/* Firefox */
input[type="number"] {
    -moz-appearance: textfield;
    appearance: textfield;
}

/* Change the white to any color */
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px $white inset !important;
    -webkit-text-fill-color: $black !important;
    transition: 4000s ease-in-out;
}

.clickable {
    cursor: pointer !important;
}              
`,
            },
            {
                name: "package-json",
                id: "package-json",
                fileName: "package.json",
                code: `
{
    "name": "input",
    "version": "0.1.0",
    "private": true,
    "dependencies": {
        "@testing-library/jest-dom": "^5.17.0",
        "@testing-library/react": "^13.4.0",
        "@testing-library/user-event": "^13.5.0",
        "@types/jest": "^27.5.2",
        "@types/node": "^16.18.119",
        "@types/react": "^18.3.12",
        "@types/react-dom": "^18.3.1",
        "bootstrap": "^5.3.3",
        "react": "^18.3.1",
        "react-bootstrap": "^2.10.5",
        "react-dom": "^18.3.1",
        "react-scripts": "5.0.1",
        "sass": "1.45.0",
        "typescript": "^4.9.5",
        "web-vitals": "^2.1.4"
    },
    "scripts": {
        "start": "react-scripts start",
        "build": "react-scripts build",
        "test": "react-scripts test",
        "eject": "react-scripts eject"
    },
    "eslintConfig": {
        "extends": [
            "react-app",
            "react-app/jest"
        ]
    },
    "browserslist": {
        "production": [
            ">0.2%",
            "not dead",
            "not op_mini all"
        ],
        "development": [
            "last 1 chrome version",
            "last 1 firefox version",
            "last 1 safari version"
        ]
    }
}
                `
            },
            {
                name: "index-javascript",
                id: "index-javascript",
                fileName: "index.jsx",
                typescriptFileName: "index.tsx",
                typescript: `
import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

                `,
                code: `
import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root')
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
`
            },
        ],
    },
    {
        name: "password",
        type: "component",
        tags: ["password", "input", "error", "clsx", "utils", "global", "typescript", "package.json"],
        id: "password-1",
        codes: [
            {
                name: "password-javascript",
                id: "password-javascript",
                fileName: "Password.jsx",
                typescriptFileName: "Password.tsx",
                typescript: `
import { InputHTMLAttributes, ReactNode, useState } from "react";
import { CloseEye, EyeIcon } from "../../../../assets/icons/icons";
import { clsx } from "../../../../utils/utils";
import Error from "../Error/Error";
import Label from "../Label/Label";
import "./Password.scss";

type PropTypes = Omit<InputHTMLAttributes<HTMLInputElement>, "type"> & {
    label?: string,
    icon?: ReactNode,
    error?: string,
}

const Password = ({ name, id, icon, error, className, label, ...rest }: PropTypes) => {
    const [open, setOpen] = useState(false);
    return (
        <div className={clsx("custom_input", className)}>
            {
                label && <Label htmlFor={name}>{label}</Label>
            }
            <div className={clsx("input_in", icon && "icon_input", "right_icon_input", error && "error_input")}>
                {
                    icon && <div className="input_icon">{icon}</div>
                }
                <input
                    type={open ? "text" : "password"}
                    {...rest}
                    name={name}
                    id={name}
                />
                <div className="right_input_icon clickable" onClick={() => setOpen(prev => !prev)}>
                    {
                        open ?
                            <EyeIcon />
                            :
                            <CloseEye />
                    }
                </div>
            </div>
            {
                error && <Error>{error}</Error>
            }
        </div>
    )
}

export default Password

                `,
                code: `
import { useState } from "react";
import { CloseEye, EyeIcon } from "../../../../assets/icons/icons";
import { clsx } from "../../../../utils/utils";
import Error from "../Error/Error";
import Label from "../Label/Label";
import "./Password.scss";

const Password = ({ name, id, icon, error, className, label, ...rest }) => {
    const [open, setOpen] = useState(false);

    return (
        <div className={clsx("custom_input", className)}>
            {label && <Label htmlFor={name}>{label}</Label>}
            <div className={clsx("input_in", icon && "icon_input", "right_icon_input", error && "error_input")}>
                {icon && <div className="input_icon">{icon}</div>}
                <input
                    type={open ? "text" : "password"}
                    {...rest}
                    name={name}
                    id={name}
                />
                <div className="right_input_icon clickable" onClick={() => setOpen(prev => !prev)}>
                    {open ? <EyeIcon /> : <CloseEye />}
                </div>
            </div>
            {error && <Error>{error}</Error>}
        </div>
    );
}

export default Password;

                `,
            },
            {
                name: "password-scss",
                id: "password-scss",
                fileName: "Password.scss",
                code: `
// use the css of input.scss
                `,
            },
            {
                name: "icons-jsx",
                id: "icons-jsx",
                fileName: "icons.jsx",
                code: `
export const EyeIcon = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} id="eye"><path fill="#4C0C0C" d="M21.92,11.6C19.9,6.91,16.1,4,12,4S4.1,6.91,2.08,11.6a1,1,0,0,0,0,.8C4.1,17.09,7.9,20,12,20s7.9-2.91,9.92-7.6A1,1,0,0,0,21.92,11.6ZM12,18c-3.17,0-6.17-2.29-7.9-6C5.83,8.29,8.83,6,12,6s6.17,2.29,7.9,6C18.17,15.71,15.17,18,12,18ZM12,8a4,4,0,1,0,4,4A4,4,0,0,0,12,8Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,14Z"></path></svg>

export const CloseEye = () => <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" width={24} height={24} id="eye-slash"><path fill="#4C0C0C" d="M10.94,6.08A6.93,6.93,0,0,1,12,6c3.18,0,6.17,2.29,7.91,6a15.23,15.23,0,0,1-.9,1.64,1,1,0,0,0-.16.55,1,1,0,0,0,1.86.5,15.77,15.77,0,0,0,1.21-2.3,1,1,0,0,0,0-.79C19.9,6.91,16.1,4,12,4a7.77,7.77,0,0,0-1.4.12,1,1,0,1,0,.34,2ZM3.71,2.29A1,1,0,0,0,2.29,3.71L5.39,6.8a14.62,14.62,0,0,0-3.31,4.8,1,1,0,0,0,0,.8C4.1,17.09,7.9,20,12,20a9.26,9.26,0,0,0,5.05-1.54l3.24,3.25a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Zm6.36,9.19,2.45,2.45A1.81,1.81,0,0,1,12,14a2,2,0,0,1-2-2A1.81,1.81,0,0,1,10.07,11.48ZM12,18c-3.18,0-6.17-2.29-7.9-6A12.09,12.09,0,0,1,6.8,8.21L8.57,10A4,4,0,0,0,14,15.43L15.59,17A7.24,7.24,0,0,1,12,18Z"></path></svg>
                `,
                typescript: `
export const EyeIcon = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} id="eye"><path fill="#4C0C0C" d="M21.92,11.6C19.9,6.91,16.1,4,12,4S4.1,6.91,2.08,11.6a1,1,0,0,0,0,.8C4.1,17.09,7.9,20,12,20s7.9-2.91,9.92-7.6A1,1,0,0,0,21.92,11.6ZM12,18c-3.17,0-6.17-2.29-7.9-6C5.83,8.29,8.83,6,12,6s6.17,2.29,7.9,6C18.17,15.71,15.17,18,12,18ZM12,8a4,4,0,1,0,4,4A4,4,0,0,0,12,8Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,14Z"></path></svg>

export const CloseEye = () => <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" width={24} height={24} id="eye-slash"><path fill="#4C0C0C" d="M10.94,6.08A6.93,6.93,0,0,1,12,6c3.18,0,6.17,2.29,7.91,6a15.23,15.23,0,0,1-.9,1.64,1,1,0,0,0-.16.55,1,1,0,0,0,1.86.5,15.77,15.77,0,0,0,1.21-2.3,1,1,0,0,0,0-.79C19.9,6.91,16.1,4,12,4a7.77,7.77,0,0,0-1.4.12,1,1,0,1,0,.34,2ZM3.71,2.29A1,1,0,0,0,2.29,3.71L5.39,6.8a14.62,14.62,0,0,0-3.31,4.8,1,1,0,0,0,0,.8C4.1,17.09,7.9,20,12,20a9.26,9.26,0,0,0,5.05-1.54l3.24,3.25a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Zm6.36,9.19,2.45,2.45A1.81,1.81,0,0,1,12,14a2,2,0,0,1-2-2A1.81,1.81,0,0,1,10.07,11.48ZM12,18c-3.18,0-6.17-2.29-7.9-6A12.09,12.09,0,0,1,6.8,8.21L8.57,10A4,4,0,0,0,14,15.43L15.59,17A7.24,7.24,0,0,1,12,18Z"></path></svg>
                `,
                typescriptFileName: "icons.tsx",
            },
            {
                name: "input-scss",
                id: "input-scss",
                fileName: "Input.scss",
                code: `
@import "../../../../assets/theme/_var.scss";

.custom_input {
    .input_in {

        input,
        textarea {
            height: 4.6rem;
            border-radius: 0.8rem;
            border: 0.1rem solid $border;
            outline: none;
            font-size: 1.6rem;
            font-weight: 400;
            padding: 0 2.4rem;
            transition: 300ms ease-in-out;
            color: $black;
            width: 100%;

            &:focus {
                border-color: $baseclr;
            }
        }

        textarea {
            min-height: 12rem;
            padding-top: 0.8rem;
            resize: none;
        }

        &.error_input {

            input,
            textarea {
                border-color: $redclr;
            }
        }

        &.icon_input {
            position: relative;

            input {
                padding-left: 4rem;
            }

            .input_icon {
                position: absolute;
                top: 50%;
                left: 0.8rem;
                transform: translateY(-50%);
                color: $black;

                svg {
                    path {
                        fill: $black;
                    }
                }
            }
        }

        &.right_icon_input {
            position: relative;

            input {
                padding-right: 4rem;
            }

            .right_input_icon {
                position: absolute;
                top: 50%;
                right: 0.8rem;
                transform: translateY(-50%);
                color: $black;

                svg {
                    path {
                        fill: $black;
                    }
                }
            }
        }
    }
}
                `
            },
            {
                name: "error-javascript",
                id: "error-javascript",
                fileName: "Error.jsx",
                typescriptFileName: "Error.tsx",
                typescript: `
import { forwardRef, HTMLAttributes } from "react";
import { clsx } from "../../../../utils/utils";
import "./Error.scss";

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
                `,
                code: `
import React, { forwardRef } from "react";
import { clsx } from "../../../../utils/utils";
import "./Error.scss";

const Error = forwardRef(({ children, className, ...rest }, ref) => {
    return (
        <span ref={ref} {...rest} className={clsx("custom_error", className)}>
            {children}
        </span>
    );
});

export default Error;
                `
            },
            {
                name: "error-scss",
                id: "error-scss",
                fileName: "Error.scss",
                code: `
@import "../../../../assets/theme/_var.scss";

.custom_error {
    font-size: 1.3rem;
    font-weight: 400;
    color: $redclr;
    display: flex;
    margin-top: 0.3rem;
    align-items: center;
    line-height: 1.8rem;

    @media (max-width: 767px) {
        font-size: 1.2rem;
        line-height: 2rem;
        margin-bottom: 0.5rem;
    }
}
                `,
            },
            {
                name: "label-javascript",
                id: "label-javascript",
                fileName: "Label.jsx",
                typescriptFileName: "Label.tsx",
                typescript: `
import { forwardRef, LabelHTMLAttributes } from "react";
import { clsx } from "../../../../utils/utils";
import "./Label.scss";

type PropTypes = LabelHTMLAttributes<HTMLLabelElement> & {
    required?: boolean,
};

const Label = forwardRef<HTMLLabelElement, PropTypes>(({ children, required, className, ...rest }, ref) => {
    return (
        <label ref={ref} {...rest} className={clsx("custom_label", className)}>
            {children}
            {required ? <sup>*</sup> : null}
        </label>
    );
});

export default Label;
                `,
                code: `
import { forwardRef } from "react";
import { clsx } from "../../../../utils/utils";
import "./Label.scss";

const Label = forwardRef(({ children, required, className, ...rest }, ref) => {
    return (
        <label ref={ref} {...rest} className={clsx("custom_label", className)}>
            {children}
            {required ? <sup>*</sup> : null}
        </label>
    );
});

export default Label;

                `
            },
            {
                name: "label-scss",
                id: "label-scss",
                fileName: "Label.scss",
                code: `
@import "../../../../assets/theme/_var.scss";

.custom_label {
    font-size: 1.4rem;
    font-weight: 400;
    color: $black;
    display: flex;
    margin-bottom: 0.6rem;
    align-items: center;
    line-height: 1.8rem;

    @media (max-width: 767px) {
        font-size: 1.2rem;
        line-height: 2rem;
        margin-bottom: 0.5rem;
    }

    sup {
        top: -0.4rem;
    }
}
                `
            },
            {
                name: "utils-javascript",
                id: "utils-javascript",
                fileName: "utils.js",
                typescriptFileName: "utils.ts",
                typescript: `
type ClassValue = string | number | boolean | undefined | null;

export function clsx(...args: ClassValue[]): string {
    return args
        .filter(Boolean)
        .map(arg => String(arg))
        .join(' ');
}
                `,
                code: `
export function clsx(...args) {
    return args
        .filter(Boolean)
        .join(' ');
}
                `
            },
            {
                name: "_var-scss",
                id: "_var-scss",
                fileName: "_var.scss",
                code: `
$basefont: "Poppins", sans-serif;

$baseclr: #2292fb;
$black: black;
$white: white;
$redclr: #FF0000;

$border: #ddd;
                `,
            },
            {
                name: "index-scss",
                id: "index-scss",
                fileName: "index.scss",
                code: `
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
@import "./assets/theme/_var.scss";

html {
    font-size: 62.5%;
}

body {
    font-family: $basefont;
}

img,
svg,
canvas,
video,
iframe {
    max-width: 100%;
}

p {
    font-size: 1.6rem;
}

a,
span {
    display: inline-block;
    text-decoration: none;
}

h1,
.h1,
h2,
.h2,
h3,
.h3,
h4,
.h4,
h5,
.h5,
h6,
.h6,
p {
    margin-bottom: 0;
}

ul {
    margin: 0;
    padding: 0;
    list-style: none;
}

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

/* Firefox */
input[type="number"] {
    -moz-appearance: textfield;
    appearance: textfield;
}

/* Change the white to any color */
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px $white inset !important;
    -webkit-text-fill-color: $black !important;
    transition: 4000s ease-in-out;
}

.clickable {
    cursor: pointer !important;
}              
`,
            },
            {
                name: "package-json",
                id: "package-json",
                fileName: "package.json",
                code: `
{
    "name": "input",
    "version": "0.1.0",
    "private": true,
    "dependencies": {
        "@testing-library/jest-dom": "^5.17.0",
        "@testing-library/react": "^13.4.0",
        "@testing-library/user-event": "^13.5.0",
        "@types/jest": "^27.5.2",
        "@types/node": "^16.18.119",
        "@types/react": "^18.3.12",
        "@types/react-dom": "^18.3.1",
        "bootstrap": "^5.3.3",
        "react": "^18.3.1",
        "react-bootstrap": "^2.10.5",
        "react-dom": "^18.3.1",
        "react-scripts": "5.0.1",
        "sass": "1.45.0",
        "typescript": "^4.9.5",
        "web-vitals": "^2.1.4"
    },
    "scripts": {
        "start": "react-scripts start",
        "build": "react-scripts build",
        "test": "react-scripts test",
        "eject": "react-scripts eject"
    },
    "eslintConfig": {
        "extends": [
            "react-app",
            "react-app/jest"
        ]
    },
    "browserslist": {
        "production": [
            ">0.2%",
            "not dead",
            "not op_mini all"
        ],
        "development": [
            "last 1 chrome version",
            "last 1 firefox version",
            "last 1 safari version"
        ]
    }
}
                `
            },
            {
                name: "index-javascript",
                id: "index-javascript",
                fileName: "index.jsx",
                typescriptFileName: "index.tsx",
                typescript: `
import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

                `,
                code: `
import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root')
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
`
            },
        ]
    },
    {
        name: "textarea",
        type: "component",
        tags: ["textarea", "input", "error", "clsx", "utils", "global", "typescript", "package.json"],
        id: "textarea-1",
        codes: [
            {
                name: "textarea-javascript",
                id: "textarea-javascript",
                fileName: "Textarea.jsx",
                typescriptFileName: "Textarea.tsx",
                typescript: `
import { TextareaHTMLAttributes } from "react";
import { clsx } from "../../../../utils/utils";
import Error from "../Error/Error";
import Label from "../Label/Label";
import "./Textarea.scss";

type PropTypes = TextareaHTMLAttributes<HTMLTextAreaElement> & {
    label?: string,
    error?: string,
}

const Textarea = ({ name, id, error, className, label, ...rest }: PropTypes) => {
    return (
        <div className={clsx("custom_input", className)}>
            {
                label && <Label htmlFor={name}>{label}</Label>
            }
            <div className={clsx("input_in", error && "error_input")}>
                <textarea
                    {...rest}
                    name={name}
                    id={name}
                />
            </div>
            {
                error && <Error>{error}</Error>
            }
        </div>
    )
}

export default Textarea

                `,
                code: `
import { clsx } from "../../../../utils/utils";
import Error from "../Error/Error";
import Label from "../Label/Label";
import "./Textarea.scss";

const Textarea = ({ name, id, error, className, label, ...rest }) => {
    return (
        <div className={clsx("custom_input", className)}>
            {label && <Label htmlFor={name}>{label}</Label>}
            <div className={clsx("input_in", error && "error_input")}>
                <textarea
                    {...rest}
                    name={name}
                    id={name}
                />
            </div>
            {error && <Error>{error}</Error>}
        </div>
    );
}

export default Textarea;

                `,
            },
            {
                name: "textarea-scss",
                id: "textarea-scss",
                fileName: "Textarea.scss",
                code: `
// use the scss of input.scss
                `
            },
            {
                name: "input-scss",
                id: "input-scss",
                fileName: "Input.scss",
                code: `
@import "../../../../assets/theme/_var.scss";

.custom_input {
    .input_in {

        input,
        textarea {
            height: 4.6rem;
            border-radius: 0.8rem;
            border: 0.1rem solid $border;
            outline: none;
            font-size: 1.6rem;
            font-weight: 400;
            padding: 0 2.4rem;
            transition: 300ms ease-in-out;
            color: $black;
            width: 100%;

            &:focus {
                border-color: $baseclr;
            }
        }

        textarea {
            min-height: 12rem;
            padding-top: 0.8rem;
            resize: none;
        }

        &.error_input {

            input,
            textarea {
                border-color: $redclr;
            }
        }

        &.icon_input {
            position: relative;

            input {
                padding-left: 4rem;
            }

            .input_icon {
                position: absolute;
                top: 50%;
                left: 0.8rem;
                transform: translateY(-50%);
                color: $black;

                svg {
                    path {
                        fill: $black;
                    }
                }
            }
        }

        &.right_icon_input {
            position: relative;

            input {
                padding-right: 4rem;
            }

            .right_input_icon {
                position: absolute;
                top: 50%;
                right: 0.8rem;
                transform: translateY(-50%);
                color: $black;

                svg {
                    path {
                        fill: $black;
                    }
                }
            }
        }
    }
}
                `
            },
            {
                name: "error-javascript",
                id: "error-javascript",
                fileName: "Error.jsx",
                typescriptFileName: "Error.tsx",
                typescript: `
import { forwardRef, HTMLAttributes } from "react";
import { clsx } from "../../../../utils/utils";
import "./Error.scss";

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
                `,
                code: `
import React, { forwardRef } from "react";
import { clsx } from "../../../../utils/utils";
import "./Error.scss";

const Error = forwardRef(({ children, className, ...rest }, ref) => {
    return (
        <span ref={ref} {...rest} className={clsx("custom_error", className)}>
            {children}
        </span>
    );
});

export default Error;
                `
            },
            {
                name: "error-scss",
                id: "error-scss",
                fileName: "Error.scss",
                code: `
@import "../../../../assets/theme/_var.scss";

.custom_error {
    font-size: 1.3rem;
    font-weight: 400;
    color: $redclr;
    display: flex;
    margin-top: 0.3rem;
    align-items: center;
    line-height: 1.8rem;

    @media (max-width: 767px) {
        font-size: 1.2rem;
        line-height: 2rem;
        margin-bottom: 0.5rem;
    }
}
                `,
            },
            {
                name: "label-javascript",
                id: "label-javascript",
                fileName: "Label.jsx",
                typescriptFileName: "Label.tsx",
                typescript: `
import { forwardRef, LabelHTMLAttributes } from "react";
import { clsx } from "../../../../utils/utils";
import "./Label.scss";

type PropTypes = LabelHTMLAttributes<HTMLLabelElement> & {
    required?: boolean,
};

const Label = forwardRef<HTMLLabelElement, PropTypes>(({ children, required, className, ...rest }, ref) => {
    return (
        <label ref={ref} {...rest} className={clsx("custom_label", className)}>
            {children}
            {required ? <sup>*</sup> : null}
        </label>
    );
});

export default Label;
                `,
                code: `
import { forwardRef } from "react";
import { clsx } from "../../../../utils/utils";
import "./Label.scss";

const Label = forwardRef(({ children, required, className, ...rest }, ref) => {
    return (
        <label ref={ref} {...rest} className={clsx("custom_label", className)}>
            {children}
            {required ? <sup>*</sup> : null}
        </label>
    );
});

export default Label;

                `
            },
            {
                name: "label-scss",
                id: "label-scss",
                fileName: "Label.scss",
                code: `
@import "../../../../assets/theme/_var.scss";

.custom_label {
    font-size: 1.4rem;
    font-weight: 400;
    color: $black;
    display: flex;
    margin-bottom: 0.6rem;
    align-items: center;
    line-height: 1.8rem;

    @media (max-width: 767px) {
        font-size: 1.2rem;
        line-height: 2rem;
        margin-bottom: 0.5rem;
    }

    sup {
        top: -0.4rem;
    }
}
                `
            },
            {
                name: "utils-javascript",
                id: "utils-javascript",
                fileName: "utils.js",
                typescriptFileName: "utils.ts",
                typescript: `
type ClassValue = string | number | boolean | undefined | null;

export function clsx(...args: ClassValue[]): string {
    return args
        .filter(Boolean)
        .map(arg => String(arg))
        .join(' ');
}
                `,
                code: `
export function clsx(...args) {
    return args
        .filter(Boolean)
        .join(' ');
}
                `
            },
            {
                name: "_var-scss",
                id: "_var-scss",
                fileName: "_var.scss",
                code: `
$basefont: "Poppins", sans-serif;

$baseclr: #2292fb;
$black: black;
$white: white;
$redclr: #FF0000;

$border: #ddd;
                `,
            },
            {
                name: "index-scss",
                id: "index-scss",
                fileName: "index.scss",
                code: `
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
@import "./assets/theme/_var.scss";

html {
    font-size: 62.5%;
}

body {
    font-family: $basefont;
}

img,
svg,
canvas,
video,
iframe {
    max-width: 100%;
}

p {
    font-size: 1.6rem;
}

a,
span {
    display: inline-block;
    text-decoration: none;
}

h1,
.h1,
h2,
.h2,
h3,
.h3,
h4,
.h4,
h5,
.h5,
h6,
.h6,
p {
    margin-bottom: 0;
}

ul {
    margin: 0;
    padding: 0;
    list-style: none;
}

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

/* Firefox */
input[type="number"] {
    -moz-appearance: textfield;
    appearance: textfield;
}

/* Change the white to any color */
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px $white inset !important;
    -webkit-text-fill-color: $black !important;
    transition: 4000s ease-in-out;
}

.clickable {
    cursor: pointer !important;
}              
`,
            },
            {
                name: "package-json",
                id: "package-json",
                fileName: "package.json",
                code: `
{
    "name": "input",
    "version": "0.1.0",
    "private": true,
    "dependencies": {
        "@testing-library/jest-dom": "^5.17.0",
        "@testing-library/react": "^13.4.0",
        "@testing-library/user-event": "^13.5.0",
        "@types/jest": "^27.5.2",
        "@types/node": "^16.18.119",
        "@types/react": "^18.3.12",
        "@types/react-dom": "^18.3.1",
        "bootstrap": "^5.3.3",
        "react": "^18.3.1",
        "react-bootstrap": "^2.10.5",
        "react-dom": "^18.3.1",
        "react-scripts": "5.0.1",
        "sass": "1.45.0",
        "typescript": "^4.9.5",
        "web-vitals": "^2.1.4"
    },
    "scripts": {
        "start": "react-scripts start",
        "build": "react-scripts build",
        "test": "react-scripts test",
        "eject": "react-scripts eject"
    },
    "eslintConfig": {
        "extends": [
            "react-app",
            "react-app/jest"
        ]
    },
    "browserslist": {
        "production": [
            ">0.2%",
            "not dead",
            "not op_mini all"
        ],
        "development": [
            "last 1 chrome version",
            "last 1 firefox version",
            "last 1 safari version"
        ]
    }
}
                `
            },
            {
                name: "index-javascript",
                id: "index-javascript",
                fileName: "index.jsx",
                typescriptFileName: "index.tsx",
                typescript: `
import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

                `,
                code: `
import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root')
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
`
            },
        ],
    },
    {
        name: "label",
        type: "component",
        tags: ["label", "input", "clsx", "utils", "global", "typescript", "package.json"],
        id: "label-1",
        codes: [

            {
                name: "label-javascript",
                id: "label-javascript",
                fileName: "Label.jsx",
                typescriptFileName: "Label.tsx",
                typescript: `
import { forwardRef, LabelHTMLAttributes } from "react";
import { clsx } from "../../../../utils/utils";
import "./Label.scss";

type PropTypes = LabelHTMLAttributes<HTMLLabelElement> & {
    required?: boolean,
};

const Label = forwardRef<HTMLLabelElement, PropTypes>(({ children, required, className, ...rest }, ref) => {
    return (
        <label ref={ref} {...rest} className={clsx("custom_label", className)}>
            {children}
            {required ? <sup>*</sup> : null}
        </label>
    );
});

export default Label;
                `,
                code: `
import { forwardRef } from "react";
import { clsx } from "../../../../utils/utils";
import "./Label.scss";

const Label = forwardRef(({ children, required, className, ...rest }, ref) => {
    return (
        <label ref={ref} {...rest} className={clsx("custom_label", className)}>
            {children}
            {required ? <sup>*</sup> : null}
        </label>
    );
});

export default Label;

                `
            },
            {
                name: "label-scss",
                id: "label-scss",
                fileName: "Label.scss",
                code: `
@import "../../../../assets/theme/_var.scss";

.custom_label {
    font-size: 1.4rem;
    font-weight: 400;
    color: $black;
    display: flex;
    margin-bottom: 0.6rem;
    align-items: center;
    line-height: 1.8rem;

    @media (max-width: 767px) {
        font-size: 1.2rem;
        line-height: 2rem;
        margin-bottom: 0.5rem;
    }

    sup {
        top: -0.4rem;
    }
}
                `
            },
            {
                name: "utils-javascript",
                id: "utils-javascript",
                fileName: "utils.js",
                typescriptFileName: "utils.ts",
                typescript: `
type ClassValue = string | number | boolean | undefined | null;

export function clsx(...args: ClassValue[]): string {
    return args
        .filter(Boolean)
        .map(arg => String(arg))
        .join(' ');
}
                `,
                code: `
export function clsx(...args) {
    return args
        .filter(Boolean)
        .join(' ');
}
                `
            },
            {
                name: "_var-scss",
                id: "_var-scss",
                fileName: "_var.scss",
                code: `
$basefont: "Poppins", sans-serif;

$baseclr: #2292fb;
$black: black;
$white: white;
$redclr: #FF0000;

$border: #ddd;
                `,
            },
            {
                name: "index-scss",
                id: "index-scss",
                fileName: "index.scss",
                code: `
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
@import "./assets/theme/_var.scss";

html {
    font-size: 62.5%;
}

body {
    font-family: $basefont;
}

img,
svg,
canvas,
video,
iframe {
    max-width: 100%;
}

p {
    font-size: 1.6rem;
}

a,
span {
    display: inline-block;
    text-decoration: none;
}

h1,
.h1,
h2,
.h2,
h3,
.h3,
h4,
.h4,
h5,
.h5,
h6,
.h6,
p {
    margin-bottom: 0;
}

ul {
    margin: 0;
    padding: 0;
    list-style: none;
}

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

/* Firefox */
input[type="number"] {
    -moz-appearance: textfield;
    appearance: textfield;
}

/* Change the white to any color */
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px $white inset !important;
    -webkit-text-fill-color: $black !important;
    transition: 4000s ease-in-out;
}

.clickable {
    cursor: pointer !important;
}              
`,
            },
            {
                name: "package-json",
                id: "package-json",
                fileName: "package.json",
                code: `
{
    "name": "input",
    "version": "0.1.0",
    "private": true,
    "dependencies": {
        "@testing-library/jest-dom": "^5.17.0",
        "@testing-library/react": "^13.4.0",
        "@testing-library/user-event": "^13.5.0",
        "@types/jest": "^27.5.2",
        "@types/node": "^16.18.119",
        "@types/react": "^18.3.12",
        "@types/react-dom": "^18.3.1",
        "bootstrap": "^5.3.3",
        "react": "^18.3.1",
        "react-bootstrap": "^2.10.5",
        "react-dom": "^18.3.1",
        "react-scripts": "5.0.1",
        "sass": "1.45.0",
        "typescript": "^4.9.5",
        "web-vitals": "^2.1.4"
    },
    "scripts": {
        "start": "react-scripts start",
        "build": "react-scripts build",
        "test": "react-scripts test",
        "eject": "react-scripts eject"
    },
    "eslintConfig": {
        "extends": [
            "react-app",
            "react-app/jest"
        ]
    },
    "browserslist": {
        "production": [
            ">0.2%",
            "not dead",
            "not op_mini all"
        ],
        "development": [
            "last 1 chrome version",
            "last 1 firefox version",
            "last 1 safari version"
        ]
    }
}
                `
            },
            {
                name: "index-javascript",
                id: "index-javascript",
                fileName: "index.jsx",
                typescriptFileName: "index.tsx",
                typescript: `
import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

                `,
                code: `
import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root')
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
`
            },
        ]
    },
    {
        name: "error",
        type: "component",
        tags: ["input", "error", "clsx", "utils", "global", "typescript", "package.json"],
        id: "error-1",
        codes: [
            {
                name: "error-javascript",
                id: "error-javascript",
                fileName: "Error.jsx",
                typescriptFileName: "Error.tsx",
                typescript: `
import { forwardRef, HTMLAttributes } from "react";
import { clsx } from "../../../../utils/utils";
import "./Error.scss";

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
                `,
                code: `
import React, { forwardRef } from "react";
import { clsx } from "../../../../utils/utils";
import "./Error.scss";

const Error = forwardRef(({ children, className, ...rest }, ref) => {
    return (
        <span ref={ref} {...rest} className={clsx("custom_error", className)}>
            {children}
        </span>
    );
});

export default Error;
                `
            },
            {
                name: "error-scss",
                id: "error-scss",
                fileName: "Error.scss",
                code: `
@import "../../../../assets/theme/_var.scss";

.custom_error {
    font-size: 1.3rem;
    font-weight: 400;
    color: $redclr;
    display: flex;
    margin-top: 0.3rem;
    align-items: center;
    line-height: 1.8rem;

    @media (max-width: 767px) {
        font-size: 1.2rem;
        line-height: 2rem;
        margin-bottom: 0.5rem;
    }
}
                `,
            },
            {
                name: "utils-javascript",
                id: "utils-javascript",
                fileName: "utils.js",
                typescriptFileName: "utils.ts",
                typescript: `
type ClassValue = string | number | boolean | undefined | null;

export function clsx(...args: ClassValue[]): string {
    return args
        .filter(Boolean)
        .map(arg => String(arg))
        .join(' ');
}
                `,
                code: `
export function clsx(...args) {
    return args
        .filter(Boolean)
        .join(' ');
}
                `
            },
            {
                name: "_var-scss",
                id: "_var-scss",
                fileName: "_var.scss",
                code: `
$basefont: "Poppins", sans-serif;

$baseclr: #2292fb;
$black: black;
$white: white;
$redclr: #FF0000;

$border: #ddd;
                `,
            },
            {
                name: "index-scss",
                id: "index-scss",
                fileName: "index.scss",
                code: `
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
@import "./assets/theme/_var.scss";

html {
    font-size: 62.5%;
}

body {
    font-family: $basefont;
}

img,
svg,
canvas,
video,
iframe {
    max-width: 100%;
}

p {
    font-size: 1.6rem;
}

a,
span {
    display: inline-block;
    text-decoration: none;
}

h1,
.h1,
h2,
.h2,
h3,
.h3,
h4,
.h4,
h5,
.h5,
h6,
.h6,
p {
    margin-bottom: 0;
}

ul {
    margin: 0;
    padding: 0;
    list-style: none;
}

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

/* Firefox */
input[type="number"] {
    -moz-appearance: textfield;
    appearance: textfield;
}

/* Change the white to any color */
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px $white inset !important;
    -webkit-text-fill-color: $black !important;
    transition: 4000s ease-in-out;
}

.clickable {
    cursor: pointer !important;
}              
`,
            },
            {
                name: "package-json",
                id: "package-json",
                fileName: "package.json",
                code: `
{
    "name": "input",
    "version": "0.1.0",
    "private": true,
    "dependencies": {
        "@testing-library/jest-dom": "^5.17.0",
        "@testing-library/react": "^13.4.0",
        "@testing-library/user-event": "^13.5.0",
        "@types/jest": "^27.5.2",
        "@types/node": "^16.18.119",
        "@types/react": "^18.3.12",
        "@types/react-dom": "^18.3.1",
        "bootstrap": "^5.3.3",
        "react": "^18.3.1",
        "react-bootstrap": "^2.10.5",
        "react-dom": "^18.3.1",
        "react-scripts": "5.0.1",
        "sass": "1.45.0",
        "typescript": "^4.9.5",
        "web-vitals": "^2.1.4"
    },
    "scripts": {
        "start": "react-scripts start",
        "build": "react-scripts build",
        "test": "react-scripts test",
        "eject": "react-scripts eject"
    },
    "eslintConfig": {
        "extends": [
            "react-app",
            "react-app/jest"
        ]
    },
    "browserslist": {
        "production": [
            ">0.2%",
            "not dead",
            "not op_mini all"
        ],
        "development": [
            "last 1 chrome version",
            "last 1 firefox version",
            "last 1 safari version"
        ]
    }
}
                `
            },
            {
                name: "index-javascript",
                id: "index-javascript",
                fileName: "index.jsx",
                typescriptFileName: "index.tsx",
                typescript: `
import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

                `,
                code: `
import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root')
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
`
            },
        ],
    },
    {
        name: "clsx",
        type: "utils",
        tags: ["clsx", "classnames", "classes", "utils", "typescript", "javascript", "functions", "helper"],
        id: "clsx-1",
        codes: [
            {
                name: "clsx",
                id: "clsx",
                fileName: "clsx.js",
                typescriptFileName: "clsx.ts",
                typescript: `
type ClassValue = string | number | boolean | undefined | null;

export function clsx(...args: ClassValue[]): string {
    return args
        .filter(Boolean)
        .map(arg => String(arg))
        .join(' ');
}
                `,
                code: `
export function clsx(...args) {
    return args
        .filter(Boolean)
        .map(arg => String(arg))
        .join(' ');
}
                `,
            }
        ]
    },
    {
        name: "error-page",
        type: "page",
        tags: ["error", "error page", "404", "page", "typescript", "javascript", "components"],
        id: "error-page-1",
        codes: [
            {
                name: "error-page",
                id: "error-page",
                fileName: "ErrorPage.jsx",
                typescriptFileName: "ErrorPage.tsx",
                code: `
import { Col, Container, Row } from "react-bootstrap";
import { Link, useRouteError } from "react-router-dom";
import { ROUTES } from "../../../utils/constants";
import "./ErrorPage.scss";
import { RightArrow } from "../../../assets/icons/icons";

const Errorpage = () => {
    const error = useRouteError();
    if (!error) {
        return null;
    }

    return (
        <section className="error_page">
            <Container>
                <Row className="justify-content-center">
                    <Col md={12}>
                        <h3>Error {error.stack?.split(":")[0]}</h3>
                        <h1>{error.message}</h1>
                        <p>{error.stack}</p>
                        <Link to={ROUTES.HOME}>Go Home <RightArrow /></Link>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Errorpage;
`,
                typescript: `
import { Col, Container, Row } from "react-bootstrap";
import { Link, useRouteError } from "react-router-dom";
import { ROUTES } from "../../../utils/constants";
import "./ErrorPage.scss";
import { RightArrow } from "../../../assets/icons/icons";

interface RouterError {
    message: string;
    stack?: string;
}
const Errorpage = () => {
    const error = useRouteError() as RouterError | undefined;
    if (!error) {
        return null;
    }
    return (
        <>
            <section className={"error_page"}>
                <Container>
                    <Row className="justify-content-center">
                        <Col md={12}>
                            <h3>Error  {error.stack?.split(":")[0]}</h3>
                            <h1>{error.message}</h1>
                            <p>{error.stack}</p>
                            <Link to={ROUTES.HOME}>Go Home <RightArrow /></Link>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Errorpage

                `,
            },
            {
                name: "error-scss",
                id: "error-scss",
                fileName: "ErrorPage.scss",
                code: `
@import "../../../assets/theme/_var.scss";

.error_page {
    min-height: 100dvh;
    display: flex;
    align-items: center;
    padding: 4rem 0;

    h3 {
        border-bottom: 2px solid #3F4144;
        padding-bottom: 0.4rem;
        font-size: 1.6rem;
        display: inline-flex;
    }

    h1 {
        font-size: 7.4rem;
        font-weight: 700;
        margin: 1rem 0;

        @media (max-width: 1479px) {
            font-size: 6rem;
        }

        @media (max-width: 1399px) {
            font-size: 5rem;
        }

        @media (max-width: 1199px) {
            font-size: 4rem;
        }

        @media (max-width: 767px) {
            font-size: 3rem;
            margin: 1.6rem 0;
        }
    }

    p {
        font-size: 2rem;
        opacity: 0.6;

        @media (max-width: 1479px) {
            font-size: 1.8rem;
        }

        @media (max-width: 1199px) {
            font-size: 1.6rem;
        }

        @media (max-width: 767px) {
            font-size: 1.4rem;
        }
    }

    a {
        display: inline-flex;
        align-items: center;
        font-size: 1.6rem;
        margin-top: 3rem;
        color: #3F4144;

        @media (max-width: 767px) {
            font-size: 1.4rem;
            margin-top: 2rem;
        }

        svg {
            width: 1.4rem;
            height: auto;
            margin-left: 1rem;
            transition: 200ms ease-in-out;

            path {
                stroke: #3F4144;
            }
        }

        &:hover {
            svg {
                transform: translateX(0.6rem);
            }
        }
    }
}
                `,
            },
            {
                name: "_var-scss",
                id: "_var-scss",
                fileName: "_var.scss",
                code: `
$basefont: "Poppins", sans-serif;

$baseclr: #2292fb;
$black: black;
$white: white;
$redclr: #FF0000;

$border: #ddd;
                `,
            },
            {
                name: "application-javascript",
                id: "application-javascript",
                fileName: "Application.jsx",
                typescriptFileName: "Application.tsx",
                code: `
import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ROUTES } from './utils/constants'
import Errorpage from './components/pages/ErrorPage/Errorpage'

const Application = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            ErrorBoundary: Errorpage,
        },
    ])
    return (
        <RouterProvider router={router} />
    )
}

export default Application
                `,
                typescript: `
import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ROUTES } from './utils/constants'
import Errorpage from './components/pages/ErrorPage/Errorpage'

const Application = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            ErrorBoundary: Errorpage,
        },
    ])
    return (
        <RouterProvider router={router} />
    )
}

export default Application
                `
            },
            {
                name: "index-scss",
                id: "index-scss",
                fileName: "index.scss",
                code: `
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
@import "./assets/theme/_var.scss";

html {
    font-size: 62.5%;
}

body {
    font-family: $basefont;
}

img,
svg,
canvas,
video,
iframe {
    max-width: 100%;
}

p {
    font-size: 1.6rem;
}

a,
span {
    display: inline-block;
    text-decoration: none;
}

h1,
.h1,
h2,
.h2,
h3,
.h3,
h4,
.h4,
h5,
.h5,
h6,
.h6,
p {
    margin-bottom: 0;
}

ul {
    margin: 0;
    padding: 0;
    list-style: none;
}

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

/* Firefox */
input[type="number"] {
    -moz-appearance: textfield;
    appearance: textfield;
}

/* Change the white to any color */
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px $white inset !important;
    -webkit-text-fill-color: $black !important;
    transition: 4000s ease-in-out;
}

.clickable {
    cursor: pointer !important;
}              
`,
            },
            {
                name: "package-json",
                id: "package-json",
                fileName: "package.json",
                code: `
{
    "name": "input",
    "version": "0.1.0",
    "private": true,
    "dependencies": {
        "@testing-library/jest-dom": "^5.17.0",
        "@testing-library/react": "^13.4.0",
        "@testing-library/user-event": "^13.5.0",
        "@types/jest": "^27.5.2",
        "@types/node": "^16.18.119",
        "@types/react": "^18.3.12",
        "@types/react-dom": "^18.3.1",
        "bootstrap": "^5.3.3",
        "react": "^18.3.1",
        "react-bootstrap": "^2.10.5",
        "react-dom": "^18.3.1",
        "react-scripts": "5.0.1",
        "sass": "1.45.0",
        "typescript": "^4.9.5",
        "web-vitals": "^2.1.4"
    },
    "scripts": {
        "start": "react-scripts start",
        "build": "react-scripts build",
        "test": "react-scripts test",
        "eject": "react-scripts eject"
    },
    "eslintConfig": {
        "extends": [
            "react-app",
            "react-app/jest"
        ]
    },
    "browserslist": {
        "production": [
            ">0.2%",
            "not dead",
            "not op_mini all"
        ],
        "development": [
            "last 1 chrome version",
            "last 1 firefox version",
            "last 1 safari version"
        ]
    }
}
                `
            },
            {
                name: "index-javascript",
                id: "index-javascript",
                fileName: "index.jsx",
                typescriptFileName: "index.tsx",
                typescript: `
import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

                `,
                code: `
import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root')
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
`
            },
            {
                name: "icons",
                id: "icons",
                fileName: "icons.jsx",
                typescriptFileName: "icons.tsx",
                typescript: `
export const RightArrow = () =>
    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="15" viewBox="0 0 17 15" fill="none">
        <path
            d="M9.99669 1.71777L15.83 7.7178M15.83 7.7178L9.99669 13.7178M15.83 7.7178H1.82999"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
`,
                code: `
export const RightArrow = () =>
    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="15" viewBox="0 0 17 15" fill="none">
        <path
            d="M9.99669 1.71777L15.83 7.7178M15.83 7.7178L9.99669 13.7178M15.83 7.7178H1.82999"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
`,
            },
            {
                name: "constants",
                id: "constants",
                fileName: "constants.js",
                typescriptFileName: "constants.ts",
                typescript: `
export const ROUTES = {
    HOME: '/',
}
                `,
                code: `
export const ROUTES = {
    HOME: '/',
}`,
            },
        ]
    },
    {
        name: "page-not-found",
        type: "page",
        tags: ["page not found", "pagenotfound", "page-not-found", "error", "error page", "404", "page", "typescript", "javascript", "components"],
        id: "page-not-found-page-1",
        codes: [
            {
                name: "page-not-found",
                id: "page-not-found",
                fileName: "PageNotFound.jsx",
                typescriptFileName: "PageNotFound.tsx",
                code: `
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../utils/constants";
import { RightArrow } from "../../../assets/icons/icons";

const PageNotFound = () => {
    return (
        <>
            <section className={"error_page"}>
                <Container>
                    <Row className="justify-content-center">
                        <Col md={6}>
                            <h3>Error 404</h3>
                            <h1>Sorry !!! <br />There's No Page.</h1>
                            <p>The page you are looking for is not available for the moment!!! <br /> You can go home or please try again later.</p>
                            <Link to={ROUTES.HOME}>Go Home <RightArrow /></Link>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default PageNotFound
`,
                typescript: `
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../utils/constants";
import { RightArrow } from "../../../assets/icons/icons";

const PageNotFound = () => {
    return (
        <>
            <section className={"error_page"}>
                <Container>
                    <Row className="justify-content-center">
                        <Col md={6}>
                            <h3>Error 404</h3>
                            <h1>Sorry !!! <br />There's No Page.</h1>
                            <p>The page you are looking for is not available for the moment!!! <br /> You can go home or please try again later.</p>
                            <Link to={ROUTES.HOME}>Go Home <RightArrow /></Link>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default PageNotFound
                `,
            },
            {
                name: "page-not-found-scss",
                id: "page-not-found-scss",
                fileName: "PageNotFound.scss",
                code: `
// use css of error page
                `
            },
            {
                name: "error-scss",
                id: "error-scss",
                fileName: "ErrorPage.scss",
                code: `
@import "../../../assets/theme/_var.scss";

.error_page {
    min-height: 100dvh;
    display: flex;
    align-items: center;
    padding: 4rem 0;

    h3 {
        border-bottom: 2px solid #3F4144;
        padding-bottom: 0.4rem;
        font-size: 1.6rem;
        display: inline-flex;
    }

    h1 {
        font-size: 7.4rem;
        font-weight: 700;
        margin: 1rem 0;

        @media (max-width: 1479px) {
            font-size: 6rem;
        }

        @media (max-width: 1399px) {
            font-size: 5rem;
        }

        @media (max-width: 1199px) {
            font-size: 4rem;
        }

        @media (max-width: 767px) {
            font-size: 3rem;
            margin: 1.6rem 0;
        }
    }

    p {
        font-size: 2rem;
        opacity: 0.6;

        @media (max-width: 1479px) {
            font-size: 1.8rem;
        }

        @media (max-width: 1199px) {
            font-size: 1.6rem;
        }

        @media (max-width: 767px) {
            font-size: 1.4rem;
        }
    }

    a {
        display: inline-flex;
        align-items: center;
        font-size: 1.6rem;
        margin-top: 3rem;
        color: #3F4144;

        @media (max-width: 767px) {
            font-size: 1.4rem;
            margin-top: 2rem;
        }

        svg {
            width: 1.4rem;
            height: auto;
            margin-left: 1rem;
            transition: 200ms ease-in-out;

            path {
                stroke: #3F4144;
            }
        }

        &:hover {
            svg {
                transform: translateX(0.6rem);
            }
        }
    }
}
                `,
            },
            {
                name: "_var-scss",
                id: "_var-scss",
                fileName: "_var.scss",
                code: `
$basefont: "Poppins", sans-serif;

$baseclr: #2292fb;
$black: black;
$white: white;
$redclr: #FF0000;

$border: #ddd;
                `,
            },
            {
                name: "application-javascript",
                id: "application-javascript",
                fileName: "Application.jsx",
                typescriptFileName: "Application.tsx",
                code: `
import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ROUTES } from './utils/constants'
import PageNotFound from './components/pages/PageNotFound/PageNotFound'

const Application = () => {
    const router = createBrowserRouter([
        {
            path: "*",
            element: <PageNotFound />,
        },
    ])
    return (
        <RouterProvider router={router} />
    )
}

export default Application
                `,
                typescript: `
import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ROUTES } from './utils/constants'
import Errorpage from './components/pages/ErrorPage/Errorpage'

const Application = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            ErrorBoundary: Errorpage,
        },
    ])
    return (
        <RouterProvider router={router} />
    )
}

export default Application
                `
            },
            {
                name: "index-scss",
                id: "index-scss",
                fileName: "index.scss",
                code: `
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
@import "./assets/theme/_var.scss";

html {
    font-size: 62.5%;
}

body {
    font-family: $basefont;
}

img,
svg,
canvas,
video,
iframe {
    max-width: 100%;
}

p {
    font-size: 1.6rem;
}

a,
span {
    display: inline-block;
    text-decoration: none;
}

h1,
.h1,
h2,
.h2,
h3,
.h3,
h4,
.h4,
h5,
.h5,
h6,
.h6,
p {
    margin-bottom: 0;
}

ul {
    margin: 0;
    padding: 0;
    list-style: none;
}

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

/* Firefox */
input[type="number"] {
    -moz-appearance: textfield;
    appearance: textfield;
}

/* Change the white to any color */
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px $white inset !important;
    -webkit-text-fill-color: $black !important;
    transition: 4000s ease-in-out;
}

.clickable {
    cursor: pointer !important;
}              
`,
            },
            {
                name: "package-json",
                id: "package-json",
                fileName: "package.json",
                code: `
{
    "name": "input",
    "version": "0.1.0",
    "private": true,
    "dependencies": {
        "@testing-library/jest-dom": "^5.17.0",
        "@testing-library/react": "^13.4.0",
        "@testing-library/user-event": "^13.5.0",
        "@types/jest": "^27.5.2",
        "@types/node": "^16.18.119",
        "@types/react": "^18.3.12",
        "@types/react-dom": "^18.3.1",
        "bootstrap": "^5.3.3",
        "react": "^18.3.1",
        "react-bootstrap": "^2.10.5",
        "react-dom": "^18.3.1",
        "react-scripts": "5.0.1",
        "sass": "1.45.0",
        "typescript": "^4.9.5",
        "web-vitals": "^2.1.4"
    },
    "scripts": {
        "start": "react-scripts start",
        "build": "react-scripts build",
        "test": "react-scripts test",
        "eject": "react-scripts eject"
    },
    "eslintConfig": {
        "extends": [
            "react-app",
            "react-app/jest"
        ]
    },
    "browserslist": {
        "production": [
            ">0.2%",
            "not dead",
            "not op_mini all"
        ],
        "development": [
            "last 1 chrome version",
            "last 1 firefox version",
            "last 1 safari version"
        ]
    }
}
                `
            },
            {
                name: "index-javascript",
                id: "index-javascript",
                fileName: "index.jsx",
                typescriptFileName: "index.tsx",
                typescript: `
import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

                `,
                code: `
import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root')
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
`
            },
            {
                name: "icons",
                id: "icons",
                fileName: "icons.jsx",
                typescriptFileName: "icons.tsx",
                typescript: `
export const RightArrow = () =>
    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="15" viewBox="0 0 17 15" fill="none">
        <path
            d="M9.99669 1.71777L15.83 7.7178M15.83 7.7178L9.99669 13.7178M15.83 7.7178H1.82999"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
`,
                code: `
export const RightArrow = () =>
    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="15" viewBox="0 0 17 15" fill="none">
        <path
            d="M9.99669 1.71777L15.83 7.7178M15.83 7.7178L9.99669 13.7178M15.83 7.7178H1.82999"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
`,
            },
            {
                name: "constants",
                id: "constants",
                fileName: "constants.js",
                typescriptFileName: "constants.ts",
                typescript: `
export const ROUTES = {
    HOME: '/',
}
                `,
                code: `
export const ROUTES = {
    HOME: '/',
}`,
            },
        ]
    },
]
