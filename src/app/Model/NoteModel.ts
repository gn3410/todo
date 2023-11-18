export class NoteClass {
  private ID: number;
  private Title: string;
  private Context: number;
  private Type: string;
  constructor(data: any) {
    this.ID = data.ID || '';
    this.Title = data.Title || '';
    this.Context = data.Context || '';
    this.Type = data.Type || '';
  }
}
