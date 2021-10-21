import React from 'react'
import { useParams } from 'react-router-dom';
import { HookUseContext, HookUseEffect, HookUseReducer, HookUseState } from './hooks';

const Page = () => {
    const { slug } = useParams();
    console.log("slug>> ", slug);
    return (
        <div>
            <h1>This is Page for {slug}</h1>
            {slug === "useState" ? <HookUseState /> : null}
            {slug === "useEffect" ? <HookUseEffect /> : null}
            {slug === "useContext" ? <HookUseContext /> : null}
            {slug === "useReducer" ? <HookUseReducer /> : null}
            {slug === "useCallback" ? <HookUseState /> : null}
            {slug === "useMemo" ? <HookUseState /> : null}
            {slug === "useRef" ? <HookUseState /> : null}
            {slug === "useImperativeHandle" ? <HookUseState /> : null}
            {slug === "useLayoutEffect" ? <HookUseState /> : null}
            {slug === "useDebugValue" ? <HookUseState /> : null}
        </div>
    );
}

export default Page;