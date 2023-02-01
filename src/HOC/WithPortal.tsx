import React from 'react'
import { createPortal } from 'react-dom';


const WithPortal = (WrappedComponent: React.FC, idElement:String) => {
    return (props: any) => {
      console.log(WrappedComponent, idElement, props)
        const el = document.getElementById(idElement as string) as HTMLElement;
        return createPortal(<WrappedComponent {...props} />, el);
    }
}


export default WithPortal