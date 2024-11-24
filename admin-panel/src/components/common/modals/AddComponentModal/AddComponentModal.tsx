import { useFormik } from "formik";
import * as Yup from "yup";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { setLoading } from "../../../../redux/slices/loading.slice";
import { apiGet, apiPost, apiPut } from "../../../../utils/axios";
import { API } from "../../../../utils/constants";
import Button from "../../Button/Button";
import Error from "../../form/Error/Error";
import Input from "../../form/Input/Input";
import Select from "../../form/Select/Select";
import Textarea from "../../form/Textarea/Textarea";
import Modal from "../Modal/Modal";
import { useEffect } from "react";
import Spinner from "../../Spinner/Spinner";
import { componentType } from "../../../pages/Homepage/Homepage";
import { RemoveICon } from "../../../../assets/icons/icons";

type PropTypes = {
    show: boolean,
    handleClose: () => void,
    fetchComponents: () => void,
    id?: string,
}

// type uploadedType = {
//     image: {
//        fieldname: string,
//        originalname: string,
//        encoding: string,
//        mimetype: string,
//        destination: string,
//        filename: string,
//        path: string,
//        size: number,
//     },
// }

const AddComponentModal = ({ id, fetchComponents, show, handleClose }: PropTypes) => {
    const dispatch = useAppDispatch();
    const { component: componentLoading, uploading } = useAppSelector(state => state.loading);
    const options = [
        { value: "page", label: "Pages" },
        { value: "component", label: "Components" },
        { value: "utils", label: "Utils" },
        { value: "hooks", label: "React Hooks" },
    ];

    // Formik setup
    const formik = useFormik({
        initialValues: {
            name: "",
            tags: [] as string[],
            type: "",
            tagsInput: "", // Temporary field for capturing tag input
            description: "",
            image: "",
        },
        validationSchema: Yup.object({
            name: Yup.string().required("Component name is required"),
            tags: Yup.array().of(Yup.string()).min(1, "At least one tag is required"),
            type: Yup.string().required("Please select a type"),
            description: Yup.string().required("Description is required"),
        }),
        enableReinitialize: true,
        onSubmit: async (values) => {
            dispatch(setLoading({ button: true, }));
            try {
                if (id) {
                    await apiPut({
                        url: API.EDIT_COMPONENT.replace(":id", id),
                        data: values,
                        showToast: true,
                    })
                    handleClose();
                    fetchComponents();
                } else {
                    await apiPost({
                        url: API.CREATE_COMPONENT,
                        data: {
                            ...values,
                        },
                        showToast: true,
                    })
                    handleClose();
                    fetchComponents();
                }
            } catch (error) {
                console.log(error);
            } finally {
                dispatch(setLoading({ button: false, }));
            }
        },
    });
    const handleUpload = async (file: File) => {
        dispatch(setLoading({ uploading: true, }));
        try {
            const formData = new FormData();
            formData.append("image", file);
            const response = await apiPost<{
                image: {
                    fieldname: string,
                    originalname: string,
                    encoding: string,
                    mimetype: string,
                    destination: string,
                    filename: string,
                    path: string,
                    size: number,
                },
            }>({
                url: API.UPLOAD_IMAGE,
                data: formData,
                showToast: true,
            });
            // formik.setFieldValue("image", response.data);
            formik.setFieldValue("image", response.data.image.filename);
        } catch (error) {
            console.log(error);
        } finally {
            dispatch(setLoading({ uploading: false, }));
        }

    }
    // Handle change for Select component (for "type")
    const handleTypeChange = (selectedOption: any) => {
        formik.setFieldValue("type", selectedOption ? selectedOption.value : "");
    };

    // Handle change for Input tags (space-separated)
    const handleTagsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (value.includes(" ")) {
            const newTag = value.trim();
            if (newTag && !formik.values.tags.includes(newTag)) {
                formik.setFieldValue("tags", [...formik.values.tags, newTag], true); // Update state and mark it for validation
            }
            formik.setFieldValue("tagsInput", ""); // Clear input
        } else {
            formik.handleChange(e); // Update the input field
        }
    };

    // Function to remove a tag from the tags array
    const handleRemoveTag = (tagToRemove: string) => {
        formik.setFieldValue(
            "tags",
            formik.values.tags.filter((tag) => tag !== tagToRemove)
        );
    };

    const fetchComponent = async () => {
        if (id) {
            dispatch(setLoading({ component: true, }))
            try {
                let response = await apiGet<{ data: componentType }>({
                    url: API.GET_COMPONENT.replace(":id", id),
                })
                let { name, tags, description, type, image } = response.data.data;
                formik.setValues({ name, tags, description, type, tagsInput: "", image: image || "", });
            } catch (error) {
                console.log(error);
            } finally {
                dispatch(setLoading({ component: false, }))
            }
        }
    }
    useEffect(() => {
        fetchComponent();
    }, [id])

    return (
        <Modal show={show} onHide={handleClose} className="add_component_modal" title="Add Component">
            {
                componentLoading ?
                    <div className="d-flex justify-content-center py-5">
                        <Spinner />
                    </div>
                    :
                    <form onSubmit={formik.handleSubmit}>
                        {
                            formik.values.image ?
                                <div className="uploaded_input">
                                    <button type="button" onClick={() => formik.setFieldValue("image", "")} className="remove_btn"><RemoveICon /></button>
                                    <img src={`http://localhost:4006/${formik.values.image}`} alt="uploaded" />
                                </div>
                                :
                                uploading ?
                                    <Spinner />
                                    :
                                    <input onChange={e => {
                                        if (e.target.files) {
                                            handleUpload(e.target.files[0])
                                        }
                                    }}
                                        type="file"
                                        name="image"
                                        placeholder="Upload image"
                                        className="mb-3"
                                        accept="image/*"
                                    />
                        }
                        <Input
                            name="name"
                            placeholder="Name of component"
                            className="mb-3"
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.name && formik.errors.name ? formik.errors.name : ""}
                        />
                        <Input
                            name="tagsInput"
                            placeholder="Press space to add tags"
                            className="mb-3"
                            value={formik.values.tagsInput}
                            onChange={handleTagsChange}
                            error={formik.touched.tags && formik.errors.tags ? formik.errors.tags : ""}
                        />
                        <ul>
                            {formik.values.tags.map((tag, index) => (
                                <li key={index}>
                                    <p>{tag}</p>
                                    <button type="button" onClick={() => handleRemoveTag(tag)} className="ms-2">x</button>
                                </li>
                            ))}
                        </ul>
                        <Textarea
                            name="description"
                            placeholder="Description for component"
                            className="mb-3"
                            value={formik.values.description}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.description && formik.errors.description ? formik.errors.description : ""}
                        />
                        <Select
                            options={options}
                            onChange={handleTypeChange}
                            onBlur={() => formik.setFieldTouched("type", true)}
                            defaultValue={options.find((option) => option.value === formik.values.type)}
                        />
                        {formik.touched.type && formik.errors.type ? (
                            <Error>{formik.errors.type}</Error>
                        ) : null}

                        <Button type="submit" fluid className="mt-5">Submit</Button>
                    </form>
            }
        </Modal>
    );
};

export default AddComponentModal;
