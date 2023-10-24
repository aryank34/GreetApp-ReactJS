import { useState } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { Message } from "../components/Message";

export const Greet = () => {
    //let message = "ghjgfx"; //Welcome FirstName + LastName

    //const names = {};
    const [names, setNames] = useState({});
    const firstNameKey = "first";
    const lastNameKey = "last";
    //let fullName='';

    // HOOKS
    //all hooks start with 'use' keyword, hooks are functions (Logic, Api, State, etc)

    const [message, setMessage] = useState(""); //update the state (re-rendering)


    const receiveDataFromChild = (data, key) => {
        //names[key] = data;
        const temp = {};
        temp[key] = data;
        setNames({...names, ...temp});
        //console.log(names);
    }

    const initCap = (value) => value.charAt(0).toUpperCase() + value.substring(1).toLowerCase();
        //aryan - Aryan, arYan - Aryan

    const showFullName = () => {
        setMessage("Welcome "+initCap(names[firstNameKey])+" "+initCap(names[lastNameKey])); //Re-rendering happens here
        console.log('Full name is ',message);
    }

    const clearAll = () => {
        console.log('clear all call');
        const temp = {};
        temp[firstNameKey] = "";
        temp[lastNameKey] = "";
        setNames(temp);
        setMessage("");
    }

    return (<div>
        <Message msg="Greet App" myclass="info"/> 
        <Input val = {names[firstNameKey]} fn = {receiveDataFromChild} inputKey = {firstNameKey} lbl='First Name' placeholder='Type First Name'/>
        <Input val = {names[lastNameKey]} fn = {receiveDataFromChild} inputKey = {lastNameKey} lbl='Last Name' placeholder='Type Last Name'/>
        <Button fn = {showFullName} msg="Greet" cssclass="btn btn-primary me-2"/>
        <Button fn = {clearAll} msg="Clear All" cssclass="btn btn-secondary"/>
        {/* truthy condition */}
        {message && <Message msg={message} myclass="success"/>} 
    </div>);
}