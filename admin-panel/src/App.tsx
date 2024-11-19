import { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CopyBtn from './components/common/CopyBtn/CopyBtn';
import { data as com, dataTypes } from './utils/components';
import { removeOuterEmptyLines } from './utils/utils';
import { EditIcon, PlusIcon } from './assets/icons/icons';
import AddComponentModal from './components/common/AddComponentModal/AddComponentModal';
import Input from './components/common/form/Input/Input';


const App = () => {
    const [search, setSearch] = useState("");
    const [show, setShow] = useState(false);
    const [data, setData] = useState(com);
    const [active, setActive] = useState<dataTypes>();
    const [activeTab, setActiveTab] = useState<dataTypes["codes"][0]>();
    const [toggle, setToggle] = useState(false);
    const [isTypescript, setIsTypescript] = useState(false);
    const [showAddPage, setShowAddPage] = useState(false);

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
                                <li>
                                    <button type="button" className='add_btn' onClick={() => setShow(true)}>
                                        <PlusIcon />
                                    </button>
                                    {show && <AddComponentModal show={show} handleClose={() => setShow(false)} />}
                                </li>
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
                                    <li>
                                        <button type="button" className={`add_btn ${showAddPage ? "active" : ""}`} onClick={() => {
                                            setShowAddPage(true);
                                            setActiveTab(undefined);
                                        }}>
                                            <PlusIcon /> add
                                        </button>
                                    </li>
                                    {
                                        active?.codes.map((item) => {
                                            return (
                                                <li key={item.id}>
                                                    <button
                                                        onClick={() => {
                                                            setActiveTab(item);
                                                            setShowAddPage(() => false);
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
                                {
                                    showAddPage ?
                                        <>
                                            <form>
                                                <Row>
                                                    <Col md={4}>
                                                        <Input
                                                            name="name"
                                                            placeholder='Name'
                                                        />
                                                    </Col>
                                                    <Col md={4}>
                                                        <Input
                                                            name="fileName"
                                                            placeholder='FileName'
                                                        />
                                                    </Col>
                                                    <Col md={4}>
                                                        <Input
                                                            name="typescriptFileName"
                                                            placeholder='TypescriptFileName'
                                                        />
                                                    </Col>
                                                    {/* <Col md={4}>
                                                        <Textarea
                                                            name="typescriptFileName"
                                                            placeholder='TypescriptFileName'
                                                        />
                                                    </Col> */}
                                                </Row>
                                            </form>
                                        </>
                                        :
                                        <pre>
                                            {
                                                activeTab &&
                                                <div className="code_content_action">
                                                    <button type="button"><EditIcon /></button>
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
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default App
