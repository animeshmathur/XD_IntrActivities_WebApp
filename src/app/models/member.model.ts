export class Member{
    id: number;
    psaId: string;
    fName: string;
    lName: string;
    birthday: {
        day: number,
        month: number
    };
    dateOfJoining: {
        day: number,
        month: number,
        year: number
    };
    location: string;
    email: string;
    
    public fullName(){
        return this.fName + " " + this.lName;
    }
}