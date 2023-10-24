export const Message = ({msg, myclass}) => { //function receives the object as a structure, we have to destructure it to use the property
    
    const cssclass = `alert alert-${myclass} text-center`;

    return (<h3 className={cssclass}>{msg}</h3>);
}