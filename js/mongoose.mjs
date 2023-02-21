import mongoose from "mongoose";
import env from "dotenv";

env.config();
//mongooseに接続
mongoose.connect(process.env.MONGO_URI);

const Cat = mongoose.model('Cat', { name: String });

const kitty = new Cat();
kitty.name = "maikeru";
kitty.save().then(() => console.log('meow'));