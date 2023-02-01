export class CustomerRegistrationRequest {

  public companyName: string;

  public generalAddress: string;

  public firstName: string;

  public lastName: string;

  public email: string;

  public phoneNumber: string;

  constructor(companyName: string, generalAddress: string,
              firstName: string, lastName: string, phoneNumber: string, email: string) {
    this.companyName = companyName;
    this.generalAddress = generalAddress;
    this.firstName = firstName;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
    this.email = email;
  }
}
