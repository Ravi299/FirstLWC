import { LightningElement } from 'lwc';

export default class FirstLWC extends LightningElement {
    firstName = '';
    lastName = '';
    areDetailsVisible = false;
//Updating
    handleChange(event) {
        const field = event.target.name;
        if (field === 'firstName') {
            this.firstName = event.target.value;
        } else if (field === 'lastName') {
            this.lastName = event.target.value;
        }
        this.areDetailsVisible = event.target.checked;
    }

    get upperCasedFullName() {
        return `${this.firstName} ${this.lastName}`.toUpperCase();
    }
}
