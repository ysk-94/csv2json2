class CSVParser {
  private data: string;
  private isColumnStart: boolean;
  private parsedData: string[][];
  private lf = '\n';

  constructor(data: string) {
    this.data = data;
    this.isColumnStart = false;
    this.parsedData = [];
  }

  exec() {
    let column = '';
    let row = [];

    // iterate
    for (let i=0; i<this.data.length; i++) {
      // カラム内
      if (this.isColumnStart) {
        if (this.data[i] === '"') {
          row.push(column);
          column = '';
          this.isColumnStart = false;
        } else {
          column += this.data[i];
        }
      } 
      // カラム外
      else {
        if (this.data[i] === '"') {
          this.isColumnStart = true;
        } else if (this.data[i] === this.lf) {
          this.parsedData.push(row);
          column = '';
          row = [];
        } 
      }
    }

    return this.parsedData;
  }
}

export default CSVParser;

