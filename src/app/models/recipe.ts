export class Recipe {
  
            id: number;
            type: string; // field for a radio choice/dropdown/select list
            name: string;
            desc: string;
            time: string;
            ing: [];
            toolsNeeded: [];
            instructs: [
                {id: number,
                name: string,
                subDesc: string}]
            }
            //just recipe add field/ type field radio
        