class Converter {
  private data: string[][];
  private header: string[] = ["情報１", "情報２", "情報３"];
  private json: string = '';

  constructor(data: string[][]) {
    this.data = data;
  }

  exec() {
    console.log(this.data);
    this.json += '[';

    for (let i=0; i<this.data.length; i++) {
      this.json += '{';
      for (let j=0; j<this.header.length; j++) {
        this.json += `"${this.header[j]}":"${this.data[i][j]}"`;
        if (j !== this.header.length-1) {
          this.json += ',';
        }
      }
      this.json += '}';
      if (i !== this.data.length-1) {
        this.json += ',';
      }
    }

    this.json += ']';

    return this.json;
  }
}

export default Converter;
