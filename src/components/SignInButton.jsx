/*import React from "react";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../authConfig";*/
/*import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

import { useNavigate } from 'react-router-dom';

*//**
 * Renders a drop down button with child buttons for logging in with a popup or redirect
 *//*
export const SignInButton = () => {
    const { instance } = useMsal();
   
  

    const handleLogin = (loginType) => {
        if (loginType === "popup") {
            instance.loginPopup(loginRequest).catch(e => {
               
                console.log(e);
             
            });
        } else if (loginType === "redirect") {
            instance.loginRedirect(loginRequest).catch(e => {
                
                console.log(e);
            });
        }
    }
    return (
        <DropdownButton variant="secondary" className="ml-auto" drop="start" title="Sign In">
            <Dropdown.Item as="button" onClick={() => handleLogin("popup")}>Sign in using Popup</Dropdown.Item>
            <Dropdown.Item as="button" onClick={() => handleLogin("redirect")}>Sign in using Redirect</Dropdown.Item>
        </DropdownButton>
    )
}*/

import React from "react";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../authConfig";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import { useNavigate } from 'react-router-dom';
/*
*
 * Renders a drop down button with child buttons for logging in with a popup or redirect
 */
export const SignInButton = () => {
    const { instance } = useMsal();
    const navigate = useNavigate();

    const handleLogin = (loginType) => {
        if (loginType === "popup") {
            instance.loginPopup(loginRequest).then(response => {
                console.log(response);
                navigate("/home");  // Navigate to /home after successful login
            }).catch(e => {
                console.log(e);
            });
        } else if (loginType === "redirect") {
            instance.loginRedirect(loginRequest).then(response => {
                console.log(response);
                navigate("/home");  // Navigate to /home after successful login
            }).catch(e => {
                console.log(e);
            });
        }
    }

    return (
        <DropdownButton variant="secondary" className="ml-auto" drop="start" title="Sign In">
            <Dropdown.Item as="button" onClick={() => handleLogin("popup")}>Sign in using Popup</Dropdown.Item>
            <Dropdown.Item as="button" onClick={() => handleLogin("redirect")}>Sign in using Redirect</Dropdown.Item>
        </DropdownButton>
    )
}

