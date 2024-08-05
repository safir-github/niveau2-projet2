//GitHubProfile.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GitHubProfile = ({ username }) => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(`https://api.github.com/users/${username}`);
        setProfile(response.data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchProfile();
  }, [username]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading profile: {error.message}</p>;

  return (
    <div className="github-profile">
      <img src={profile.avatar_url} alt={profile.name} style={{ width: '150px' }} />
      <h1>{profile.name}</h1>
      <p>{profile.bio}</p>
      <p>Followers: {profile.followers}</p>
      <p>Following: {profile.following}</p>
      <p>Public Repos: {profile.public_repos}</p>
      <a href={profile.html_url} target="_blank" rel="noopener noreferrer">View Profile</a>
    </div>
  );
};

export default GitHubProfile;
