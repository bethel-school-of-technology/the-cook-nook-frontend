import { Deserializable } from './deserializable.model';

export class Recipe implements Deserializable {
            public id: number;
            public type: string; 
            public name: string;
            public desc: string;
            public time: string;
            public ing: string;
            public toolsNeeded: string;
            public instructs: string;

            deserialize(input: any): this {
                return Object.assign(this, input);
              }
        }


            //Worked as a team to connect models
        