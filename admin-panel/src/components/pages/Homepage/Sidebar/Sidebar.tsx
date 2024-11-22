import { useEffect, useState } from "react";
import { PlusIcon } from "../../../../assets/icons/icons";
import AddComponentModal from "../../../common/modals/AddComponentModal/AddComponentModal";
import "./Sidebar.scss";
import { componentType } from "../Homepage";
import { useAppSelector } from "../../../../app/hooks";
import Spinner from "../../../common/Spinner/Spinner";

type PropTypes = {
    toggle: boolean,
    handleToggle: () => void,
    data: componentType[],
    handleClick: (item: componentType) => void,
    active?: componentType,
    fetchComponents: () => void,
}

const Sidebar = ({ toggle, fetchComponents, active, handleClick, handleToggle, data: com }: PropTypes) => {
    const [search, setSearch] = useState("");
    const [data, setData] = useState(com);
    const [show, setShow] = useState(false);
    const { components: componentsLoading } = useAppSelector(state => state.loading);

    useEffect(() => {
        setData(
            com.filter((item) =>
                item.tags.some(tag => tag.toLowerCase().includes(search.toLowerCase())) || item.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
            )
        )
    }, [search, com])

    return (
        <>
            <div className={`app_ui_sidebar_overlay ${toggle ? "active" : ""}`} onClick={handleToggle} />
            <div className={`app_ui_sidebar ${toggle ? "active" : ""}`}>
                <div className="app_ui_sidebar_search">
                    <input onChange={(e) => setSearch(e.target.value)} type="search" placeholder="Search" />
                </div>
                <div className="app_ui_sidebar_list">
                    <ul>
                        {
                            componentsLoading ?
                                <li>
                                    <button type="button" className="text-center">
                                        <Spinner />
                                    </button>
                                </li>
                                :
                                data.sort((a, b) => a.name.localeCompare(b.name))
                                    .map((item, index) => {
                                        return (
                                            <li key={index}>
                                                <button title={item.name} onClick={() => { handleClick(item); handleToggle(); }} type="button" className={item._id === active?._id ? "active" : ""}>
                                                    {item.name}
                                                </button>
                                            </li>
                                        )
                                    })
                        }
                        <li>
                            <button type="button" className='add_btn' onClick={() => setShow(true)}>
                                <PlusIcon />
                            </button>
                            {show && <AddComponentModal fetchComponents={fetchComponents} show={show} handleClose={() => setShow(false)} />}
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Sidebar
