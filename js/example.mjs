import env from "dotenv";
import { MongoClient, ServerApiVersion } from "mongodb";

//.envファイルを参照する
env.config();

const client = new MongoClient(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

//mongodbに接続してdbのコレクションを返す。エラーの場合はクローズ
async function getCollection() {
  try {
    await client.connect();
    const db = client.db("bookshelf");
    return db.collection("books");
  } catch {
    await client.close();
  }
}

getAllBooks();
async function getAllBooks() {
  //コレクションを変数に格納
  const col = await getCollection();
  //データの検索
  // const cursor = col.find({ $or: [{rating: 5}, {title: "バックエンド開発"}] });
  const cursor = col.find({ title: { $in: ["ごんぎつね4", "バックエンド開発"] } })
  
  //データの挿入
  // const result = await col.insertOne({ title: "こんにちは" });
  // const result = await col.insertMany([{
  //   title: "さようなら",
  //   int: 10,
  //   bool: true,
  //   dt: new Date,
  //   arry: [0, 1, 2],
  //   obj: { animal: "dog" }
  // },
  // { title: "こんにちは２" }]);

  //データの削除
  // const result = await col.deleteOne({ title: "こんにちは２" });
  // const result = await col.deleteMany({ title: "さようなら" });

  //データの更新
  // const result = await col.updateOne({ title: "バックエンド開発" }, { $set: {rating: 3} });
  // const result = await col.updateMany({ description: "三島由紀夫" }, { $set: { rating: 3 } });


  //dbに格納されているレコードを一覧で取得
  // const result = await cursor.toArray();
  console.log(result);
  await client.close();
}
