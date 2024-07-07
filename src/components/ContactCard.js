import React from "react";
import user from "../images/man.png"

function ContanctCard(props) {
    const {id, name, email} = props.contact;
    return (
        <div className="ui card">
            <div className="content">
                <div className="ui grid">
                    <div className="four wide column">
                        <img className="ui avatar image" src={user} alt="user"/>
                    </div>
                    <div className="twelve wide column">
                        <h3 className="header">{name}</h3>
                        <div>{email}</div>
                    </div>
                </div>
                <i 
                    className="trash icon" 
                    style={{color: "white", marginTop: "7px", float: "right", cursor: "pointer"}}
                    onClick={() => props.clickHandler(id)}
                ></i>
            </div>
        </div>
    );
}

export default ContanctCard;