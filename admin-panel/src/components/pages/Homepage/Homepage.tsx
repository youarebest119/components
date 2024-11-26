import { useEffect, useState } from "react";
import moment from 'moment';
import { Container } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { EditIcon, PlusIcon, RemoveICon, SettingsIcon } from "../../../assets/icons/icons";
import { setLoading } from "../../../redux/slices/loading.slice";
import { apiDelete, apiGet, apiPut } from "../../../utils/axios";
import { API } from "../../../utils/constants";
import { removeOuterEmptyLines } from "../../../utils/utils";
import CopyBtn from "../../common/CopyBtn/CopyBtn";
import Switch from "../../common/form/Switch/Switch";
import Spinner from "../../common/Spinner/Spinner";
import AddItemsForm from "./AddItemsForm/AddItemsForm";
import "./Homepage.scss";
import Sidebar from "./Sidebar/Sidebar";
import AddComponentModal from "../../common/modals/AddComponentModal/AddComponentModal";

export type codeType = {
    name: string,
    date: string,
    fileName: string,
    typescriptFileName: string,
    description: string,
    typescript: string,
    code: string,
    _id: string,
}
export type componentType = {
    _id: string,
    type: string,
    name: string,
    description: string,
    tags: string[],
    show: boolean,
    codes: codeType[],
    createdAt: string,
    updatedAt: string,
    image?: string,
}

const Homepage = () => {
    const dispatch = useAppDispatch();
    const [active, setActive] = useState<componentType>();
    const [activeTab, setActiveTab] = useState<componentType["codes"][0]>();
    const [toggle, setToggle] = useState(false);
    const [isTypescript, setIsTypescript] = useState(false);
    const [showAddPage, setShowAddPage] = useState(false);
    const [data, setData] = useState([] as componentType[]);
    const [showSettings, setShowSettings] = useState(false);
    const [editCode, setEditCode] = useState(false);

    const { button: butttonLoading, showHideComponent: showHideComponentLoading, getCodes: getCodesLoading, getComponent: getComponentLoading } = useAppSelector(state => state.loading);

    const handleSidebarItemClick = async (item: componentType) => {
        dispatch(setLoading({ getComponent: true }));
        try {
            let response = await apiGet<{ data: componentType }>({ url: API.GET_COMPONENT.replace(":id", item._id) });
            setActive(response.data.data);
            setActiveTab(response.data.data.codes[0])
            setShowAddPage(false);
            setEditCode(() => false);
        } catch (error) {

        } finally {
            dispatch(setLoading({ getComponent: false }));
        }
    }

    const fetchComponents = async () => {
        dispatch(setLoading({ components: true, }))
        try {
            let response = await apiGet<{ data: componentType[] }>({ url: API.GET_COMPONENTS })
            setData(response.data.data);
            setShowAddPage(() => false);
            setEditCode(() => false);
        } catch (error) {
            console.log(error);
        } finally {
            dispatch(setLoading({ components: false, }))
        }
    }

    const handleShowHide = async (checked: boolean) => {
        dispatch(setLoading({ showHideComponent: true, }))
        try {
            await apiPut({ url: API.EDIT_COMPONENT.replace(":id", active?._id || ""), data: { ...active, show: checked }, showToast: true, })
            if (active) {
                setActive(({ ...active, show: checked }));
            }
        } catch (error) {
            console.log(error);
        }
        finally {
            dispatch(setLoading({ showHideComponent: false, }))
        }
    }

    const handleGetCodes = async (id: string): Promise<codeType[] | undefined> => {
        dispatch(setLoading({ getCodes: true, }))
        try {
            let response = await apiGet<{ data: codeType[] }>({ url: API.GET_CODES.replace(":id", id), });
            if (active) {
                setActive(prev => ({ ...active, codes: response.data.data }))
                setActiveTab(response.data.data[0]);
            }
            // let newPrev = active;
            // newPrev!.codes = response.data.data;
            // setActive(newPrev);
            // console.log({ active });
            // console.log({ codes: response.data });
            return response.data.data;
        } catch (error) {
            console.log(error);
        } finally {
            dispatch(setLoading({ getCodes: false, }))
        }
    }

    const handleToggle = () => {
        if (document.body.clientWidth < 1200) {
            setToggle(prev => !prev);
        }
    }

    const handleRemoveComponent = async (id?: string) => {
        if (id) {
            dispatch(setLoading({ button: true, }))
            try {
                await apiDelete({ url: API.DELETE_COMPONENT.replace(":id", id), showToast: true, });
                fetchComponents();
            } catch (error) {
                console.log(error);
            } finally {
                dispatch(setLoading({ button: false, }))
            }
        }
    }


    const handleRemoveCode = async (id?: string) => {
        if (id && active?._id) {
            dispatch(setLoading({ button: true, }))
            try {
                await apiDelete({ url: API.DELETE_CODE.replace(":productId", active?._id || "").replace(":id", id), showToast: true, });
                let response = await handleGetCodes(active?._id);
                if (response) {
                    setActiveTab(response[0]);
                }
            } catch (error) {
                console.log(error);
            } finally {
                dispatch(setLoading({ button: false, }))
            }
        }
    }

    useEffect(() => {
        if (data[0]) {
            setActive(data.sort((a, b) => a.name.localeCompare(b.name))[0]);
            setActiveTab(data[0].codes[0])
        }
    }, [data])

    // fetch data
    useEffect(() => {
        fetchComponents();
    }, [])

    return (
        <div className="app_ui">
            <Container>
                <div className="app_ui_in">
                    <Sidebar data={data} fetchComponents={fetchComponents} active={active} handleClick={handleSidebarItemClick} toggle={toggle} handleToggle={handleToggle} />
                    <div className="app_ui_content">
                        {
                            data.length > 0 ?
                                getComponentLoading ?
                                    <div className="app_ui_content_loader">
                                        <Spinner />
                                    </div>
                                    :
                                    <>
                                        {
                                            active &&
                                            <div className="app_content_dates">
                                                    <ul>
                                                        <li>Update <b>{moment(active.updatedAt).fromNow()}</b> </li>
                                                        {/* <li>Created <b>{moment(active.updatedAt).fromNow()}</b> </li> */}
                                                </ul>
                                            </div>
                                        }
                                        <div className="app_ui_content_header">
                                            <button type="button" className={`toggle_btn d-xl-none ${toggle ? "active" : ""}`} onClick={handleToggle}>
                                                {Array.from({ length: 3 }).map((_, index) => <span key={index}></span>)}
                                            </button>
                                            <div className="app_ui_content_header_right">
                                                <div className="show_ts">
                                                    <input type="checkbox" checked={isTypescript} onChange={e => setIsTypescript(e.target.checked)} id="show-ts" />
                                                    <label htmlFor='show-ts'>Typescript</label>
                                                </div>
                                                {
                                                    showHideComponentLoading ?
                                                        <Spinner />
                                                        :
                                                        <Switch
                                                            checked={active?.show}
                                                            onChange={e => handleShowHide(e.target.checked)}
                                                            // defaultChecked={active?.show} 
                                                            name="show" label="Show" />
                                                }
                                            </div>
                                        </div>
                                        <div className="code_box">
                                            <div className="code_box_nav">
                                                <ul>
                                                    <li>
                                                        <button
                                                            type="button"
                                                            className={`add_btn ${showAddPage ? "active" : ""}`}
                                                            onClick={() => {
                                                                setShowAddPage(true);
                                                                setActiveTab(undefined);
                                                                setEditCode(false)
                                                            }}>
                                                            <PlusIcon /> add
                                                        </button>
                                                    </li>
                                                    {
                                                        getCodesLoading ?
                                                            <Spinner />
                                                            :
                                                            active?.codes.map((item) => {
                                                                return (
                                                                    <li key={item._id}>
                                                                        <button
                                                                            onClick={() => {
                                                                                setActiveTab(item);
                                                                                setShowAddPage(() => false);
                                                                            }}
                                                                            type="button"
                                                                            className={activeTab && (activeTab._id === item._id ? "active" : "")}
                                                                        >
                                                                            {(isTypescript && item.typescriptFileName) ? item.typescriptFileName : item.fileName}
                                                                        </button>
                                                                    </li>
                                                                )
                                                            })
                                                    }
                                                    <li className="settings_btn_wrap ms-auto">
                                                        <button
                                                            type="button"
                                                            className={`settings_btn`}
                                                            onClick={() => handleRemoveComponent(active?._id)}
                                                        >
                                                            {butttonLoading ? <Spinner /> : <RemoveICon />}
                                                        </button>
                                                    </li>
                                                    <li className="settings_btn_wrap">
                                                        <button
                                                            type="button"
                                                            className={`settings_btn`}
                                                            onClick={() => setShowSettings(true)}
                                                        >
                                                            <SettingsIcon />
                                                        </button>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="code_content">
                                                {
                                                    (showAddPage || editCode) ?
                                                        <AddItemsForm handleDismissEdit={() => { setEditCode(false); setShowAddPage(false) }} editCode={editCode} activeTab={activeTab} handleGetCodes={handleGetCodes} componentId={active?._id} />
                                                        :
                                                        <pre>
                                                            {
                                                                activeTab &&
                                                                <div className="code_content_action">
                                                                    <button type="button" onClick={() => handleRemoveCode(activeTab._id)}> {butttonLoading ? <Spinner /> : <RemoveICon />}</button>
                                                                    <button type="button" onClick={() => setEditCode(true)}><EditIcon /></button>
                                                                    <CopyBtn
                                                                        text={removeOuterEmptyLines((isTypescript && activeTab.typescript) ? activeTab.typescript : activeTab.code)}
                                                                    />
                                                                </div>
                                                            }
                                                            <ul>
                                                                {
                                                                    activeTab &&
                                                                    (removeOuterEmptyLines((isTypescript && activeTab.typescript) ? activeTab.typescript : activeTab.code))
                                                                        .split("\n").map((item, index) => {
                                                                            return (
                                                                                <li key={index}>
                                                                                    {item}
                                                                                </li>
                                                                            )
                                                                        })
                                                                }
                                                            </ul>
                                                        </pre>
                                                }
                                            </div>
                                        </div >
                                    </>
                                :
                                "no record found"
                        }
                    </div>
                </div>
                {showSettings && <AddComponentModal id={active?._id} fetchComponents={fetchComponents} show={showSettings} handleClose={() => setShowSettings(false)} />}
            </Container>
        </div>
    )
}

export default Homepage
