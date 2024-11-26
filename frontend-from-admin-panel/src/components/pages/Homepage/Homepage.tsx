import { useCallback, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { setLoading } from "../../../redux/slices/loading.slice";
import { apiGet } from "../../../utils/axios";
import { API } from "../../../utils/constants";
import { removeOuterEmptyLines } from "../../../utils/utils";
import CopyBtn from "../../common/CopyBtn/CopyBtn";
import Spinner from "../../common/Spinner/Spinner";
import "./Homepage.scss";
import Sidebar from "./Sidebar/Sidebar";
import moment from "moment";

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
    const [data, setData] = useState([] as componentType[]);

    const { getCodes: getCodesLoading, getComponent: getComponentLoading } = useAppSelector(state => state.loading);

    const handleSidebarItemClick = async (item: componentType) => {
        dispatch(setLoading({ getComponent: true }));
        try {
            let response = await apiGet<{ data: componentType }>({ url: API.GET_COMPONENT.replace(":id", item._id) });
            setActive(response.data.data);
            setActiveTab(response.data.data.codes[0])
        } catch (error) {

        } finally {
            dispatch(setLoading({ getComponent: false }));
        }
    }

    const fetchComponents = useCallback(async () => {
        dispatch(setLoading({ components: true, }))
        try {
            let response = await apiGet<{ data: componentType[] }>({ url: API.GET_COMPONENTS })
            setData(response.data.data);
        } catch (error) {
            console.log(error);
        } finally {
            dispatch(setLoading({ components: false, }))
        }
    }, [dispatch])

    const handleToggle = () => {
        if (document.body.clientWidth < 1200) {
            setToggle(prev => !prev);
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
    }, [fetchComponents])

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
                                            </div>
                                        </div>
                                        <div className="code_box">
                                            <div className="code_box_nav">
                                                <ul>
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
                                                </ul>
                                            </div>
                                            <div className="code_content">
                                                        <pre>
                                                            {
                                                                activeTab &&
                                                                <div className="code_content_action">
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
                                            </div>
                                        </div >
                                    </>
                                :
                                "no record found"
                        }
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Homepage
