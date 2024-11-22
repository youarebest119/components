import { useFormik } from "formik";
import "./AddItemsForm.scss";
import { Col, Row } from "react-bootstrap";
import Input from "../../../common/form/Input/Input";
import Textarea from "../../../common/form/Textarea/Textarea";
import Button from "../../../common/Button/Button";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { setLoading } from "../../../../redux/slices/loading.slice";
import { apiPost, apiPut } from "../../../../utils/axios";
import { API } from "../../../../utils/constants";
import { codeType } from "../Homepage";
import { useEffect } from "react";

type PropTypes = {
    id?: string,
    componentId?: string,
    handleGetCodes: (id: string) => Promise<codeType[] | undefined>,
    activeTab?: codeType,
    editCode: boolean,
    handleDismissEdit: () => void,
}

const AddItemsForm = ({ id, editCode, handleDismissEdit, activeTab, handleGetCodes, componentId }: PropTypes) => {
    const dispatch = useAppDispatch();
    const { button: buttonLoading } = useAppSelector(state => state.loading);
    const formik = useFormik({
        initialValues: {
            fileName: "",
            name: "",
            code: "",
            typescriptFileName: "",
            description: "",
            typescript: "",
        },
        enableReinitialize: true,
        onSubmit: async (values) => {
            if (componentId) {
                dispatch(setLoading({ button: true, }))
                try {
                    if(editCode) {
                        await apiPut({
                            url: API.EDIT_CODE.replace(":id", activeTab?._id || "").replace(":productId", componentId || ""),
                            data: {
                                code: values
                            },
                            showToast: true,
                        });
                        handleGetCodes(componentId);
                    }
                    else {
                        await apiPost({
                            url: API.CREATE_CODE.replace(":id", componentId),
                            data: {
                                code: values,
                            },
                            showToast: true,
                        })
                        handleGetCodes(componentId);
                        formik.resetForm();
                    }
                } catch (error) {
                    console.log(error);
                } finally {
                    dispatch(setLoading({ button: false, }))
                }
            }
        }
    })
 
    useEffect(() => {
        if (editCode && activeTab) {
            const { fileName, name, code, typescriptFileName, description, typescript } = activeTab;
            formik.setValues({ fileName, name, code, typescriptFileName, description, typescript })
        }
    }, [editCode, activeTab])

    return (
        <form onSubmit={formik.handleSubmit}>
            <Row>
                <Col md={4}>
                    <Input
                        name="name"
                        value={formik.values.name}
                        placeholder='Name'
                        onChange={formik.handleChange}
                        error={formik.touched.name && formik.errors.name ? formik.errors.name : undefined}
                    />
                </Col>
                <Col md={4}>
                    <Input
                        name="fileName"
                        value={formik.values.fileName}
                        placeholder='FileName'
                        onChange={formik.handleChange}
                        error={formik.touched.fileName && formik.errors.fileName ? formik.errors.fileName : undefined}
                    />
                </Col>
                <Col md={4}>
                    <Input
                        name="typescriptFileName"
                        value={formik.values.typescriptFileName}
                        placeholder='TypescriptFileName'
                        onChange={formik.handleChange}
                        error={formik.touched.typescriptFileName && formik.errors.typescriptFileName ? formik.errors.typescriptFileName : undefined}
                    />
                </Col>
                <Col md={4}>
                    <Textarea
                        name="description"
                        value={formik.values.description}
                        placeholder='Description'
                        onChange={formik.handleChange}
                        error={formik.touched.description && formik.errors.description ? formik.errors.description : undefined}
                    />
                </Col>
                <Col md={4}>
                    <Textarea
                        name="code"
                        value={formik.values.code}
                        placeholder='Code'
                        onChange={formik.handleChange}
                        error={formik.touched.code && formik.errors.code ? formik.errors.code : undefined}
                    />
                </Col>
                <Col md={4}>
                    <Textarea
                        name="typescript"
                        value={formik.values.typescript}
                        placeholder='Typescript Code'
                        onChange={formik.handleChange}
                        error={formik.touched.typescript && formik.errors.typescript ? formik.errors.typescript : undefined}
                    />
                </Col>
                <Col md={4}>
                    <Button
                        type="submit"
                        fluid
                        text={editCode ? "Update" : "Save"}
                    />
                </Col>
                {
                    editCode && !buttonLoading &&
                    <Col md={4}>
                        <Button
                            fluid
                            onClick={handleDismissEdit}
                            className="danger_btn"
                            text="Dismiss"
                        />
                    </Col>
                }
            </Row>
        </form>
    )
}

export default AddItemsForm
