import ContentSection from "./ContentSection";

function ContentCard({ title }) {
  return (
    <article className="glass text-text flex h-max max-h-max min-h-0 flex-1 flex-col rounded-4xl p-5 ease-in-out">
      <h2 className="mb-5 text-xl font-medium capitalize">{title}</h2>
      <div className="custom-scrollbar -mr-2.5 flex flex-col gap-5 overflow-y-auto pr-2.5">
        <ContentSection
          type="Idea"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Cupiditate qui deserunt eligendi, sit optio quibusdam ipsa cumque ipsam! 
                  Facere perferendis velit aspernatur, libero ab maiores 
                  error vero perspiciatis voluptatum fugit."
        />
        <ContentSection
          type="Example"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati enim a earum rerum labore magnam dolorem mollitia iste, aliquam recusandae similique quia dignissimos at. Nobis voluptas ipsum quae et magni!
                  Ipsa fugit natus, quis adipisci dolor architecto veniam recusandae, quod dolore nisi accusantium doloremque nemo excepturi delectus. Dolor magni sint autem ullam eum officiis mollitia similique. Laudantium totam saepe provident."
        />
        <ContentSection
          type="Summary"
          content="Itaque dolor voluptate nemo quia quod. Reiciendis magnam alias temporibus rerum nesciunt quia illum id possimus neque rem nisi provident distinctio, nam iusto a nemo explicabo aut sint saepe ut?
                  Ea placeat accusamus sunt laborum aperiam nemo, assumenda at. Adipisci, voluptas corporis accusamus magnam minus culpa vitae voluptates deserunt consequuntur est cumque? Temporibus rerum, laudantium facilis recusandae inventore consectetur blanditiis."
        />
      </div>
    </article>
  );
}

export default ContentCard;
