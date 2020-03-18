import fs from 'fs';
import CSVParser from './parser';
import Converter from './converter';

export const exec = () => {
  fs.readFile('input.csv', (err, data) => {
  	if (err) throw err;
  
    const parser = new CSVParser(data.toString());
    const parsedData: string[][] = parser.exec();

    const converter = new Converter(parsedData);
    const jsonStr: string = converter.exec();

    fs.writeFile('result/result.json', jsonStr, err => console.error(err));
  });
};
