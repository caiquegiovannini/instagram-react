import React from 'react';

export default function Story({ story }) {
  const { user_thumb, user_name, visualized } = story;

  return (
    <a href="/" className={visualized ? "stories__item" : "stories__item stories__item--new"}>
      <img src={user_thumb} alt={user_name} className="stories__img" />
    </a>
  );
};