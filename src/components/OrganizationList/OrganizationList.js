import React from 'react';
import '../../App.css';

const OrganizationList = ({ organizations }) => {
    const openRepoInNewTab = (url) => {
        window.open(url, '_blank');
    };
    return (
        <div>
            <h2>Organizations</h2>
            {organizations && organizations.length > 0 ? (
                <ul className="repo-pills">
                    {organizations?.map((org) => (
                        <li key={org.id}>
                        <button
                            className="pill-button"
                            onClick={() => openRepoInNewTab(`https://github.com/${org.login}`)}
                        >
                            {org.login}
                        </button>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No Organizations Available</p>
            )}
        </div>
    );
};

export default OrganizationList;
