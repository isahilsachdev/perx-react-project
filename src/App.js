import React, {useState} from 'react';
import { connect } from 'react-redux';
import UserInput from './components/UserInput/UserInput';
import RepositoryList from './components/RepositoryList/RepositoryList';
import OrganizationList from './components/OrganizationList/OrganizationList';
import { setUserInfo } from './redux/actions/userActions';
import { setRepos } from './redux/actions/reposActions';
import { setOrgs } from './redux/actions/orgsActions';
import './App.css';
import { fetchUserData, fetchUserOrganizations, fetchUserRepositories } from './api';


const App = ({user, repos, orgs, setUserInfo, setRepos, setOrgs}) => {
  const [loading, setLoading] = useState(false);

  const handleUserSubmit = async (username) => {
    try {
      setLoading(true);

      const userData = await fetchUserData(username);
      const repoData = await fetchUserRepositories(username);
      const orgData = await fetchUserOrganizations(username);

      setUserInfo(userData);
      setRepos(repoData);
      setOrgs(orgData);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };


  return (
    <div>
      <div className="user-info">
        <h1>GitHub Data Viewer</h1>
        <img src="https://static-00.iconduck.com/assets.00/github-icon-2048x1988-jzvzcf2t.png" alt="github-icon" />
      </div>
      <UserInput onUserSubmit={handleUserSubmit} isLoading={loading} />
      <br />
      <br />
      {loading ? (
        null
      ) : (
        <>
          {user && user.name && (
            <>
            <div className="user-info">
              {
                user.avatar_url ? (
                  <img src={user.avatar_url} alt="User Avatar" className="avatar" />
                  ) : (
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5XgWCtsF3pG6ZCRjnmobAyYEP9o7b3y1CXFPkMy_rgbCHybvBOgHqYEKXv5c39QL_8Ig&usqp=CAU" alt="User Avatar" className="avatar" />
                )
              }
              <div>
                <p><strong>Name:</strong> {user.name}</p>
                {user.bio && <p><strong>Bio:</strong> {user.bio}</p>}
              </div>
            </div>
            <br />
          </>
          )}
          {repos !== null && <RepositoryList repositories={repos} />}
          <br />
          {orgs !== null && <OrganizationList organizations={orgs} />}
        </>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.userInfo.user,
  repos: state.repos.repos,
  orgs: state.orgs.orgs,
});

const mapDispatchToProps = {
  setUserInfo,
  setRepos,
  setOrgs,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
