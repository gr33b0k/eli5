import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());
const port = 3000;

app.post("/api/explain", async (req, res) => {
  const { query, level } = req.body;

  res.json({
    title: query,
    sections: [
      {
        type: "Idea",
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Cupiditate qui deserunt eligendi, sit optio quibusdam ipsa cumque ipsam! 
                  Facere perferendis velit aspernatur, libero ab maiores 
                  error vero perspiciatis voluptatum fugit.`,
      },
      {
        type: "Example",
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Obcaecati enim a earum rerum labore magnam dolorem mollitia iste, 
                  aliquam recusandae similique quia dignissimos at. Nobis voluptas ipsum quae et magni!
                  Ipsa fugit natus, quis adipisci dolor architecto veniam recusandae, quod dolore nisi
                  accusantium doloremque nemo excepturi delectus. Dolor magni sint autem ullam eum officiis
                  mollitia similique. Laudantium totam saepe provident.`,
      },
      {
        type: "Summary",
        content: `Itaque dolor voluptate nemo quia quod. Reiciendis magnam
                  alias temporibus rerum nesciunt quia illum id possimus neque 
                  rem nisi provident distinctio, nam iusto a nemo explicabo aut sint saepe ut?
                  Ea placeat accusamus sunt laborum aperiam nemo, assumenda at. Adipisci,
                  voluptas corporis accusamus magnam minus culpa vitae voluptates deserunt
                  consequuntur est cumque? Temporibus rerum, laudantium facilis recusandae 
                  inventore consectetur blanditiis.`,
      },
    ],
  });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
