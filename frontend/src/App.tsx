import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import CopyBtn from './components/common/CopyBtn/CopyBtn';
import { data as com, dataTypes, removeOuterEmptyLines } from './utils/components';


const App = () => {
    const [search, setSearch] = useState("");
    const [data, setData] = useState(com);
    const [active, setActive] = useState<dataTypes>();
    const [activeTab, setActiveTab] = useState<dataTypes["codes"][0]>();
    const [toggle, setToggle] = useState(false);
    const [isTypescript, setIsTypescript] = useState(false);

    const handleClick = (item: dataTypes) => {
        setActive(item);
        setActiveTab(item.codes[0])
    }

    const handleToggle = () => {
        if (document.body.clientWidth < 1200) {
            setToggle(prev => !prev);
        }
    }

    useEffect(() => {
        setData(
            com.filter((item) =>
                item.tags.some(tag => tag.toLowerCase().includes(search.toLowerCase()))
            )
        )
    }, [search])

    useEffect(() => {
        setActive(com[0]);
        setActiveTab(com[0].codes[0])
    }, [])
    return (
        <div className="app_ui">
            <Container>
                <div className="app_ui_in">
                    <div className={`app_ui_sidebar_overlay ${toggle ? "active" : ""}`} onClick={handleToggle} />
                    <div className={`app_ui_sidebar ${toggle ? "active" : ""}`}>
                        <div className="app_ui_sidebar_search">
                            <input onChange={(e) => setSearch(e.target.value)} type="search" placeholder="Search" />
                        </div>
                        <div className="app_ui_sidebar_list">
                            <ul>
                                {
                                    data
                                        .sort((a, b) => a.name.localeCompare(b.name))
                                        .map((item, index) => {
                                            return (
                                                <li key={index}>
                                                    <button onClick={() => { handleClick(item); handleToggle(); }} type="button" className={item.id === active?.id ? "active" : ""}>
                                                        {item.name}
                                                    </button>
                                                </li>
                                            )
                                        })
                                }
                            </ul>
                        </div>
                    </div>
                    <div className="app_ui_content">
                        <div className="app_ui_content_header">
                            <button type="button" className={`toggle_btn d-xl-none ${toggle ? "active" : ""}`} onClick={handleToggle}>
                                {Array.from({ length: 3 }).map((_, index) => <span key={index}></span>)}
                            </button>
                            <div className="show_ts">
                                <input type="checkbox" onChange={e => setIsTypescript(e.target.checked)} id="show-ts" />
                                <label htmlFor='show-ts'>Typescript</label>
                            </div>
                        </div>
                        <div className="code_box">
                            <div className="code_box_nav">
                                <ul>
                                    {
                                        active?.codes.map((item) => {
                                            return (
                                                <li key={item.id}>
                                                    <button
                                                        onClick={() => {
                                                            setActiveTab(item)
                                                        }}
                                                        type="button"
                                                        className={activeTab && (activeTab.id === item.id ? "active" : "")}
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
                                        <CopyBtn
                                            text={removeOuterEmptyLines((isTypescript && activeTab.typescript) ? activeTab.typescript : activeTab.code)}
                                        />
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
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default App
