import { SummaryAnchors, SummaryContainer, SummaryHeader } from "./styles";

import { ArrowUpRight, Buildings, GithubLogo, Users } from "phosphor-react";

import api from '../../../../lib/api';
import { useState, useEffect } from "react";

interface User {
  avatar_url: string;
  name: string;
  bio: string;
  login: string;
  followers: number;
  location: string;
};

export function Summary() {

  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
  async function getUser() {
    try {
      const response = await api.get('users/DaniloFernanades');
      const data = response.data;

      setUser(data);
    } catch (error) {
      console.error(error);
    }
  }
  getUser()
}, []);

  

  // "https://api.github.com/users", "/DaniloFernanades"
  // "https://api.github.com/search"
  // "https://api.github.com/repos/lucaspedronet/TudoLista/issues"

  return (
    <SummaryContainer>
      <img src={user?.avatar_url} />
      <section>
        <SummaryHeader>
          <h1>{user?.name}</h1>
          <a href="https://github.com/DaniloFernanades" target="_blank">
            GITHUB
            <ArrowUpRight size={12} />
          </a>
        </SummaryHeader>
        <p>{user?.bio}</p>
        <SummaryAnchors>
          <div>
            <GithubLogo size={18} />
            <span>{user?.login}</span>
          </div>

          <div>
            <Buildings size={18} />
            <span>{user?.location}</span>
          </div>

          <div>
            <Users size={18} />
            <span>{user?.followers}</span>
          </div>
        </SummaryAnchors>
      </section>
    </SummaryContainer>
  );
}
