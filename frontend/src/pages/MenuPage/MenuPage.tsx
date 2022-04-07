import React from "react";
import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";
import { IMeal, ReactTypes } from "../../SourceTypes";
import { Header } from "../../components/Header/Header";
import { Category } from "../../components/Menu/Category/Category";
import "./MenuPage.css";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Categories } from "../../utils/menu-utils/Categories";
import { Meal } from "../../components/Menu/Meal/Meal";

interface IMenu{
    meal: IMeal
}

export const MenuPage: React.FC<IMenu> = (): JSX.Element => {

    const [ search, setSearch ] = React.useState<string>("");
 
    return(
        <div className="menuPage">
            <header>
                <Header />
            </header>

            <div className="menuPage___container">

                <div className="header">

                    <div className="search">
                    <input type="text" placeholder="Search for Meal:" 
                            onChange={(e: ReactTypes.RCE) => setSearch(e.target.value)}/>            
                    </div>

                    <div className="cart">
                        <Link to="/cart">
                            <IconButton>
                                <ShoppingCartIcon style={{ fontSize: '35px' }} />
                            </IconButton>  
                        </Link>              
                    </div>

                </div>

                <div className="categories">
                    {
                        Categories.map((category: string) => (
                            <Category category={category} />
                        ))
                    }
                </div>

                <div className="meals">
                    <Meal name="The CheeseBurger" description="Double ground beef, 
                        fresh tomatoes, 
                        gherkins, red onions, 
                        drizzled in burger sauce" 
                        price="£5.99" />

                    <Meal name="The CheeseBurger" description="Double ground beef, 
                        fresh tomatoes, 
                        gherkins, red onions, 
                        drizzled in burger sauce" 
                        price="£5.99" />


                    <Meal name="The CheeseBurger" description="Double ground beef, 
                        fresh tomatoes, 
                        gherkins, red onions, 
                        drizzled in burger sauce" 
                        price="£5.99" />

                    <Meal name="The CheeseBurger" description="Double ground beef, 
                        fresh tomatoes, 
                        gherkins, red onions, 
                        drizzled in burger sauce" 
                        price="£5.99" />

                    <Meal name="The CheeseBurger" description="Double ground beef, 
                        fresh tomatoes, 
                        gherkins, red onions, 
                        drizzled in burger sauce" 
                        price="£5.99" />


                    <Meal name="The CheeseBurger" description="Double ground beef, 
                        fresh tomatoes, 
                        gherkins, red onions, 
                        drizzled in burger sauce" 
                        price="£5.99" />

            </div>

            </div>

        </div>
    );
}