import ContentSection from "./ContentSection";

function ContentCard() {
  return (
    <article className="glass text-text flex min-h-0 flex-1 flex-col rounded-4xl p-5 ease-in-out">
      <h2 className="mb-5 text-xl font-medium">Artificial Intelligence</h2>
      <div className="flex flex-col gap-5 overflow-y-auto">
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
                  Ipsa fugit natus, quis adipisci dolor architecto veniam recusandae, quod dolore nisi accusantium doloremque nemo excepturi delectus. Dolor magni sint autem ullam eum officiis mollitia similique. Laudantium totam saepe provident.
                  Obcaecati nisi maxime, nobis eaque rerum cupiditate ipsum neque dolores temporibus. Sed quo eligendi ab voluptate. Nisi illum suscipit beatae harum maxime animi, dolorum esse et id officiis cum. Possimus?
                  Eos, quis error nostrum odit consectetur exercitationem aspernatur odio, et, labore delectus sapiente corrupti est voluptas tempora voluptate atque tempore minus iusto! Aspernatur, ipsam dolore fuga facere vero accusamus voluptates.
                  Quod, quas magnam iusto, in earum perferendis ullam soluta, itaque minima recusandae facilis impedit tempore maxime? Praesentium non aliquid in laboriosam autem expedita sequi placeat maiores! Libero soluta esse a.
                  Illum delectus dolore aspernatur, amet debitis possimus ex esse quo blanditiis rerum eius molestias neque inventore officia cum libero qui ad nihil consectetur eveniet, ipsum non sapiente, aliquid cumque? Praesentium?
                  Perspiciatis aspernatur odit vel perferendis reiciendis maiores pariatur in laudantium alias voluptates tempora eaque harum sequi voluptate hic ratione aliquid, sit neque earum quaerat error maxime? Sed suscipit amet incidunt?
                  Porro aut possimus voluptatum obcaecati, at eius quidem tenetur vel quia odio voluptatibus itaque? Dicta eveniet sed nulla dolores laudantium, vel error optio ullam, harum id in impedit. Voluptate, animi.
                  Corporis mollitia delectus quaerat veniam natus, inventore dolor maxime perspiciatis? Recusandae quisquam sapiente nesciunt, asperiores, voluptatibus suscipit odio placeat vel mollitia amet explicabo aperiam, nobis iure incidunt quod illo culpa?
                  Iusto, iste tenetur a nihil odio porro quidem est quaerat. Ipsum sapiente id debitis repellendus iusto qui mollitia sed laboriosam suscipit doloremque at ex, maiores cupiditate molestiae neque similique fugiat."
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
