import React from "react";

// Declaring Image File Types

declare module "*.svg";
declare module "*.jpeg";
declare module "*.png";

// Declare React Types

declare namespace ReactTypes {
    type RFE = React.FormEvent;
    type RCE = React.ChangeEvent<HTMLInputElement>;
    type TextArea_RCE = React.ChangeEvent<HTMLTextAreaElement>;
}

declare namespace ReduxTypes{
    
}

// Declare Interfaces

export interface IMeal{
    name: string,
    description: string,
    price: string
}

// Declare AxiosTypes

declare namespace AxiosTypes{

    // Examples:

    // interface ChatLoginTypes{
    //     date: string
    // }

    // interface UserAxiosTypes{
    //     age: number
    // }

    type anyToStopErrors = any; // this type will be used to stop any errors for now
    
    interface UserLoginTypes{
        message: string
    }

    interface UserRegisterTypes{
        message: string
    }

}