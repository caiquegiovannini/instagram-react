import React from 'react';

export default function Post({ post }) {
  const {
    name,
    user_thumb,
    user_name,
    post_figure,
    likes_number,
    show_like,
    liked
  } = post;

  return (
    <div className="card">
      <div className="card__header">

        <div className="card__profile">
          <a href={`/${name}`} className="card__avatar">
            <img src={user_thumb} alt={name} className="card__avatar-img" />
          </a>

          <a href={`/${name}`} className="card__profile-name">
            {user_name}
          </a>
        </div>

        <div className="card__options">
          <i className="fas fa-ellipsis-h" />
        </div>
      </div>

      <div className="card__content">

        <img src={post_figure} alt={name} className="card__img" />

        <div className="card__action-bar">
          <div className="card__icon">
            <i className="far fa-heart" />
            <i className="far fa-comment" />
          </div>
          <div className="card__icon">
            <i className="far fa-bookmark" />
          </div>
        </div>

      </div>

      <div className="card__footer">
        <a href={`/${show_like.user_name}`} className="card__avatar card__avatar--footer">
          <img src={show_like.user_thumb} alt={show_like.user_name} className="card__footer-img" />
        </a>

        <p className="card__likes">
          curtido por <a href={`/${show_like.user_name}`}>{show_like.user_name}</a> e outras <a href="#">{likes_number} pessoas</a>
        </p>
      </div>
    </div>
  );
};