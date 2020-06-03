import React, { useState } from 'react';

import Header from './components/Header';
import Post from './components/Post';
import Story from './components/Story';

function App() {
  const [stories, setStories] = useState([
    {
      id: 1,
      user_thumb: "./img/profiles/yoda/yoda-profile.jpg",
      user_name: "Yoda",
      visualized: true
    },
    {
      id: 2,
      user_thumb: "./img/profiles/gamora/gamora-profile.jpg",
      user_name: "Gamora",
      visualized: false
    },
    {
      id: 3,
      user_thumb: "./img/profiles/black-panther/black-panther-profile.jpg",
      user_name: "Pantera Negra",
      visualized: true
    }
  ]);
  const [posts, setPosts] = useState([
    {
      id: 1,
      name: "Yoda",
      user_thumb: "./img/profiles/yoda/yoda-profile.jpg",
      user_name: "Mestre Yoda",
      post_figure: "./img/profiles/yoda/yoda-1.jpg",
      likes_number: 7,
      show_like: {
        user_name: "Domino",
        user_thumb: "./img/profiles/domino/domino-profile.jpg"
      },
      liked: false
    },
    {
      id: 2,
      name: "Gamora",
      user_thumb: "./img/profiles/gamora/gamora-profile.jpg",
      user_name: "Gamora Zen",
      post_figure: "./img/profiles/gamora/gamora-1.jpg",
      likes_number: 7,
      show_like: {
        user_name: "Carol Danvers",
        user_thumb: "./img/profiles/carol/carol-profile.jpg"
      },
      liked: false
    },
    {
      id: 3,
      name: "T'Challa",
      user_thumb: "./img/profiles/black-panther/black-panther-profile.jpg",
      user_name: "T'Challa",
      post_figure: "./img/profiles/black-panther/black-panther-1.jpg",
      likes_number: 5,
      show_like: {
        user_name: "Bruce Wayne",
        user_thumb: "./img/profiles/bruce/bruce-profile.jpg"
      },
      liked: false
    },
    {
      id: 4,
      name: "Carol Danvers",
      user_thumb: "./img/profiles/carol/carol-profile.jpg",
      user_name: "Carol Danvers",
      post_figure: "./img/profiles/carol/carol-1.jpg",
      likes_number: 7,
      show_like: {
        user_name: "Mestre Yoda",
        user_thumb: "./img/profiles/yoda/yoda-profile.jpg"
      },
      liked: false
    },
    {
      id: 5,
      name: "Domino",
      user_thumb: "./img/profiles/domino/domino-profile.jpg",
      user_name: "Domino",
      post_figure: "./img/profiles/domino/domino-1.jpg",
      likes_number: 3,
      show_like: {
        user_name: "T'Challa",
        user_thumb: "./img/profiles/black-panther/black-panther-profile.jpg"
      },
      liked: false
    },
    {
      id: 6,
      name: "Bruce Wayne",
      user_thumb: "./img/profiles/bruce/bruce-profile.jpg",
      user_name: "Bruce Wayne",
      post_figure: "./img/profiles/bruce/bruce-1.jpg",
      likes_number: 2,
      show_like: {
        user_name: "Gamora Zen",
        user_thumb: "./img/profiles/gamora/gamora-profile.jpg"
      },
      liked: false
    }
  ]);

  return (
    <div>
      <Header />

      <main className="main">
				<section className="stories container">
					{stories && 
            stories.map(story => <Story key={story.id} story={story} />)
          }
				</section>

				<section className="feed container">
					{posts &&
            posts.map(post => <Post key={post.id} post={post} />)
          }
				</section>
			
		  </main>
	</div>
  );
}

export default App;
