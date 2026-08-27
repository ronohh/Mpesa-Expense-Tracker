import React from "react";

const Sidebar = () => {
    return(
        <div>
            <div>
                <span className=""></span>
                <span></span>
            </div>

            <div>
                <ul>
                    {
                        menuLinks.map( (item) => (
                            <li>
                                <NavLink></NavLink>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}
export default Sidebar;