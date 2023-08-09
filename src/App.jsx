/* eslint-disable react/prop-types */
function Header() {
  return (
    <header>
      <a href="#">Home</a> | <a href="#recipes-index">All recipes</a> | <a href="#recipes-new">New recipe</a>
    </header>
  );
}

function RecipesNew() {
  return (
    <div id="posts-new">
      <h1>New recipe</h1>
      <form action="">
        <label htmlFor="title">Title: </label>
        <input type="text" id="title" name="title" />
        <label htmlFor="body">Body: </label>
        <input type="text" id="body" name="body" />
        <label htmlFor="image">Image: </label>
        <input type="text" id="image" name="image" />
      </form>
    </div>
  );
}

function RecipesIndex(props) {
  console.log(props);
  return (
    <div id="posts-index">
      <h1>All Recipes</h1>
      {props.recipes.map((recipe) => (
        <div key={recipe.id} className="recipes">
          <h2>{recipe.title}</h2>
          <p>{recipe.body}</p>
          <img src={recipe.image_url} alt={recipe.title} />
        </div>
      ))}
    </div>
  );
}

function Content() {
  let recipes = [
    {
      id: 1,
      title: "Apple Pie",
      body: "Good pie!",
      image_url: "https://www.inspiredtaste.net/wp-content/uploads/2022/11/Apple-Pie-Recipe-Video.jpg",
    },
    {
      id: 2,
      title: "Honey Biscuit",
      body: "Good biscuit!",
      image_url: "https://lemonsandzest.com/wp-content/uploads/2020/04/Honey-Biscuits-3.jpg",
    },
  ];
  return (
    <div>
      <RecipesNew />
      <RecipesIndex recipes={recipes} />
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <p>Copyright 2023</p>
    </footer>
  );
}

function App() {
  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
