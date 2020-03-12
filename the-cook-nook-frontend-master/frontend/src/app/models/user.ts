import { Recipe } from './recipe';
import { Deserializable } from './deserializable.model';

export class User implements Deserializable {
    public id: number;
    public username: string; 
    public password: string;
    public recipes: Recipe[];

    deserialize(input: any): this {
        
        Object.assign(this, input);
    
        this.recipes = input.recipes.map(recipe => new Recipe().deserialize(recipe));
    
        return this;
      }
    
}

//Worked as a team to connect models