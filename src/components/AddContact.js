import React from "react";

class AddContact extends React.Component {
    //define state (initially)
    state = {
        name: "",
        email: ""
    }

    //handle form submission. display error msg if the field blank
    add = (e) => {
        e.preventDefault(); //prevent reload page after add
        if (this.state.name === "" || this.state.email === "") {
            alert("All the fields are mandatory!");
            return;
        }
        this.props.addContactHandler(this.state);
        this.setState({name:"", email:""}) //reset form state afer submit
        console.log(this.state);
    }

    render() {
        return (
            <div className="ui main">
                <h2>Add Contact</h2>
                <form className="ui form" onSubmit={this.add}>
                    <div className="field">
                        <label>Name: </label>
                        <input 
                            type="text" 
                            name="name" 
                            placeholder="Name"
                            value={this.state.name} 
                            onChange={(e)=> this.setState({name: e.target.value})}
                        />
                    </div>
                    <div className="field">
                        <label>Email: </label>
                        <input 
                            type="text" 
                            name="email" 
                            placeholder="Email"
                            value={this.state.email} 
                            onChange={(e)=> this.setState({email: e.target.value})}
                        />
                    </div>
                    <button className="ui button" style={{backgroundColor: "#384a58", color: "white"}}><i className="plus square icon"></i>Add</button>
                </form>
            </div>
        );
    }
}

export default AddContact;