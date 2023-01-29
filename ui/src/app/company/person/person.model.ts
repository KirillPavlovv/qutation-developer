export class Person {

  public firstName: string;
  public lastname: string;
  public phoneNumber: string;
  public email: string;

  constructor(firstName: string, lastname: string,
              phoneNumber: string, email: string) {
    this.firstName = firstName;
    this.lastname = lastname;
    this.phoneNumber = phoneNumber;
    this.email = email;
  }
}
