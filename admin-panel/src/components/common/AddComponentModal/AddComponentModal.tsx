import { useFormik } from "formik";
import { Modal } from "react-bootstrap";
import * as Yup from "yup";
import Error from "../form/Error/Error";
import Input from "../form/Input/Input";
import Select from "../form/Select/Select";
import Button from "../Button/Button";

type PropTypes = {
    show: boolean,
    handleClose: () => void,
}

const AddComponentModal = ({ show, handleClose }: PropTypes) => {
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
        },
        validationSchema: Yup.object({
            name: Yup.string().required("Component name is required"),
            tags: Yup.array().of(Yup.string()).min(1, "At least one tag is required"),
            type: Yup.string().required("Please select a type"),
        }),
        onSubmit: (values) => {
            console.log("Form values:", values);
        },
    });

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
                formik.setFieldValue("tags", [...formik.values.tags, newTag]);
                formik.errors.tags = "";
            }
            formik.setFieldValue("tagsInput", ""); // Clear input
        } else {
            formik.handleChange(e);
        }
    };

    // Function to remove a tag from the tags array
    const handleRemoveTag = (tagToRemove: string) => {
        const newTags = formik.values.tags.filter(tag => tag !== tagToRemove);
        formik.setFieldValue("tags", newTags);
    };

    return (
        <Modal show={show} onHide={handleClose} centered className="add_component_modal">
            <Modal.Header closeButton>
                <Modal.Title>Add Component</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={formik.handleSubmit}>
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
                                <button onClick={() => handleRemoveTag(tag)} className="ms-2">x</button>
                            </li>
                        ))}
                    </ul>
                    <Select
                        options={options}
                        onChange={handleTypeChange}
                        onBlur={() => formik.setFieldTouched("type", true)}
                    />
                    {formik.touched.type && formik.errors.type ? (
                        <Error>{formik.errors.type}</Error>
                    ) : null}

                    <Button type="submit" fluid className="mt-5">Submit</Button>
                </form>
            </Modal.Body>
        </Modal>
    );
};

export default AddComponentModal;
