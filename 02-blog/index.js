const Post = ({ title, subtitle, content, shortContent }) => {
  const [showContent, setShowContent] = React.useState(false);
  const showMoreContent = () => setShowContent(true);
  

  return (
    <div>
      <p>{title}</p>
      <div>
        <h2>{subtitle}</h2>
        {showContent ? (
          <>
            <p>{content}</p>
          </>
        ) : (
          <>
            <p>{shortContent}</p>
            <button onClick={showMoreContent}>Czytaj więcej</button>
          </>
        )}
      </div>
      <hr />
    </div>
  );
};

const Blog = function () {
  const posts = [
    {
      id: 1,
      title: "nastawienie psychiczne",
      subtitle: "Motywacja i demotywacja",
      shortContent: "Jak poradzić sozbie z ...",
      content: "Ja poradzić sobie z początkowymi problemami poznawania nowych technologi",
    },
    {
      id: 2,
      title: "Instalacja i przygotowanie środowiska pracy",
      subtitle: "Lekcja 0 - Przygotowanie",
      shortContent: "Jak przygotować środowisko pracy...",
      content: "W tym poradniku dowiesz się jak pobrać i zainstalować środowisko do pracy",
    },
    {
      id: 3,
      title: "Pierwszy napisany kod",
      subtitle: "Lekcja 1 - Zaczynamy Działać",
      shortContent: "Jak zacząć działać z kodem...",
      content: "Pierwszy kod, wyjaśnienie niezbędnej teorii oraz początkowe przykłady",
    },
  ];

  return (
    <div>
      <h1>Blog</h1>
      {posts.map((post) => {
        return <Post key={post.id} {...post} />;
      })}
    </div>
  );
};

ReactDOM.render(<Blog />, document.getElementById("root"));
