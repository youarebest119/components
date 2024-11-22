import { useFormik } from "formik";
import "./AddItemsForm.scss";
import { Col, Row } from "react-bootstrap";
import Input from "../../../common/form/Input/Input";
import Textarea from "../../../common/form/Textarea/Textarea";
import Button from "../../../common/Button/Button";
import { useAppDispatch } from "../../../../app/hooks";
import { setLoading } from "../../../../redux/slices/loading.slice";
import { apiPost } from "../../../../utils/axios";
import { API } from "../../../../utils/constants";
import { codeType } from "../Homepage";

type PropTypes = {
    id?: string,
    componentId?: string,
    handleGetCodes: (id: string) => Promise<codeType[] | undefined>,
}

const AddItemsForm = ({ id, handleGetCodes, componentId }: PropTypes) => {
    const dispatch = useAppDispatch();
    const formik = useFormik({
        initialValues: {
            fileName: "",
            name: "",
            code: "",
            typescriptFileName: "",
            description: "",
            typescript: "",
        },
        onSubmit: async (values) => {
            if (componentId) {
                dispatch(setLoading({ button: true, }))
                try {
                    let response = await apiPost({
                        url: API.CREATE_CODE.replace(":id", componentId),
                        data: {
                            code: values,
                        },
                        showToast: true,
                    })
                    handleGetCodes(componentId);
                } catch (error) {
                    console.log(error);
                } finally {
                    dispatch(setLoading({ button: false, }))
                }
            }
        }
    })

    return (
        <form onSubmit={formik.handleSubmit}>
            <Row>
                <Col md={4}>
                    <Input
                        name="name"
                        placeholder='Name'
                        onChange={formik.handleChange}
                        error={formik.touched.name && formik.errors.name ? formik.errors.name : undefined}
                    />
                </Col>
                <Col md={4}>
                    <Input
                        name="fileName"
                        placeholder='FileName'
                        onChange={formik.handleChange}
                        error={formik.touched.fileName && formik.errors.fileName ? formik.errors.fileName : undefined}
                    />
                </Col>
                <Col md={4}>
                    <Input
                        name="typescriptFileName"
                        placeholder='TypescriptFileName'
                        onChange={formik.handleChange}
                        error={formik.touched.typescriptFileName && formik.errors.typescriptFileName ? formik.errors.typescriptFileName : undefined}
                    />
                </Col>
                <Col md={4}>
                    <Textarea
                        name="description"
                        placeholder='Description'
                        onChange={formik.handleChange}
                        error={formik.touched.description && formik.errors.description ? formik.errors.description : undefined}
                    />
                </Col>
                <Col md={4}>
                    <Textarea
                        name="code"
                        placeholder='Code'
                        onChange={formik.handleChange}
                        error={formik.touched.code && formik.errors.code ? formik.errors.code : undefined}
                    />
                </Col>
                <Col md={4}>
                    <Textarea
                        name="typescript"
                        placeholder='Typescript Code'
                        onChange={formik.handleChange}
                        error={formik.touched.typescript && formik.errors.typescript ? formik.errors.typescript : undefined}
                    />
                </Col>
                <Col md={4}>
                    <Button
                        type="submit"
                        fluid
                        text="Save"
                    />
                </Col>
            </Row>
        </form>
    )
}

export default AddItemsForm
