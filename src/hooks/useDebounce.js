import { useState, useEffect } from "react";

import PropTypes from 'prop-types';

const useDebounce = (value, delay) => {
    const [debounceValue, setDebounceValue] = useState(value)
    useEffect(()=>{
        const handlerTimeout = setTimeout(()=>
            setDebounceValue(value)
        , delay)

        return ()=>clearTimeout(handlerTimeout)


    }, [value])
    return debounceValue
};

useDebounce.propTypes = {
    
};

export default useDebounce;