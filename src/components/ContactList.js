import React from "react";
import ContanctCard from "./ContactCard";

function ContanctList(props) {
    //handle delete click for contact
    const deleteContactHandler = (id) => {
        props.getContactId(id); //pass contact id to parent's delete handler
    };

    //function that display each and every contact in contacts
    const renderContactList = props.contacts.map((contact) => {
        return (
            <ContanctCard 
                contact={contact} 
                clickHandler={deleteContactHandler}
                key={contact.id}
            />
        );
    });
    return (
        <div className="ui celled list">
            {renderContactList}
        </div>
    );
}

export default ContanctList;