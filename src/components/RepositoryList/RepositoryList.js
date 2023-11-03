import React from 'react';
import '../../App.css';

const RepositoryList = ({ repositories }) => {
  const openRepoInNewTab = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div>
      <h2>Repositories</h2>
      {repositories && repositories?.length > 0 ? (
        <ul className="repo-pills">
          {repositories?.map((repo) => (
            <li key={repo.id}>
              <button
                className="pill-button"
                onClick={() => openRepoInNewTab(repo.html_url)}
              >
                {repo.name}
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No Repositories Available</p>
      )}
    </div>
  );
};

export default RepositoryList;
