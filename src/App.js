import React from "react";

export default class Form extends React.Component {
    handleSubmitClick = () => {
        const name = this._name.value
        const phone = this._phone.value
        const address = this._address.value
        alert(`
            ФИО: ${name}
            Телефон: ${phone}
            Адрес: ${address}`)
    }

    render() {
        return (
            <div className={'wrapper'}>
                <h1>Form</h1>
                <div className={'inputs'}>
                    <input type="text" ref={input => this._name = input} placeholder={'Your full name...'}/>
                    <input type="text" ref={input => this._phone = input} placeholder={'Your phone...'}/>
                    <input type="text" ref={input => this._address = input} placeholder={'Your address...'}/>
                </div>
                <button onClick={this.handleSubmitClick}>Submit Data</button>
            </div>
        )
    }
}