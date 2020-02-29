export class UserUpdateCommand {
  public id: string;

  readonly name?: string;

  readonly mailAddress?: string;

  constructor(id: string, { name, mailAddress }: { name?: string; mailAddress?: string }) {
    this.id = id;
    this.name = name;
    this.mailAddress = mailAddress;
  }
}
