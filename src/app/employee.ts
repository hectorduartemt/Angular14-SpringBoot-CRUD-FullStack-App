export class Employee {
    id: number;
    firstName: string;
    lastName: string;
    emailId: string;

    constructor( id?: number, firstName?: string, lastName?: string, emailId?: string ) {
        this.id = id || 0;
        this.firstName = firstName || '';
        this.lastName = lastName || '';
        this.emailId = emailId || '';
    }
}
