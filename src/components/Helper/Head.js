import React from 'react'

const Head = (props) => {

    React.useEffect(() => {
        document.title = props.title + ' | Business Monitoring'
    }, [props])
    return <></>
}

export default Head;
